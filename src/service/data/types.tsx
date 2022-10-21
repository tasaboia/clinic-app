


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