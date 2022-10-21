import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

export default function UserPerfil() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
}


function Perfil() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Perfil!</Text>
      </View>
    );
  }
  