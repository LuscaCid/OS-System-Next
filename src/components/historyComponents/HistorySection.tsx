import { History } from "lucide-react";
import { HistoryBox } from "./HistoryBox";

interface ServiceOrderDetails {
    costumer_name : string
    title : string
    description : string
    arrived_at : Date 
    tag : "tela" | "bateria" | "conector"
}

const serviceOrderObject : ServiceOrderDetails= { 
    arrived_at : new Date('2024-02-12'),
    costumer_name : "jeffinho",
    description : "muitos cacos na tela, diversos problemas no aparelho, varias horas de trabalho",
    tag : "tela",
    title : "Xiaomi note 10"
}
interface HistoryComponentProps {
    client_id : number
    id : string
    arrived_at : string
    customer_name : string
    description : string
    tag : string
    title : string

}
export async function HistorySection () {
 
    const {arrived_at,costumer_name,description,tag,title} = serviceOrderObject
 
    const response = await fetch('http://localhost:3000/orders') 
    const data : HistoryComponentProps [] = await response.json()
    console.log(data)
    console.log('ue mano, pq nao ta logando?')
    return(
        <div className="h-full col-span-1 md:col-span-4/5 w-full  border-r border-zinc-300 dark:border-zinc-800 relative">
                <h1 className="mb-2 ml-3 flex items-center gap-2 p-2 text-3xl font-bold border-b border-zinc-300 dark:border-zinc-800 w-full">
                    <div className="border border-zinc-300 dark:border-zinc-800 rounded-md">
                    <History size={24} />
                    </div>
                    History
                </h1>
                <section className=" border-t border-b border-zinc-300 dark:border-zinc-800  rounded-md m-2 flex flex-col gap-2 overflow-y-auto absolute inset-0 top-14 bottom-4 pr-2">
                    {
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
                    }
                    <HistoryBox 
                        arrived_at={arrived_at}
                        costumer_name={costumer_name}
                        description={description}
                        tag={tag}
                        title={title}
                    />
                 
                </section>
                
            </div>
    )
}