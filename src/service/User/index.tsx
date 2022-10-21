import { httpAuth, httpCloud, Key } from '../utils'
import { IRegister, IRegisterResponse, ISingIn, ISingInResponse, ISingUp } from './type';


export async function signInWithPassword (data: ISingIn): Promise<ISingInResponse>{
    const response:ISingInResponse = await httpAuth.post(`accounts:signInWithPassword?key=${Key}`, data);
    return response
  }

export async function singUp(data: ISingUp){
  const response:ISingInResponse = await httpAuth.post(`accounts:signUp?key=${Key}`, data);
  console.log("resposta: ",response)
  return response.data
}

export async function RegisterUser(data: IRegister): Promise<IRegisterResponse | null>{
  const response = await httpCloud.post("user", data);
  return response.data
}
  
interface resetPassword {
  requestType?: string,
  email: string,
}
interface IResetPasswordResponse {
  email: string,
  kind: string,
}
export async function sendEmailCode ({email, requestType="PASSWORD_RESET"}: resetPassword): Promise<IResetPasswordResponse>{
  const response = await httpAuth.post(`accounts:sendOobCode?key=${Key}`,{email, requestType})
  return response.data
}