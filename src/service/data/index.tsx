import { httpCloud } from "../utils";
import { IAllQuestionsResponse } from "./types";

interface IData {
  data: IAllQuestionsResponse,
  lenght: number,
}

export async function getAllQuestions (){
    const response = await httpCloud.get("getAllQuestions");
    return response.data
  }
