import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { ICurrentAnswer } from '../types';

interface Props {
  ontoNext: () => void
  onToPrev: () => void
  currentAnswer: ICurrentAnswer,
}
export default function PrevNextButton( {ontoNext, onToPrev, currentAnswer}: Props) {
  const navigation = useNavigation();
  return (<View style={styles.buttonArea}>
      <Pressable onPress={() => onToPrev()}>
        <AntDesign name="leftcircleo" size={30} color="black" />
      </Pressable>
    { currentAnswer.option === undefined ? null : 
      <Pressable onPress={() => ontoNext()}>
        <AntDesign name="rightcircleo" size={30} color="black" />
      </Pressable>
    }
  </View>
  )
}

const styles = StyleSheet.create({
    buttonArea: {
      flexDirection: "row",
      justifyContent: "space-between",
      top: "5%",
    }
  })
  
  