import { httpAuth, httpCloud, Key } from '../utils'

export async function GetSlides (){
    const response = await httpCloud.get("getSlides");
    return response.data
  }