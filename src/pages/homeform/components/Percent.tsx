import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

export default function Percent() {
  const percent = 10;

  return (<View style={styles.percentArea}>
    <View style={styles.percentBar}/>
  <Text style={{right: -10, color: "white"}}>{percent}%</Text>
  </View>
  )
}

const styles = StyleSheet.create ({
  percentBar: {
    width: "80%",
    height: "35%",
    borderRadius: 50,
    backgroundColor: "#fff",
    borderColor: '#000',
    borderWidth: 1,
  },
  percentArea: {
    flexDirection: "row",
    alignItems: "baseline",
    width: "90%",
    justifyContent: "center",
    
  },
})