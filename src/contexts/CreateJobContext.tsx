'use client'
import { api } from "@/services/api";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export interface HistoryComponentProps {
  client_id : number
  id : string
  arrived_at : string
  customer_name : string
  description : string | undefined
  tag : string
  device : string

}

interface HistoryAndJobContextProps {
  JobsHistory : HistoryComponentProps []
  fetchHistory : (query? : string) => Promise<HistoryComponentProps[]>
  AddAnNewJob : (newJob : HistoryComponentProps ) => Promise<void>
}

export const HistoryAndJobContext = createContext({} as HistoryAndJobContextProps)
//funcao de busca pelo nome e pelo cpf, funcao de delecao caso nao seja o usuario que ele queira

export function HistoryAndJobContextProvider ({children} : {children : ReactNode}) {
 
  const [JobsHistory, setJobsHistory] = useState<HistoryComponentProps []>([])

  const AddAnNewJob = useCallback(async (newJob : HistoryComponentProps) => {
    setJobsHistory([...JobsHistory, newJob])
    await api.post('/jobs', newJob)
  }, [setJobsHistory, JobsHistory])

  const fetchHistory = useCallback(async (query? : string) : Promise<HistoryComponentProps[]> => {
    await new Promise(resolver => setTimeout(resolver, 1000))
    let data : HistoryComponentProps [];
    if(query) {
      const response = await api.get(`/orders?customer_name=${query}`)
      data = response.data
      setJobsHistory(data)

      /**
       * fazer uma especie de whereLike Fake aqui, ta? asdkask
       */

    } else {
      const response = await api.get('/orders')
      data = response.data
      
      setJobsHistory(data)
    }
    return data
  }, []) 


  return (
    <HistoryAndJobContext.Provider value={{
      JobsHistory,
      fetchHistory,
      AddAnNewJob
    }}>
      {children}
    </HistoryAndJobContext.Provider>
  )
}