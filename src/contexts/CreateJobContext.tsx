'use client'
import { api } from "@/services/api";
import { ReactNode, SetStateAction, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export interface HistoryComponentProps {
  id? : string
  client_id : string 
  customer_name : string
  arrived_at : string
  description : string | undefined
  tag : string
  device : string
  price : number
}

interface HistoryAndJobContextProps {
  JobsHistory : HistoryComponentProps []
  setJobsHistory : React.Dispatch<SetStateAction<HistoryComponentProps []>>
  AddAnNewJob : (newJob : HistoryComponentProps ) => Promise<void>
}

export const HistoryAndJobContext = createContext({} as HistoryAndJobContextProps)
//funcao de busca pelo nome e pelo cpf, funcao de delecao caso nao seja o usuario que ele queira

export function HistoryAndJobContextProvider ({children} : {children : ReactNode}) {
 
  const [JobsHistory, setJobsHistory] = useState<HistoryComponentProps []>([])

  const AddAnNewJob = useCallback(async (newJob : HistoryComponentProps) => {
    setJobsHistory([...JobsHistory, newJob])
    try {
      const response = await api.post('/orders', newJob)
      const actualJobAddicted = response.data
      setJobsHistory(prevState => [actualJobAddicted, ...prevState])
    } catch (e : any) {
      return alert(`erro : ${e.message}`)
    }

  }, [setJobsHistory, JobsHistory])

 
  
  return (
    <HistoryAndJobContext.Provider value={{
      JobsHistory,
      setJobsHistory,
      AddAnNewJob
    }}>
      {children}
    </HistoryAndJobContext.Provider>
  )
}