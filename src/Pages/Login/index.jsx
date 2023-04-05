import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/AuthContext";
import Icon from "react-native-vector-icons/EvilIcons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  FadeOutDown,
  FadeInUp,
  cancelAnimation,
  FadeInDown,
} from "react-native-reanimated";

export default function Login() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { signIn } = useContext(AuthContext);

  const rotation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);

  const fetchSignIn = async () => {
    if (!user.username || !user.password || loading) return;
    try {
      setLoading(true);
      await signIn(user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  function animatedSpinner() {
    return (
      <Animated.View
        style={[styles.spinner, animatedStyles]}
        entering={FadeInUp}
        exiting={FadeOutDown}
      >
        <Icon name="spinner-3" size={30} color={"white"} />
      </Animated.View>
    );
  }

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      200
    );
    return () => cancelAnimation(rotation);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        entering={FadeInDown}
        exiting={FadeOutDown}
        style={styles.scrollView}
        maximumZoomScale={1}
        minimumZoomScale={1}
        horizontal={false}
        bouncesZoom={true}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Sign in.</Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Username"
            value={user.username}
            placeholderTextColor={"#ffffff99"}
            onSubmitEditing={() => fetchSignIn()}
            onChangeText={(e) => setUser({ ...user, username: e })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={user.password}
            onChangeText={(e) => setUser({ ...user, password: e })}
            onSubmitEditing={() => fetchSignIn()}
            placeholderTextColor={"#ffffff99"}
            style={styles.textInput}
          />
          <TouchableOpacity
            style={styles.formButton}
            disabled={loading}
            onPress={() => fetchSignIn()}
          >
            <LinearGradient
              colors={["#bf42d9", "#ff9c7e"]}
              style={styles.linearGradient}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            >
              {loading ? (
                animatedSpinner()
              ) : (
                <Text style={styles.buttonText}>Sign in</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.linksContainer}>
          <Text
            onPress={() => navigation.navigate("Register")}
            style={styles.link}
          >
            Don't have an account?{" "}
            <Text style={styles.bold}>Create Account</Text>
          </Text>
          <Text onPress={() => navigation.navigate("/")} style={styles.bold}>
            Forgot password?
          </Text>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
