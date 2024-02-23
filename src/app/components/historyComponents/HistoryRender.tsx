
import { HistoryComponentProps } from "@/contexts/CreateJobContext"
import { HistoryBox } from "./HistoryBox"

interface Props {
  JobsHistory : HistoryComponentProps []
}
export function HistoryRender ({JobsHistory} : Props) {
  

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
            No job found
          </h2>
        )
      } 
    </>
  )
}