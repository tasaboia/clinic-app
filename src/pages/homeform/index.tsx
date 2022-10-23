import { useNavigation } from '@react-navigation/native';
import {useEffect, useRef, useState } from 'react'
import { Box,Pressable, Progress, Radio, Text, Toast, useToast } from 'native-base';
import { View , StyleSheet, TextInput, Dimensions, FlatList, Button} from 'react-native';
import UILogo from '../../components/UILogo';
import PrevNextButton from './components/PrevNextButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { getAllQuestions } from '../../service/data';
import Loading from '../../components/Loading';
import { CustomAlertDialog } from '../../components/CustomAlertDialog';
import { Register } from '../../service/User';
import { ICurrentAnswer, IHandle } from './types';
import { useAuth } from '../../context';
import { useMutation } from '@tanstack/react-query';

const SCREEN_width = Dimensions.get('window').width

export default function GettingStart() {
  const toast = useToast();

  const navigation = useNavigation()

  const ref = useRef<FlatList>(null)

  const [radio, setRadio] = useState("")
  const [name, setName] = useState("")
  const [index, setIndex] = useState(0)
  const [email, setEmail] = useState("")

  const [lenght, setLenght] = useState(10)
  const [password, setPassword] = useState("")
  const [userInfo, setUserInfo] = useState<{}[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<ICurrentAnswer>({option: "", title: ""})

  //data from firebase
  const { isLoading, isError, data, isSuccess, error} = useQuery(['todos'], getAllQuestions) 
  const mutation = useMutation(Register)

  
  useEffect(() => {
    if(isSuccess){
      const temp = Object.values(data)
      setLenght(temp.length)
    }
  },[])

  useEffect (() => {
    ref.current?.scrollToIndex ({
    index,
    animated: true,
    })
  },[index])

  async function HandleSubmit () {
    try{
      mutation.mutate(({
        name: name, 
        email: email, 
        password: password, 
        userInfo: userInfo
      }))

      toast.show({
        placement: "top",
        render: () => {
          return <Box bg="success.400" px="2" py="1" rounded="sm" mb={5}>
                  Sua conta foi criada com sucesso!
                </Box>;
      }})
      
      navigation.navigate("Login")
    }catch(err){
      toast.show({
        placement: "top",
        render: () => {
          return <Box bg="danger.400" px="2" py="1" rounded="sm" mb={5}>
                  Erro inesperado, tente mais tarde.
                </Box>;
      }})
      // navigation.navigate("Start")
    setIsOpen(false)
  }}

  function HandleManagerUser (data: IHandle) {
    setCurrentAnswer({title: data.title , option: data.option})
    if(data.value && data.type === "password") { return setPassword(data.value)}
    if(data.value && data.type === "name") { return setName(data.value)}
    if(data.value && data.type === "email") { return setEmail(data.value)}
  }

  function SlidesControl(){

    if( index < userInfo.length) {
      const newItems = [...userInfo];
      newItems[index] = currentAnswer;
      console.log(currentAnswer)
      setUserInfo(newItems)
      return 
    }
    setUserInfo([...userInfo, currentAnswer])
    setCurrentAnswer({title: undefined, option: undefined})
  }

  const onToPrev = () => {
    if ( index === 0) { return navigation.navigate("Start") } 
    SlidesControl()
    setIndex( index - 1)
  }

  const onToNext = () => {
    if ( index === 22) {
      setIsOpen(true) 
    } else{
      SlidesControl()
      setIndex( index + 1)
    }
  }

  return (
    <View style={styles.background}>
      <View style={styles.logo}>
        <UILogo />
      </View>
        <View style={styles.painel}>
          <SafeAreaView style={styles.container}>
              { isLoading ? <Loading/>  
              : null
            }
              
              <PrevNextButton onToPrev={onToPrev} ontoNext={onToNext} currentAnswer={currentAnswer}/>
            </SafeAreaView>
          </View>
        <Box w="90%" maxW="400" mt="5">
          <Progress value={index * 4.5} mx="4" colorScheme="#FFEA84" />
        </Box>
        <CustomAlertDialog isOpen={isOpen} setIsOpen={setIsOpen} HandleSubmit={HandleSubmit} loading={mutation.isLoading} />
    </View> 
  )
}

const styles = StyleSheet.create({
  background: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E283F",
    height: '100%',
  },
  logo: {
    position: "absolute",
    top: 20,
    zIndex:1,
    padding: 20,
  },
  painel: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "80%",
    width: "90%",
    borderRadius: 50,
  },
  container: {
    height: "80%",
    width: "90%",
    paddingTop: "30%",
  },
  input:{
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 10,
    marginTop: 10,
    width: "70%",
  },
  questions: {
    width: "80%",
    height: 40, 
    flexDirection: "column",
    backgroundColor: "#0E283F",
    borderRadius: 20,
    fontSize: 16,
    justifyContent: "center",
    paddingHorizontal: 30,
    marginBottom: 5,
  },
  title: {
    width: "75%",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
    flexShrink: 1,
    margin: 2,
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: "100%",
  },
  calendar: {
    width: "80%",
    height: 300,
  },
  birthday: {
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 8,
  },
  scaleArea: {
    flexDirection: "row",
  },
  scale: {
    height: 40, 
    paddingHorizontal: 15,
    margin: 2,
    flexDirection: "column",
    backgroundColor: "#0E283F",
    borderRadius: 20,
    fontSize: 16,
    justifyContent: "center",
    marginBottom: 5,
  },
})

