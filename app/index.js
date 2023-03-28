// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../src/Pages/Login';
import Register from '../src/Pages/Register';
import Routes from '../src/Routes';
import { AuthProvider } from '../src/contexts/AuthContext';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <AuthProvider>
      <NavigationContainer independent={true} >
        <Routes />
      </NavigationContainer>
    </AuthProvider>

  );
}

export default App;