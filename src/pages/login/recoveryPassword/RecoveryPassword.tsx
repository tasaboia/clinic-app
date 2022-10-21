import { View, Dimensions, StyleSheet,Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from "formik";
import React, { useState } from "react";
import UILogo from "../../../components/UILogo";
import TranslateX from "../../../components/animations/TranslateX";
import { UIHeading } from "../../../components/UIText";
import CustomInput from "../../../components/input/Input";
import { Link, useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import UIButton from "../../../components/UIButton";
import { sendEmailCode } from "../../../service/User";
import { I } from "@expo/html-elements";
import AnimatedLottieView from "lottie-react-native";
import SucessFeedback from "../../../components/animations/SucessFeedback";

export const initialValues = {
    email:'',
  }
  
export const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Insira um e-mail válido').required('Campo obrigatório'),
  });

const SCREEN_height = Dimensions.get('window').height
const SCREEN_width = Dimensions.get('window').width

export default function RecoveryPassword() {
  const [sucess, setSucess] = useState(false)
  const navigation = useNavigation(); 
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={async values => {
        const response = await sendEmailCode({email: values.email})
        if(response.email){
          setSucess(true)
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, errors, values }) => (

        <View style={styles.background}> 
          { sucess ? 
            <View style={{marginTop: 20, justifyContent: "center", alignContent: "center", alignItems: "center"}}>
                <SucessFeedback/>
                <UIHeading color="gray/800">E-mail enviado com Sucesso</UIHeading>
                <View style={{marginTop: 10}}>
                    <UIButton onPress={() => { navigation.navigate('Login'); } } title="Voltar ao Login"/>
                </View>
            </View>
            :
            <View style={styles.container}>
              <TranslateX from={200} to={0}>
                <Text style={{maxWidth: "63%", color: "#717171"}}>Código de recuperação de senha será enviado ao seu e-mail para cadastro de nova senha</Text>
                <CustomInput 
                  placeholder='E-mail' icon="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                
                <UIButton onPress={handleSubmit} title="Enviar"/>
              </TranslateX>
              <View style={styles.redirection}>
              <Link to={{ screen: 'Start' }} style={{color: "#545454"}}>Ainda não tem uma conta? Criar</Link>
            </View>
          
            </View>
            }
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
  rotate: {
    transform: [{ rotate: "35deg"}]
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
  },
  container: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    marginTop: 25,
  },
  input: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#FFF",
    height: 50,
    width: 300,
    paddingLeft: 10,
  },
  inputError: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#FFF",
    height: 50,
    width: 300,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  icon:{
    position: "absolute",
    right: 20,
    top: 18,
  },
  redirection: {
    height: "98%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

