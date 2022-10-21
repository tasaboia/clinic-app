import { httpAuth, httpCloud, Key } from '../utils'
import { IRegister, IRegisterResponse, ISingIn, ISingInResponse, ISingUp } from './type';


export async function signInWithPassword (data: ISingIn): Promise<ISingInResponse>{
    const response:ISingInResponse = await httpAuth.post(`accounts:signInWithPassword?key=${Key}`, data);
    return response
  }

export async function singUp(data: ISingUp){
  const response:ISingInResponse = await httpAuth.post(`accounts:signUp?key=${Key}`, data);
  return response.data
}

export async function Register(data: IRegister): Promise<IRegisterResponse | null>{
  console.log("aqui :", data)
  const response = await httpCloud.post("user", data);
  return response.data
}
  