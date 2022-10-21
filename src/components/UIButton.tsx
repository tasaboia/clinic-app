import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Pressable, Text} from 'native-base'
import Loading from './Loadding';


export interface IButtonProps {
    title: string,
    onPress: () => void,
    loading?: boolean,
    error?: boolean

}
export default function UIButton({title, onPress, loading = false, error = false} : IButtonProps) {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 200,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: '#8834F5',
      marginTop: 20,
      marginHorizontal:10,
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 10},
      shadowOpacity: 0.4,
      shadowRadius: 6,
      borderWidth: error ? 1 : 0,
      borderColor:  error ? "red" : "white",
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#fff',
    },
  
  });
  return (
    <Pressable onPress={onPress}  style={styles.button}>
      { loading ?  <Loading/> : 
        <Text style={styles.text}>{title}</Text>
      }
    </Pressable>
  );
  
}

