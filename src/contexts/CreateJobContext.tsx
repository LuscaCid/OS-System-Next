'use client'
import { api } from "@/services/api";
import { ReactNode, SetStateAction, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";

export interface HistoryComponentProps {
  client_id : number
  arrived_at : string
  customer_name : string
  description : string | undefined
  tag : string
  device : string

}

interface HistoryAndJobContextProps {
  JobsHistory : HistoryComponentProps []
  setJobsHistory : React.Dispatch<SetStateAction<HistoryComponentProps []>>
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
    let data : HistoryComponentProps [];
    if(query) {

      const response = await api.get('/orders')     
      data = response.data
      
      const filteredDataByEntry = data.filter((element) => {

        const description = element.description
        const device = element.device
        const tag = element.tag

        if(description!.includes(query)) return element
        if(device.includes(query))return element
        if(tag.includes(query))return element
        
      } )
      return filteredDataByEntry
      /**
       * fazer uma especie de whereLike Fake aqui, ta? asdkask
       */
    } else {
      const response = await api.get('/orders')
      data = response.data
    }
    return data
  }, []) 
  useEffect(() => {
  (async () => {
    const data = await fetchHistory()
    setJobsHistory(data)
  })
  }, [ fetchHistory])
  return (
    <HistoryAndJobContext.Provider value={{
      JobsHistory,
      setJobsHistory,
      fetchHistory,
      AddAnNewJob
    }}>
      {children}
    </HistoryAndJobContext.Provider>
  )
}