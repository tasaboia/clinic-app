import React from 'react';
import { TextInput , StyleSheet, TextInputProps} from 'react-native';

export default function UITextInput(props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<TextInput> & Readonly<TextInputProps>) {
    return (
    <TextInput
        style={styles.input}
        onChangeText={(value) => console.log(value)}
        keyboardType="email-address"
        placeholderTextColor= '#102A41'
        {...props}
      />  
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 6,
      padding: 10,
      borderRadius: 10,
      backgroundColor: 'white'
    },
  });
  
  