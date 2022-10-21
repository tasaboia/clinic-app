import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import { Avatar, ScrollView } from 'native-base'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../../../context';

const Tab = createBottomTabNavigator();

export default function UserDashboard() {
  const {user} = useAuth()
  return (
    
    <View style={styles.container}>
      <View style={styles.header}/>
      <Text style={styles.title}>Olá, {user?.data.displayName}</Text>
      <View style={styles.appointment}></View>

      <View style={styles.feelings}>
        <Text style={styles.title}>Como você esta?</Text>
        <View style={styles.feelingsArea}>
          <View style={styles.feelingsItem}/>
          <View style={styles.feelingsItem}/>
          <View style={styles.feelingsItem}/>
          <View style={styles.feelingsItem}/>
          <View style={styles.feelingsItem}/>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={true}
        scrollEnabled
        style={styles.cardArea} >
        <View ><View style={styles.card}/></View>
        <View ><View style={styles.card}/></View>
        <View ><View style={styles.card}/></View>
        <View><View style={styles.card}/></View>
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
    height: "20%",
    width: "100%",
    backgroundColor: "red",
    borderRadius: 20,
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
    paddingVertical: 10,
  },
  feelingsItem: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: "red",
    margin: 4,
  },
  feelingsArea: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "red",
    padding: 6,
    margin: 5,
    borderRadius: 20,
    height: 100,
  },
  cardArea: {
  },
})