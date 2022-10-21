import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CodePassword from "./CodePassword";
import NewPassword from "./NewPassword";
import RecoveryPassword from "./RecoveryPassword";

const Stack = createNativeStackNavigator();

export default function PasswordFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recovery" options={{ title: 'Recuperação de Senha' }} component={RecoveryPassword} />
      <Stack.Screen name="CodePassword" options={{ title: 'Verificação' }} component={CodePassword} />
      <Stack.Screen name="NewPassword"
      options={{ title: 'Recuperação de Senha'}} component={NewPassword} />
    </Stack.Navigator>
  );
}