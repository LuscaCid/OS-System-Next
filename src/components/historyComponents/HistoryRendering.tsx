
import { HistoryAndJobContext, HistoryComponentProps } from "@/contexts/CreateJobContext"
import { useContextSelector } from "use-context-selector"
import { HistoryBox } from "./HistoryBox"
import { LoadingHistory } from "./LoadingHistory"
import { Suspense } from "react"

export function HistoryRender () {
  async function time () {
    await new Promise(resolver => setTimeout(resolver, 3000))
  }
  time()
  const {data} = useContextSelector(HistoryAndJobContext, (context) => {
    return {
        data : context.JobsHistory
    }
    
})
  return (
    <>
    
     {
      data.length > 0 ? data.map((element : HistoryComponentProps) => {
        return (
            <section key={element.id}>
                <HistoryBox
                    arrived_at={new Date(element.arrived_at)}
                    costumer_name={element.customer_name}
                    description={element.description}
                    tag={element.tag}
                    title={element.title}
                /> 
            </section>
        )
      }) : <LoadingHistory />
    }
    </>
     
    
      
   
    
  )
}