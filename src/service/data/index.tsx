import { httpCloud, httpFirestore } from "../utils";
import {IAllQuestionsResponse, IPro } from "./types";

interface IData {
  data: IAllQuestionsResponse,
  lenght: number,
}

export async function getAllQuestions (){
    const response = await httpCloud.get("getAllQuestions");
    return response.data
  }

export async function allPro (): Promise<IPro[]> {
  const resp = await httpCloud.get("allPro");
  return resp.data
}

export async function getAgendaById (id: number){
  const resp = await httpCloud.get(`getAgendaById/id=${id}`);
  return resp 
}