import React from 'react'
import { View, StatusBar } from 'react-native'
import { Calendar } from 'react-native-calendars'
export default function Diary() {
  return (
    <View style={{marginTop: StatusBar.currentHeight}}>
      <Calendar
      />
    </View>
)}
