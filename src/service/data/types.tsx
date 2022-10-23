
export interface IPro {
  id: number,
  name: string,
  avatar: string
  focus: string,
  bio: string,
  unallowed?: string,
}

export interface IQuestionItem {
    id: string,
    title?: string,
    options?: [string],
    option?: [string],
    scale?: [string],
    input?: string,
  }
  
export interface IAllQuestionsResponse {
    data: [IQuestionItem]
}