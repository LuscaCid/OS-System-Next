
import { HistoryAndJobContext, HistoryComponentProps } from "@/contexts/CreateJobContext"
import { useContextSelector } from "use-context-selector"
import { HistoryBox } from "./HistoryBox"
import { LoadingHistory } from "./LoadingHistory"
import { useEffect } from "react"

export function HistoryRender () {
 
  const {fetchData, JobsHistory} = useContextSelector(HistoryAndJobContext, (context) => {
    return {
        fetchData : context.fetchHistory,
        JobsHistory : context.JobsHistory
    }
  }) 
  console.log(JobsHistory)
  useEffect(() => {
    async function load(){
      await fetchData()
    }
    load()
  }, [])
  
  return (
    <>
     {
      JobsHistory.length > 0 ? JobsHistory.map((element : HistoryComponentProps) => {
        return (
            <section key={element.id}>
                <HistoryBox
                    arrived_at={new Date(element.arrived_at)}
                    costumer_name={element.customer_name}
                    description={element.description}
                    tag={element.tag}
                    device={element.device}
                /> 
            </section>
        )
      }) : <LoadingHistory />
    }
    </>
     
    
      
   
    
  )
}