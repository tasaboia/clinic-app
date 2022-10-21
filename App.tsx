import 'react-native-gesture-handler';
import React from 'react';
import { Button, Divider, NativeBaseProvider, Radio } from 'native-base';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native'
import { AuthProvider } from './src/context';
import LinkingConfiguration from './src/nativation/LinkingConfiguration';
import Routes from './src/routes';
import NewPassword from './src/pages/login/recoveryPassword/NewPassword';
import PasswordFlow from './src/pages/login/recoveryPassword/StackPassword';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <AuthProvider>
          <NavigationContainer linking={LinkingConfiguration}>
            <Routes/>
          </NavigationContainer>
        </AuthProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  )
}

