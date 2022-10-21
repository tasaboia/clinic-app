import React, { createContext, useContext, useState } from 'react'
import { Register, signInWithPassword } from '../service/User'
import { IRegister, IRegisterResponse, ISingIn, ISingInResponse } from '../service/User/type'
import { GetValueForStorage, SaveStorage } from '../service/storage/storage';
import { useNavigation } from '@react-navigation/native';
import { Box, useToast } from 'native-base';

interface AuthContextData {
  user?: ISingInResponse
  login: (userInfo :ISingIn) => Promise <ISingInResponse | undefined | null>
  logout: () => Promise <void>
  register: (newUSer: IRegister) => Promise <IRegisterResponse | null>
  loading: boolean
}

export const AuthContext = createContext<AuthContextData>(
  {} as  AuthContextData,
)

interface AuthProviderProps{
  children?: React.ReactNode | React.ReactNode [] | JSX.IntrinsicAttributes;
}

export const AuthProvider: React.FC = (props: AuthProviderProps) => {
  const [user, setUser] = useState<ISingInResponse>()
  const [loading, setLoading] = useState(false)
  const toast = useToast();

  async function login(userInfo: ISingIn ): Promise<ISingInResponse | undefined> {
    try{
      setLoading(true)
      const data = await signInWithPassword(userInfo)
      setLoading(false)
      setUser(data)
    } catch (err){
      toast.show({
        placement: "top",
        render: () => {
          return <Box bg="danger.400" px="2" py="1" rounded="sm" mb={5}>
                  Usuário não encontrado!
                </Box>;
        }
      })
    }
    return user 
  }

  async function logout() {
    setUser(undefined)
    return
  }

  async function register ({name, email, password}: IRegister): Promise<IRegisterResponse | null> {
    const navigate = useNavigation()
    console.log("aqui")
    try{
      setLoading(true)
      const response = await Register({name: name, email: email, password: password})
    console.log(response)

      toast.show({
        placement: "top",
        render: () => {
          return <Box bg="success.400" px="2" py="1" rounded="sm" mb={5}>
                  Sua conta foi criada com sucesso!
                </Box>;
      }})
      setLoading(false)
      navigate.navigate("Login")
      return response

    }catch(err){
      toast.show({
        placement: "top",
        render: () => {
          return <Box bg="danger.400" px="2" py="1" rounded="sm" mb={5}>
                  Erro inesperado, tente mais tarde.
                </Box>;
      }})
      navigate.navigate("Start")
    }
    return null
  }

  return <AuthContext.Provider value={{user, login, logout, register, loading}} >{props.children}</AuthContext.Provider>
}

export function useAuth(){
  const context = useContext(AuthContext)
  return context
}