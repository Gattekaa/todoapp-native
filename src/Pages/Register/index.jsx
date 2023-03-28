import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/AuthContext";

export default function Register() {
  const navigation = useNavigation();
  const { signUp } = useContext(AuthContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
    password_confirm: "",
  });
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
            onChangeText={(e) =>
              setUser({ ...user, password_confirm: e })
            }
            placeholderTextColor={"#ffffff99"}
            style={styles.textInput}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.formButton} onPress={() => signUp(user)}>
            <LinearGradient
              colors={["#bf42d9", "#ff9c7e"]}
              style={styles.linearGradient}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            >
              <Text style={styles.buttonText}>Sign up</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
}
