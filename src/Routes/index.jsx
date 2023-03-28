import React, { useContext } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../contexts/AuthContext";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const Routes = () => {
  const { user, destroySession } = useContext(AuthContext);

    return user?.id ? <AppRoutes /> : <AuthRoutes />
    
}

export default Routes