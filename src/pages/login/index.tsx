import React, { useState } from 'react'
import { Formik } from 'formik';

import {StyleSheet , Text, View, Image, TextInput, Dimensions } from 'react-native';
import UILogo from '../../components/UILogo';
import { Link, useNavigation } from '@react-navigation/native';
import { useTogglePasswordVisibility } from './component/useTogglePasswordVisibility';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, Checkbox, Pressable, useToast } from 'native-base';
import { initialValues, SignupSchema } from './validation';
import { signInWithPassword } from '../../service/User';
import { useAuth } from '../../context';
import { ISingIn, ISingInRemember, ISingInResponse } from '../../service/User/type';
import { AlertStatus } from '../../components/AlertStatus';
import { useMutation } from '@tanstack/react-query';
import CustomInput from '../../components/input/Input';
import { LinearGradient } from 'expo-linear-gradient';
import { UIHeading } from '../../components/UIText';
import TranslateX from '../../components/animations/TranslateX';
import UIButton from '../../components/UIButton';
import { GetValueForStorage, SaveStorage } from '../../service/storage/storage';

const SCREEN_height = Dimensions.get('window').height
const SCREEN_width = Dimensions.get('window').width

export default function Login() {
  const toast = useToast();
  const { login, user } = useAuth();
  const navigation = useNavigation()
  const [isRemember, setIsRemember ] = useState(false)
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={async values => {
        const temp:ISingInRemember = {
          email: values.email,
          password: values.password,
          returnSecureToken: true,
          remember: isRemember,
        }
        login(temp)
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
            <UILogo style={{marginTop: 60, marginBottom: 60}}/>
              <TranslateX from={200} to={0}>
                <UIHeading size="xSmall" color="violet">Entrar na plataforma</UIHeading>
                <CustomInput 
                  placeholder='E-mail' icon="email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <CustomInput 
                  placeholder='Senha' icon="password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <View style={{marginTop: 5}}>
                  <Checkbox _text={{color: "#8834F5"}} value='' colorScheme="gray" onChange={()=> setIsRemember(!isRemember)}>Lembrar-me</Checkbox>
                </View>
                <UIButton onPress={handleSubmit} title="Entrar"/>
                <Link to={{ screen: 'PasswordFlow' }} style={{color: "#545454" , marginTop: 5, textAlign: "center"}}>Esqueceu sua senha?</Link>
              </TranslateX>
              <View style={styles.redirection}>
              
              <Link to={{ screen: 'Start' }} style={{color: "#545454", bottom: -190}}>Ainda não tem uma conta? Criar</Link>
            </View>

            </View>
          
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
    height: "100%",
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
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

