import React from 'react';
import {  NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context';
import LinkingConfiguration from './src/nativation/LinkingConfiguration';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import {StatusBar} from 'react-native';
import UICalendar from './src/components/UICalendar';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <AuthProvider>
          <NavigationContainer linking={LinkingConfiguration}>
              <StatusBar hidden/>
              <Routes/>
          </NavigationContainer>
        </AuthProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  )
}

