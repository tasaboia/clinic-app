import React from 'react';
import {  NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context';
import LinkingConfiguration from './src/nativation/LinkingConfiguration';
import 'react-native-gesture-handler';
import Routes from './src/routes';

export default function App() {
  return (
      <NativeBaseProvider>
        <AuthProvider>
          <NavigationContainer linking={LinkingConfiguration}>
            <Routes/>
          </NavigationContainer>
        </AuthProvider>
      </NativeBaseProvider>
  )
}

