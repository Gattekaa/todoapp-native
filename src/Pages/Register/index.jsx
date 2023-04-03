import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/AuthContext";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  FadeOutDown,
  FadeInUp,
  cancelAnimation,
  FadeIn,
  FadeInDown,
} from "react-native-reanimated";
import Icon from "react-native-vector-icons/EvilIcons";


export default function Register() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const { signUp } = useContext(AuthContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
    password_confirm: "",
  });

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

  async function fetchSignUp() {
    if (!user.username || !user.password || !user.password_confirm || loading)
      return;
    try {
      setLoading(true);
      await signUp(user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

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
        <Text style={styles.title}>Sign up.</Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Username"
            value={user.username}
            placeholderTextColor={"#ffffff99"}
            onChangeText={(e) => setUser({ ...user, username: e })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            value={user.password}
            onChangeText={(e) => setUser({ ...user, password: e })}
            placeholderTextColor={"#ffffff99"}
            style={styles.textInput}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Password Confirmation"
            value={user.password_confirm}
            onChangeText={(e) => setUser({ ...user, password_confirm: e })}
            placeholderTextColor={"#ffffff99"}
            style={styles.textInput}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.formButton}
            loading={loading}
            onPress={() => fetchSignUp()}
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
                <Text style={styles.buttonText}>Sign up</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.linksContainer}>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.link}
          >
            Already have an account? <Text style={styles.bold}>Sign in</Text>
          </Text>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
