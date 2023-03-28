import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import connection from "../../../config/connection";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { signIn } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
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
            onChangeText={(e) => setUser({ ...user, username: e })}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={user.password}
            onChangeText={(e) => setUser({ ...user, password: e })}
            placeholderTextColor={"#ffffff99"}
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.formButton} onPress={() => signIn(user)}>
            <LinearGradient
              colors={["#bf42d9", "#ff9c7e"]}
              style={styles.linearGradient}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            >
              <Text style={styles.buttonText}>Sign in</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
}
