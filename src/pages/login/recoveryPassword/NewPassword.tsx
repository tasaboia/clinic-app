import { View, Dimensions, StyleSheet,Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from "formik";
import React from "react";
import UILogo from "../../../components/UILogo";
import TranslateX from "../../../components/animations/TranslateX";
import { UIHeading } from "../../../components/UIText";
import CustomInput from "../../../components/input/Input";
import { Link, useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import UIButton from "../../../components/UIButton";
import { useState } from "react";
import AnimatedLottieView from "lottie-react-native";
import { Icon, IconButton } from "native-base";
import { AntDesign } from '@expo/vector-icons';
export const initialValues = {
    password:'',
    confirmationPassword:'',
  }
  
export const SignupSchema = Yup.object().shape({
    password: Yup.string().required('Campo obrigatório'),
    confirmationPassword:  Yup.string().oneOf([Yup.ref('password'), null], 'Senhas diferentes')
  });

const SCREEN_height = Dimensions.get('window').height
const SCREEN_width = Dimensions.get('window').width

export default function NewPassword() {
    const [sucess, setSucess] = useState(false)
    const navigation = useNavigation();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={async values => {
        
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, errors, values }) => (

        <View style={styles.background}> 
          
            <LinearGradient
              colors={['#3D9FE0', '#8834F5']}
              start={[0, 0]}
              end={[1, 0]}
              style={styles.shape}
            />
              <View style={styles.container}>
              <UILogo style={{top: -20}}/>
            { sucess ? 
            <View style={{marginTop: 20, justifyContent: "center", alignContent: "center", alignItems: "center"}}>
                <AnimatedLottieView
                    style={{width: 120, height:120}}
                    autoPlay
                    source={require("../../../../assets/lottie/ok-animation.json")}
                />
                <UIHeading color="gray/800">Nova senha cadastrada com sucesso</UIHeading>
                <View style={{marginTop: 10}}>
                    <UIButton onPress={() => { navigation.navigate('Login'); } } title="Voltar ao Login" loading={false}/>
                </View>
            </View>
             : 
                <TranslateX from={200} to={0}>
                <UIHeading style={{marginTop: 30}} size="xSmall" color="violet">Criar nova senha</UIHeading>
                <CustomInput 
                  placeholder='Nova senha' icon="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <CustomInput 
                  placeholder='Confirmar senha' icon="password"
                  onChangeText={handleChange('confirmationPassword')}
                  onBlur={handleBlur('confirmationPassword')}
                  value={values.confirmationPassword}
                />
                <UIButton onPress={ ()=> setSucess(!sucess)} title="Criar" loading={false}  /> 
                </TranslateX> 
            }</View> 
        </View>
       
      )}
    </Formik>
  )}

  const styles = StyleSheet.create({
    background: {
      backgroundColor: '#fff',
      height: SCREEN_height,
      margin: 0,
      padding: 0,
  },
  shape: {
      backgroundColor: "#6961ec",
      height: 800, 
      width: 800, 
      borderRadius: SCREEN_height/2,
      position: "absolute", 
      zIndex: 0, 
      top: -580, 
      left: -200,
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 10},
      shadowOpacity: 0.4,
      shadowRadius: 6,
  },
    container: {
      marginTop: 80,
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      height: "100%",
    },
    
  });
  
  