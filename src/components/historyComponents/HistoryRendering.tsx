
import { HistoryAndJobContext, HistoryComponentProps } from "@/contexts/CreateJobContext"
import { useContextSelector } from "use-context-selector"
import { HistoryBox } from "./HistoryBox"

export function HistoryRender () {
 
  const { JobsHistory } = useContextSelector(HistoryAndJobContext, (context) => {
    return {
      JobsHistory : context.JobsHistory,
    }
  }) 
 
  return ( 
    <>
      {
        JobsHistory.length > 0 && JobsHistory.map((element : HistoryComponentProps) => {
          return (
            <HistoryBox
              key={element.id}
              arrived_at={new Date(element.arrived_at)}
              costumer_name={element.customer_name}
              description={element.description}
              tag={element.tag}
              device={element.device}
            /> 
          )
        }) 
        
      }
    </>   
  )
}