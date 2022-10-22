import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, {useState} from 'react'
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import UserDashboard from '../pages/add/user';
import Tests from '../pages/tests';
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import { Avatar, FormControl, Input, Modal, Button, PresenceTransition } from 'native-base';
import Add from '../pages/add';
import { Calendar, Chats, List, Notepad, Plus } from 'phosphor-react-native';
import Historic from '../pages/historic';
import Diary from '../pages/diary';
import CustomInput from '../components/input/Input';

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
    const [isOpen, setIsOpen] = useState(true)
    return(
        <Tab.Navigator
            screenOptions={{
                headerTransparent: true,
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: "#6A5FED",
                    height:50,
                }
            }}
            
        >
            <Tab.Screen name="Home" component={UserDashboard}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={styles.IconContainer}>
                            <Entypo name="home" size={30} color="#fff"/>
                            { focused ?  <View style={styles.highlight}/> : null }
                        </View>
                    ),
                    headerLeft: () => (
                        <>
                        
                        <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.openDrawer()}>
                            <List size={32} color="#7254EF"/>
                        </TouchableOpacity>

                        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} safeAreaTop={true}>
                        <Modal.Content maxWidth="100%" {...styles.top}>
                        <Modal.CloseButton />
                        <Modal.Header>Finalizar cadastro</Modal.Header>
                        <Modal.Body width="100%">
                            <CustomInput placeholder='Nome completo' />
                            <CustomInput placeholder='Data de nascimento' />
                            <CustomInput placeholder='Genero' />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                            setIsOpen(false);
                            }}>
                                Cancel
                            </Button>
                            <Button onPress={() => {
                            setIsOpen(false);
                            }}>
                                Save
                            </Button>
                            </Button.Group>
                        </Modal.Footer>
                        </Modal.Content>
                        </Modal>
                              </>                  
                    ),
                    title:"",
                }}
            />
            <Tab.Screen name="Diary" component={Diary}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={styles.IconContainer}>
                            <Calendar size={32} color="#fff"/>
                            { focused ? <View style={styles.highlight}/> : null }
                        </View>
                    ),
                    
                }}
            />
            <Tab.Screen name="Add" component={Add}
                options={{
                    tabBarIcon:({focused}) => (
                        <View>
                            <Plus size={32} color={focused ? "#3C3592" : "#534AC8"} />
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props}/>
                    )
                }}
            />
            <Tab.Screen name="Historic" component={Historic}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={styles.IconContainer}>
                            <Notepad size={32} color="#fff"/>
                            { focused ? <View style={styles.highlight}/> : null }
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Tests" component={Tests}
                options={{
                    tabBarIcon:({focused}) => (
                        <View style={styles.IconContainer}>
                            <Chats size={32} color="#fff" />
                            { focused ? <View style={styles.highlight}/> : null }
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
)}

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
    },
    highlight: {
        top: "90%",
        height:3,
        justifyContent: "center",
        alignItems: "center", 
        alignSelf: "center",
        width: 60, 
        backgroundColor: "#14DAD5", 
        position: "absolute"
    },
    IconContainer: {
        height: "100%", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignContent: "center"
    },
    top: {
        marginBottom: "auto",
        marginTop: 0
    },
})