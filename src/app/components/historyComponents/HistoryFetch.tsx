import { HistoryBox } from "./HistoryBox"
import { HistoryAndJobContextProvider, HistoryComponentProps } from "@/contexts/CreateJobContext"
import { HistoryRender } from "./HistoryRender"
import React from "react"
interface RenderingProps {
  query : string
}

export async function HistoryRenderFetch ({query} : RenderingProps) {
  const response = await fetch(`http://localhost:4000/orders`, {
    next : {
      tags : ['get-jobs-history']
    },
    cache : 'default'
  })

  const data = await response.json()
  
  const filteredDataByQuery = data.filter((element : HistoryComponentProps) => {
  
    const description = element.description?.toLowerCase()
    const device = element.device?.toLowerCase()
    const tag = element.tag?.toLowerCase()

    if(description!.includes(query?.toLowerCase())) return element
    if(device.includes(query?.toLowerCase()))return element
    if(tag.includes(query?.toLowerCase()))return element
    
  } )
return ( 
    <HistoryRender JobsHistory={filteredDataByQuery} /> 
  )
} 

export default HistoryRenderFetch

/**
 * /{
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
 */

