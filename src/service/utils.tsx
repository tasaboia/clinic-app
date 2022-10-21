import axios from "axios"

export const httpAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/"
})

export const httpCloud = axios.create({
  baseURL: "https://us-central1-clinica-restapi.cloudfunctions.net/"
  
})

export const Key = "AIzaSyBuRUpeKSABnVgPuNtguHf1ssjaDeqXNtU"