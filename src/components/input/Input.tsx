import { Button, IconButton } from 'native-base';
import { Envelope, Lock, User, EyeSlash, Eye } from 'phosphor-react-native';
import React from 'react';
import { InputHTMLAttributes, useState } from "react"
import { TextInputProps } from 'react-native'; 
import { View } from 'react-native';
import { styled } from 'stitches-native';
import { MaterialIcons } from "@expo/vector-icons";
 
interface IInput extends TextInputProps {
  icon?: "email" | "password" | "user" | "none"; 
  variant?: "error"
}

export default function CustomInput(props: IInput) {
  const [password, setPassword] = useState(props.icon === "password" ? true : false);
  return (
    <View style={{width: "100%", display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
      <Div variant={props.variant}>
        <Notification icon={props.icon}/>
        <Input secureTextEntry={password} {...props}/>
        {props.icon === "password" ? 
          <IconButton colorScheme="gray" _icon={{
            as: <MaterialIcons name={password ? "visibility-off" : "visibility"} />,
            name: "menu"
          }} onPress={() => setPassword(!password)}/> 
          : null }
      </Div>
    </View>
  )
}

function Notification({icon = "none"}: IInput) {
    switch(icon) {
      case 'email':
        return <Envelope style={{margin: 4}} color="#323232" size={20}/>
      case 'password':
        return <Lock style={{margin: 4}} color="#323232" size={20}/>
      case 'user':
        return <User style={{margin: 4}} color="#323232" size={20} />
      case 'none':
        return null
      default:
        return null
    }
  }

  
const Input = styled('TextInput', {
  backgroundColor: '#fff',
  fontSize: 12,
  padding: 5,
  maxWidth: "70%",
  minWidth: "70%",
  color: "#686868",

  '&:focus': {
    borderColor: "transparent",
    outline: "none",
  },
});

const Div = styled('View', {
  
  backgroundColor: '#fff',
  borderRadius: 5,
  fontSize: 16,
  width: "60%",
  maxWidth: "60%",
  minWidth: "60%",
  overflow: 'hidden',
  height: 40,
  padding: 5,
  display: "flex",
  flexDirection: "row",
  paddingLeft: 10,
  
  color: "#BABFC7",
  border: "1px solid #ccc",
  borderColor: "#8834F5",
  borderWidth: 1,
  marginTop: 16,

  '&:hover': {
    border: "1px solid #B276FF",
    color: "#B276FF",
  },

  variants: {
    variant: {
      error: {
        border: "1px solid red",
      }
    }
  }
});
