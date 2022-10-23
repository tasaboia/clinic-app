import React from 'react'
import Tabs from '../../nativation';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../../context';
import { Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { View , Dimensions, Text} from 'react-native' 
import { Avatar } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Psychologists from '../../pages/psychologists';
import { Wallet } from 'phosphor-react-native';
import Historic from '../../pages/historic';
import { ProProvider, useProData } from '../../context/Professional';
import Loading from '../../components/Loading';
const SCREEN_height = Dimensions.get('window').height

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Private() {
 return (
  <ProProvider>
    <Stack.Navigator >
      <Stack.Screen name="UserDrawer" options={{headerShown: false}} component={UserDrawer} />
      <Stack.Screen name="Psychologists" options={{ title: 'Psicologos' }} component={Psychologists} />
      <Stack.Screen name="Wallet" options={{ title: 'Minha Carteira' }} component={Wallet} />
      <Stack.Screen name="Historic" options={{ title: 'Histórico de consultas'}} component={Historic} />
    </Stack.Navigator> 
  </ProProvider>
 )
}

function UserDrawer (){
  return (
  <Drawer.Navigator 
    screenOptions={{headerShown:false}}
    drawerContent={(props) => <CustomDrawerContent {...props} />}>
    <Drawer.Screen 
      options={{
        headerTransparent: true,
        title: "",
        drawerIcon: () => {return <Feather name="arrow-right-circle" size={24} color="black" />}
      }}
      name="Tabs" component={Tabs} />
  </Drawer.Navigator>)
}


function CustomDrawerContent(props: any) {
  const { logout, user } = useAuth()
  return (
    <DrawerContentScrollView >
      <DrawerItemList {...props} />
      <View style={{justifyContent: "center", alignItems: "center", margin: 20}}>
        <Avatar size={20}/>
        <Text style={{fontWeight: "bold", fontSize:14, marginTop: 5}}>{user?.data.displayName}</Text>
        <Text style={{fontSize:12}}>{user?.data.email}</Text>

      </View>
      <View style={{height: SCREEN_height * .88}} >
        <DrawerItem 
          label="Sair" 
          icon={({ focused, color, size }) => <MaterialIcons name="logout" size={24} color="black" />} 
          style={{top: "65%"}} 
          onPress={() => logout()} />
      </View>

    </DrawerContentScrollView>
  );
}
