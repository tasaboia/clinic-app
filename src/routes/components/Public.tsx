import React from 'react'
import Start from '../../pages/start';
import Login from '../../pages/login';
import GettingStart from '../../pages/homeform';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../../pages/register';
import PasswordFlow from '../../pages/login/recoveryPassword/StackPassword';

const Stack = createNativeStackNavigator();
export default function Public() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false}} >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PasswordFlow" component={PasswordFlow} />
      </Stack.Navigator> 
  )
}
