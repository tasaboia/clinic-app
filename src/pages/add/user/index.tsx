import React from 'react'
import { View , Text, StyleSheet, Pressable, TouchableHighlight, TouchableOpacity} from 'react-native'
import { Avatar, Divider, ScrollView } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../../../context';
import { UIHeading } from '../../../components/UIText';
import { DotsThreeVertical, Smiley, SmileyMeh,SmileyBlank,SmileySad,SmileyNervous, CaretRight, Wallet, ClockClockwise, IdentificationBadge} from 'phosphor-react-native';
import UICalendar from '../../../components/UICalendar';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const feelingsIcons = [
  Smiley,
  SmileyMeh,
  SmileyBlank,
  SmileySad,
  SmileyNervous,
]

export default function UserDashboard() {
  const {user} = useAuth()
  const navigation = useNavigation()
  return (
    
    <View style={styles.container}>
      <View style={styles.header}/>
      <View style={styles.appointment}>
        <View style={styles.appointmentHeade}>
          <UIHeading color="white" position="center">Próxima Sessão</UIHeading>
          <DotsThreeVertical style={{position: "absolute", right: 0}} size={32} color="white" />
        </View>
        <UICalendar/>
      </View>

      <View style={styles.feelings}>
        <UIHeading color="gray/900" size="xSmall">Como voce está se sentindo?</UIHeading>
        <View style={styles.feelingsArea}>
          {feelingsIcons.map((Item, key) => (
            <TouchableOpacity key={key} style={styles.feelingsItem} onPress={() => console.log("aqui")}>
              <Item size={60} color="#7254EF"/>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Diary")}>
        <UIHeading size="small" color="gray/900">Como foi seu dia?</UIHeading>
        <UIHeading style={{marginTop: 10, marginBottom: 10}} size="2xSmall" color="gray/400">Faça registros diários e acompanhe seu desenvolvimento</UIHeading>
        <CaretRight  style={{position: "absolute", top: 10, right: 0}} size={20} color="#4E4E4E" />
        <Divider/>
      </TouchableOpacity>
      <ScrollView 
        style={{marginTop: 20}}
        horizontal={true}
        scrollEnabled
        >
          <TouchableOpacity style={styles.card}>
            <Wallet size={30} color="white"/>
            <UIHeading color="white">Carteira</UIHeading>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <ClockClockwise size={30} color="white"/>
            <UIHeading color="white">Histórico</UIHeading>
          </TouchableOpacity><TouchableOpacity style={styles.card}>
            <IdentificationBadge size={30} color="white"/>
            <UIHeading color="white">Psicologos</UIHeading>
          </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    height: "100%",
    width:"100%",
    padding: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  header: {
    padding: 25,
  },
  appointment:{
    width: "100%",
    height: 120,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    hadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  feelings: {
    paddingVertical: 20,
  },
  feelingsItem: {
    height: 60,
    width: 60,
    borderRadius: 100,
    margin: 4,
  },
  feelingsArea: {
    flexDirection: "row",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#7254EF",
    padding: 6,
    margin: 5,
    borderRadius: 10,
    height: 45,
    width:130,
  },
  cardArea:{},
  appointmentHeade: {
    backgroundColor: "#7254EF", 
    height: 40, 
    borderTopRightRadius:20, 
    borderTopLeftRadius:20, 
    justifyContent: "center"
  },
})