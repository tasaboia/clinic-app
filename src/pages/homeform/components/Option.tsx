import React from 'react'
import { TouchableHighlight , StyleSheet, View, Text} from 'react-native'

export default function Option({ question }: string) {
  return (
    <TouchableHighlight>
        <View style={styles.questions}>
          <Text style={{color: "white"}}>{question}</Text>
        </View>
      </TouchableHighlight>
  )
}

const styles = StyleSheet.create ({
    questions: {
        width: "80%",
        flexDirection: "column",
        backgroundColor: "#0E283F",
        borderRadius: 20,
        paddingLeft: 10,
        padding: 5,
        marginTop: 10,
        color: "white",
      },
    })
