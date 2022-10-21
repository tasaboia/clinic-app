
export interface IQuestions {
    id: number,
    input?: string,
    options?: [string],
}


export interface ICurrentAnswer {
    option: string | undefined,
    title: string | undefined,
  }

  
export interface IHandle {
    title: string,
    option: string,
    value: string | null,
    type: string | null,
  }