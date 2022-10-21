import React from 'react'
import { Text, View , StyleSheet} from 'react-native'

export default function Add() {
  return (
    <View style={styles.addPage}><Text>Acidionar chamado</Text></View>
  )
}


const styles = StyleSheet.create({
    addPage: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})