import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import {StyleSheet, View, Image, TouchableOpacity, Button} from 'react-native';
import UserDashboard from '../pages/dashboard/user';
import Tests from '../pages/tests';
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import { Avatar } from 'native-base';
import Add from '../pages/add';



const CustomTabBarButton = ({children,  onPress}: any) => (
    <TouchableOpacity
    style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow
    }}
    onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: "#fff",
        }}>
            {children}
        </View>
    </TouchableOpacity>

)
const Tab = createBottomTabNavigator();


export default function Tabs({ navigation }) {
    return(
        
        <Tab.Navigator
            screenOptions={{
                headerTransparent: true,
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: "#0E283F",
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    height:90,
                }
            }}
        >
            <Tab.Screen name="Home" component={UserDashboard}
                options={{
                    tabBarIcon:({focused}) => (
                        <View>
                            <Entypo name="home" size={30} color={focused ? "#FCE485" : "#fff"} />
                        </View>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.openDrawer()}>
                            <FontAwesome name="user-circle" size={45} color="#0E283F" />
                        </TouchableOpacity>
                    ),
                    title:"",
                }}
            />
            <Tab.Screen name="Add" component={Add}
                options={{
                    tabBarIcon:({focused}) => (
                        <View>
                            <FontAwesome name="plus" size={30} color={focused ? "#0E283F" : "#0E283F"} />
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props}/>
                    )
                }}
            />
            <Tab.Screen name="Tests" component={Tests}
                options={{
                    tabBarIcon:({focused}) => (
                        <View>
                           <Ionicons name="calendar" size={30} color={focused ? "#FCE485" : "#fff"} />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor: "#ccc",
        shadowOffset:{
            width:0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})