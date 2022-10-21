
import React from 'react'
import { View, StyleSheet, Dimensions, Animated, Image} from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Link, useNavigation } from '@react-navigation/native';
import { Checkbox, PresenceTransition, Text} from 'native-base'
import UIButton from '../../components/UIButton'
import UILogo from '../../components/UILogo'
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../../components/input/Input';
import { UIHeading } from '../../components/UIText';
import TranslateX from '../../components/animations/TranslateX';
import { useRef } from 'react';
import { useAuth } from '../../context';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';

const SCREEN_height = Dimensions.get('window').height
const SCREEN_width = Dimensions.get('window').width

export const initialValues = {
    name: "",
    email:'',
    password:'',
    confirmationPassword:'',

  }
  
export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  confirmationPassword:  Yup.string().oneOf([Yup.ref('password'), null], 'Senhas diferentes')
});

export default function Register () {
    const navigation = useNavigation();
    const { register } = useAuth();
    const [position, setPosition] = React.useState(0)
    const scrollX = React.useRef(new Animated.Value(0)).current;
  
    return (<Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={async values => {
        const displayName = {displayName: values.name}
        const resp = register({email: values.email, password: values.password, name: values.name})
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, errors, values }) => (

    <View style={styles.background}>
      <PresenceTransition visible={true} initial={{
      opacity: 0,
      translateY: -230
    }} animate={{
      opacity: 1,
      translateY: -580,
      transition: {
        duration: 1000
      }
    }}>
        <LinearGradient
        colors={['#3D9FE0', '#8834F5']}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.shape}
      />
      </PresenceTransition>
        <View style={styles.container}>
          <UILogo/>
            <TranslateX from={0} to={position}>
              <UIHeading size="xSmall" color="violet">Criar conta</UIHeading>
              <CustomInput 
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder='Nome completo' icon="user"/>
              <CustomInput 
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder='E-mail' icon='email' />
              <CustomInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
               placeholder='Senha'  icon='password'/>
              <CustomInput 
              onChangeText={handleChange('confirmationPassword')}
              onBlur={handleBlur('confirmationPassword')}
              value={values.confirmationPassword} placeholder='Confirme sua senha' icon='password'/>
              
              <UIButton 
                title='Criar'
                onPress={handleSubmit}
                loading={false}
              />
            </TranslateX>
            
          <View style={styles.redirection}>
            <Text style={{color: "#454545"}}>Já tem uma conta?</Text>
            <Link to={{ screen: 'Login' }} style={{color: "#454545" , marginLeft: 6}}>Entrar</Link>
          </View>
        </View>

    </View> )}
    </Formik>
  )
}

const styles = StyleSheet.create({
    gap: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: 60,
    },
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
        
        left: -200,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.4,
        shadowRadius: 6,
    },
    container: {
        display: "flex",
        height: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    redirection: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: 'baseline', 
    },
    card: {
        marginTop: 120,
        height: 200,
    },
    title: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: 10,
    },
    paragraph: {
        color: "white",
        maxWidth: "60%",
        textAlign: "center",
      },
    cardContainer: {
        width: SCREEN_width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    rotate: {
        transform: [{ rotate: "35deg"}]
    },
    icon: {
        marginBottom: 10,
    }
});