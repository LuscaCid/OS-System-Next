'use client'
import { api } from "@/services/api";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export interface HistoryComponentProps {
  client_id : number
  id : string
  arrived_at : string
  customer_name : string
  description : string
  tag : string
  title : string

}

interface HistoryAndJobContextProps {
  JobsHistory : HistoryComponentProps []
  fetchHistory : (query? : string) => Promise<void>
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

  const fetchHistory = useCallback(async (query? : string) : Promise<void> => {
    if(query) {
      const { data } = await api.get(`/orders?query=${query}`)
      setJobsHistory(data)
    } else {
      const response = await api.get('/orders')
      const data : HistoryComponentProps [] = response.data
      setJobsHistory(data)
    }
  }, []) 

  useEffect(() => {
    fetchHistory()
  }, [fetchHistory])

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