import React from 'react'
import {View , Text, StyleSheet} from 'react-native'

export default function Tests() {
  return (
    <View style={styles.test}><Text>Tests</Text></View>
  )
}

const styles = StyleSheet.create({
  test: {
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
  }
})