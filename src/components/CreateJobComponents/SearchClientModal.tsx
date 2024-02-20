
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useCallback, useState } from 'react'
import { api } from '@/app/services/api'
import {FormEvent } from 'react'

const SearchClientFormSchema = z.object({
    cpf : z.string().optional(),
    client_name : z.string().optional(),
    
})
type SearchClientFormSchemaType = z.infer<typeof SearchClientFormSchema>

export function ModalContent () { 
    
    const [clients, setClients] = useState([])
    const {register, watch, reset, formState : {isSubmitting}, handleSubmit} = useForm<SearchClientFormSchemaType>({
        resolver : zodResolver(SearchClientFormSchema),
        defaultValues : {
            cpf : "",
            client_name : "",
        }
    })

    let cpfWatched = watch('cpf')
    let nameWatched = watch('client_name')

    
    const handleSubmitForm = (e : FormEvent) => {
        e.preventDefault()
        async function fetch () {
            if(nameWatched){
                const data = await api.get('clients', {params : {name : nameWatched}})
                console.log(data)
            } 
        }
    }
    

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='absolute inset-0 h-screen w-screen bg-zinc-800/50 '/>
            <Dialog.Content className='mx-auto dark:bg-zinc-950 border dark:border-zinc-800/80  border-zinc-300 min-w-72 w-full max-w-96 rounded-md p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-100'>
                <Dialog.Close className='absolute top-2 right-2 bg-transparent cursor-pointer text-red-500 hover:text-red-600 transition duration-200'>
                    <X size={24}/> 
                </Dialog.Close>
                <Dialog.Title className='text-3xl font-bold dark:text-zinc-300 text-zinc-900 mb-4'>
                    Search
                </Dialog.Title>
            
                    <form className=' flex-col  flex gap-2'>
                        <input 
                            className='bg-transparent w-full px-2 py-1 rounded-md border border-zinc-300 dark:border-zinc-800/80 dark:text-zinc-300 text-zinc-950 '
                            placeholder='Client name'
                            type="text" 
                            {...register('client_name')}
                        />
                        <input 
                            className='bg-transparent w-full px-2 py-1 rounded-md border border-zinc-300 dark:border-zinc-800/80 dark:text-zinc-300 text-zinc-950 '
                            placeholder='Client CPF'
                            type="text" 
                            {...register('cpf')}
                        />
                        <button 
                            type='submit'
                            onSubmit={handleSubmitForm}
                            className='rounded-md bg-transparent border border-zinc-300 dark:border-zinc-800/80 text-md p-1 font-bold hover:bg-zinc-300 transition duration-200 dark:hover:bg-zinc-800 '>
                            Search user
                        </button>
                    </form>
            
                
                <h1 className='text-lg font-bold dark:text-zinc-300 text-zinc-900 my-4'>
                    Users section
                </h1>
                <section className='rounded-md border border-zinc-300 dark:border-zinc-800/80 min-h-4 '>
                    no users
                </section>
            </Dialog.Content>
        </Dialog.Portal>
        

    )
}

