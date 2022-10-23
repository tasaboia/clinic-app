import { useQuery } from '@tanstack/react-query';
import React, { createContext, useContext, useState } from 'react'
import { allPro } from '../service/data';
import { IPro } from '../service/data/types';

interface ProContextData {
    professionals?: IPro [] | undefined
    getAllPro: () => void
    getAgendaById: (id: number) => void 
    isLoadingPro: boolean
}

export const ProContext = createContext<ProContextData>(
  {} as  ProContextData,
)

interface ProProviderProps{
  children?: React.ReactNode | React.ReactNode [] | JSX.IntrinsicAttributes;
}

export const ProProvider: React.FC = (props: ProProviderProps) => {
  const [professionals, setAllProfessionals] = useState<IPro[]>()
  const [isLoadingPro, setIsLoading] = useState(false)
  function getAllPro () {
    const { data, error, isError, isLoading, isSuccess, isFetched } = useQuery(['allPro'], allPro,{
        retry: 0,
      })

      if(isLoading){
        setIsLoading(isLoading)
      }
      if(isSuccess || isError || isFetched){
        setIsLoading(false)
      }
      if(data) {
        setAllProfessionals(data)
      }
  }

  function getAgendaById (id: number) {

  }
  return <ProContext.Provider value={{professionals, getAllPro, getAgendaById, isLoadingPro}} >{props.children}</ProContext.Provider>
}

export function useProData(){
  const context = useContext(ProContext)
  return context
}