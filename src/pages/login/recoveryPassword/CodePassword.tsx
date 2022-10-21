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

export const initialValues = {
    code:'',
  }
  
export const SignupSchema = Yup.object().shape({
  code: Yup.number().required('Campo obrigatório'),
  });

const SCREEN_height = Dimensions.get('window').height
const SCREEN_width = Dimensions.get('window').width

export default function CodePassword() {
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
                <View style={{marginTop:80, justifyContent: "center", alignItems: "center"}}>
                  <TranslateX from={200} to={0}>
                  <UIHeading size="xSmall" color="violet">Insira o código</UIHeading>
                  <CustomInput 
                    placeholder='Codigo' icon="none"
                    onChangeText={handleChange('code')}
                    onBlur={handleBlur('code')}
                    value={values.code}
                    keyboardType='numeric'
                    maxLength={5}
                  />
                  <UIButton onPress={() => navigation.navigate('NewPassword')} title="Entrar" loading={false}  />
                  </TranslateX>
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
  container: {
    marginTop: 80,
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
  },
  
});

