
import { Input } from './Input'
import { CaseSensitive, Coins, PenLine, Smartphone } from 'lucide-react'
import { PenBox } from 'lucide-react'
import { SearchClientButton } from './SearchClientButton'

import { HistoryComponentProps } from '@/contexts/CreateJobContext'

export interface UsersProperties {  
    id : string
    name : string
    cpf : string
}

export function NewJobForm() {

    async function HandleCreateNewJob(form : FormData){
        
        const device = form.get('device')
        const description = form.get('description')
        const price = form.get('price')
        const tag = form.get('tag')
        
       /* const newJob : HistoryComponentProps = {
            arrived_at : new Date().toISOString(),
            device : device!.toString(),
            description : description!.toString(),
            tag : tag!.toString(),
            price : parseInt(price!.toString()),
            client_id : userSelected!.id,
            customer_name : userSelected!.name,
        }*/
       
        await fetch('http://localhost:4000', {
           /* body : JSON.stringify(),*/
            method : "POST"
        })
        
    }

    return(
        <section className=' absolute inset-0 top-14 m-2'>        
            <form 
            method="POST"
            action = {HandleCreateNewJob}
            className='h-full border dark:border-zinc-800 border-zinc-300 rounded-md w-full py-2 px-2 shadow-lg flex flex-col gap-2 overflow-y-auto'>
                
                <h1 className='border-b dark:text-zinc-300 dark:border-zinc-800 border-zinc-300 w-full pb-1 text-xl text-zinc-800 font-bold mb-2 flex justify-between items-center'>Type some info to create a new Job <PenBox size={32} /></h1>
            
                <Input 
                    input_type='text'
                    placeholder='device'
                    required_input
                    error_message='Type an name of gadget.'
                    icon={Smartphone}
                    input_name='device'
                />
                <Input 
                    input_type='text'
                    placeholder='Tag'
                    required_input
                    error_message='Type an title!'
                    icon={CaseSensitive}
                    input_name='tag'
                />
                <Input 
                    input_type='number'
                    placeholder='Price'
                    required_input
                    error_message='Type an Price!'
                    icon={Coins}
                    input_name='price'
                />
                <textarea 
                    className='p-2 resize-none bg-transparent border dark:border-zinc-800 border-zinc-300 rounded-md shadow-md min-h-20'
                    placeholder='Set the description relating devices problems...'   
                    name='description'          
                />

                
                
                <button 
                    type='submit'
                    className=' disabled:opacity-5 disabled:cursor-not-allowed flex items-center justify-center bg-transparent text-zinc-950 dark:text-zinc-300 rounded-md p-2 flex-end hover:bg-zinc-200  dark:hover:bg-zinc-800/90 transition duration-200 border dark:border-zinc-800 border-zinc-300  shadow-lg'
                    >
                    <PenLine size={24} /> Generate
                </button>      
            </form>
                             
        </section>
    )

}