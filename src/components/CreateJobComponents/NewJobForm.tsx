'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { Input } from './Input'
import { CaseSensitive, Coins, NotebookPen, PenLine, Search, Smartphone, X } from 'lucide-react'
import { SearchClientButton } from './SearchClientButton'

const FormCreationOSSchema = z.object({
    title : z.string().min(3),
    problemDescription : z.string().optional(),
    price : z.number().min(20),
    gadget : z.string()
})

export type FormType = z.infer<typeof FormCreationOSSchema>

export function NewJobForm() {
    const newJobForm = useForm<FormType>({
        resolver : zodResolver(FormCreationOSSchema),
        defaultValues : {
            title :"",
            price : 30
        }
    })

    return(
        <section className=' absolute inset-0 top-14 m-2'>
            <FormProvider {...newJobForm}>
                
                <form className='h-full border dark:border-zinc-800 border-zinc-300 rounded-md w-full py-4 px-2 shadow-lg flex flex-col gap-2'>
                    
                    <div className='h-full w-full py-4 px-2 flex flex-col gap-2 overflow-y-auto'>
                        
                        <h1 className='border-b dark:text-zinc-300 dark:border-zinc-800 border-zinc-300 w-full pb-1 text-xl text-zinc-800 font-bold mb-4 flex justify-between items-center'>Type some info to create a new Job <NotebookPen size={36} /></h1>

                        <Input 
                            input_type='text'
                            placeholder='Title'
                            required_input
                            error_message='Type an title!'
                            icon={CaseSensitive}
                            input_name='title'
                        />
                        <Input 
                            input_type='text'
                            placeholder='Gadget'
                            required_input
                            error_message='Type an name of gadget.'
                            icon={Smartphone}
                            input_name='gadget'
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
                            className='p-4 resize-none bg-transparent border dark:border-zinc-800 border-zinc-300 rounded-md shadow-md h-40 min-h-28'
                            name="description" 
                            placeholder='Set the description relating devices problems...'
                        />

                        <SearchClientButton />
                    </div>   
                    <button 
                        className='flex items-center justify-center bg-transparent text-zinc-950 dark:text-zinc-300 rounded-md p-2 hover:bg-zinc-950  dark:hover:bg-zinc-800/90 transition duration-200 border dark:border-zinc-800 border-zinc-300 hover:text-zinc-100 shadow-lg'
                        type='submit'>
                        <PenLine size={30} /> Generate
                    </button>      
                </form>
                               
            </FormProvider>
            
        </section>
    )

}