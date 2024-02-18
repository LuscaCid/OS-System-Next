import {formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

interface Props {
   costumer_name : string
   title : string
   description : string
   arrived_at : Date 
   tag : "tela" | "bateria" | "conector"
}

export function HistoryBox({costumer_name,description,arrived_at,title, tag} : Props){
    
    const formatedDate = formatDistanceToNow(arrived_at, {
        addSuffix : true,
        locale : ptBR 
    })

    let formattedDescription = description.slice(0,80)
    formattedDescription = formattedDescription + '...'
    return (
        <div className='flex flex-col gap-2 p-2 bg-transparent border border-zinc-300 rounded-md hover:bg-zinc-300 transtion duration-200 shadow-md'>
            <header className='flex justify-between items-center'>
                <strong className='text-zinc-950 font-bold text-lg'>{costumer_name}</strong> 
                <span className='text-sm font-medium text-zinc-600'>{formatedDate}</span>
            </header>
            <h1 className='font-semibold text-md text-zinc-800'>{title}</h1>
            <span className='text-zinc-600'>
                {formattedDescription}
            </span>
            <footer className='w-fit px-2 py-1 bg-zinc-950 text-zinc-100 rounded-md cursor-pointer'>
                {tag}
            </footer>
        </div>
    )
}