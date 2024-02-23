
import { HistoryAndJobContext, HistoryComponentProps } from "@/contexts/CreateJobContext"
import { useContextSelector } from "use-context-selector"
import { HistoryBox } from "./HistoryBox"
import { useEffect } from "react"

interface RenderingProps {
  query : string
}

export async function HistoryRender ({query} : RenderingProps) {
  const { JobsHistory, fetchData, setJobsHistory } = useContextSelector(HistoryAndJobContext, (context) => {
    return {
      JobsHistory : context.JobsHistory,
      fetchData : context.fetchHistory,
      setJobsHistory : context.setJobsHistory
    }

  })

  useEffect(() => {
   
        fetchData(query).then(data => setJobsHistory(data))
        if(query.length===0)fetchData().then(data => setJobsHistory(data))
    
    
  }, [query, fetchData, setJobsHistory])

  return ( 
    <>
      {
        JobsHistory.length > 0 ? JobsHistory.map((element : HistoryComponentProps) => {
          return (   
            <HistoryBox
              key={String(Math.random()*100)}
              arrived_at={new Date(element.arrived_at)}
              costumer_name={element.customer_name}
              description={element.description}
              tag={element.tag}
              device={element.device}
            /> 
          )
        }) 
        : (
          <h2 className="mx-auto font-bold text-3x1 mt-4">
            Not job found
          </h2>
        )
      } 
    </>   

  )
} 

export default HistoryRender