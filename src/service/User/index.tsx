import { httpAuth, httpCloud, Key } from '../utils'
import { IRegister, IRegisterResponse, ISingIn, ISingInResponse, ISingUp } from './type';


export async function signInWithPassword (data: ISingIn): Promise<ISingInResponse>{
    const response:ISingInResponse = await httpAuth.post(`accounts:signInWithPassword?key=${Key}`, data);
    return response
  }

export async function singUp(data: ISingUp): Promise<ISingInResponse>{
  const response = await httpAuth.post(`accounts:signUp?key=${Key}`, data);
  return response
}

export async function RegisterUser(data: IRegister): Promise<IRegisterResponse | null>{
  const response = await httpCloud.post("user", data);
  return response.data
}
  
interface IAuthFlow {
  requestType?: string,
  email: string,
}
interface IResetPasswordResponse {
  email: string,
  kind: string,
}
export async function sendEmailCode ({email, requestType="PASSWORD_RESET"}: IAuthFlow): Promise<IResetPasswordResponse>{
  const response = await httpAuth.post(`accounts:sendOobCode?key=${Key}`,{email, requestType})
  return response.data
}

interface IEmailVerify {
  requestType?: string,
  idToken: string,
}

export async function emailConfirmation (data: IEmailVerify){
  console.log(" email verification: ", data)
  const response = await httpAuth.post(`accounts:sendOobCode?key=${Key}`, data)
  return response.data
}