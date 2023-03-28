import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { Button, StyleSheet } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import Dashboard from "../Pages/Dashboard";
const AppStack = createNativeStackNavigator();



const AppRoutes = () => {
  const { destroySession } = useContext(AuthContext);

  return (
    <AppStack.Navigator initialRouteName="Login">
      <AppStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerStyle: {
            backgroundColor: "#181820",
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "#ffffff",
          },
          headerTitle: "TodoApp",
          headerRight: () => <Button onPress={() => destroySession()} color={"#ffffff1a"} title={"LogOut"} />,
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
