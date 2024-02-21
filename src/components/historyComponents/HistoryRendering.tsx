import { HistoryAndJobContext, HistoryComponentProps } from "@/contexts/CreateJobContext"
import { useContextSelector } from "use-context-selector"
import { HistoryBox } from "./HistoryBox"

export async function HistoryRender () {
  const {data} = useContextSelector(HistoryAndJobContext, (context) => {
    return {
        data : context.JobsHistory,
        fetchData : context.fetchHistory
    }
})
  return (
    data.length > 0 && data.map((element : HistoryComponentProps) => {
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
  })
  )
}