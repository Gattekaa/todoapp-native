import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => (
          <AuthStack.Navigator initialRouteName='Login'>
            <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false, headerLeft: null }}/>
            <AuthStack.Screen name="Register" component={Register} options={{ headerShown: false,  headerLeft: null }}/>
          </AuthStack.Navigator>
);

export default AuthRoutes