'use client'
import { Input } from './Input'
import { CaseSensitive, Coins, PenLine, Smartphone } from 'lucide-react'
import { PenBox } from 'lucide-react'
import { SearchClientButton } from './SearchClientButton'
import { useContextSelector } from 'use-context-selector'
import { HistoryAndJobContext } from '@/contexts/CreateJobContext'
import { FormEvent, useState } from 'react'

export interface UsersProperties {  
    id : string
    name : string
    cpf : string
}

export function NewJobForm() {

    const [userSelected, setUserSelected] = useState<UsersProperties | null>(null)

    const AddAnNewJob = useContextSelector(HistoryAndJobContext, (context) => {
        return context.AddAnNewJob
    })
    
    function handleSelectUser (userSelected : UsersProperties) {
        setUserSelected(userSelected)
    }

    function handleRemoveSelectedUser() {
        setUserSelected(null)
    }

    function HandleCreateNewJob(e : FormEvent){
        e.preventDefault()
        console.log('dasd')
        /*const newJob : HistoryComponentProps = {
            arrived_at : new Date().toISOString(),
            device : data.device,
            description : data.description,
            tag : data.tag,
            client_id : userSelected!.id,
            customer_name : userSelected!.name,
        } */
        
    }
    
  
    return(
        <section className=' absolute inset-0 top-14 m-2'>        
            <form 
            onSubmit = {HandleCreateNewJob}
            className='h-full border dark:border-zinc-800 border-zinc-300 rounded-md w-full py-2 px-2 shadow-lg flex flex-col gap-2'>
                
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
                    
                />

                <SearchClientButton 
                    selectedUser = {userSelected}
                    handleSelectUser={handleSelectUser}
                    handleRemoveSelectedUser ={handleRemoveSelectedUser}
                />
                
                <button 
                    type='submit'
                    className=' disabled:opacity-5 disabled:cursor-not-allowed flex items-center justify-center bg-transparent text-zinc-950 dark:text-zinc-300 rounded-md p-1 hover:bg-zinc-200  dark:hover:bg-zinc-800/90 transition duration-200 border dark:border-zinc-800 border-zinc-300  shadow-lg'
                    >
                    <PenLine size={24} /> Generate
                </button>      
            </form>
                             
        </section>
    )

}