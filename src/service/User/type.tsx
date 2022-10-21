

export interface ISingIn {
    email: string,
    password: string,
    returnSecureToken: boolean,
  }

  export interface ISingInRemember {
    email: string,
    password: string,
    returnSecureToken: boolean,
    remember: boolean
  }

export interface ISingInResponse {
    data: {
      kind: string,
      localId: string,
      email: string,
      displayName: string,
      idToken: string,
      registered: boolean,
      refreshToken: string,
      expiresIn: string
    }
  }
  
export interface ISingUp {
  email: string,
  password: string,
  returnSecureToken: boolean,
}

export interface ISingUpResponse {
  data: {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
  }
}

export interface IRegister {
  name: string,
  email: string,
  password: string,
}

export interface IRegisterResponse {
  status: string,
  id: string,
}