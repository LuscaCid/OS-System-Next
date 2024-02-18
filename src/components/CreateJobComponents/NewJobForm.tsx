'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from './Input'
import { CaseSensitive, NotebookPen } from 'lucide-react'

const FormCreationOSSchema = z.object({
    title : z.string().min(3),
    problem_description : z.string().optional(),
    arrived_date : z.date(),
    price : z.number().min(20),
    client_id : z.string(),
    created_by : z.string(), //user_id that created the service order 
})

type FormType = z.infer<typeof FormCreationOSSchema>

export function NewJobForm() {
    const {register, handleSubmit, formState : {isSubmitting}} = useForm<FormType>({
        resolver : zodResolver(FormCreationOSSchema),
        defaultValues : {
            title :"",
            created_by : '2', //current user Logged in application
            price : 30
        }
    })
    return(
        <section className=' absolute inset-0 top-14  m-2'>
            <form className='h-full border border-zinc-300 rounded-md w-full py-4 px-2 shadow-lg flex flex-col gap-2'>
                <h1 className='text-xl text-zinc-800 font-bold mb-4 flex justify-between items-center'>Type some info to create a new Job <NotebookPen size={30} /></h1>

                <Input 
                    input_type='text'
                    placeholder='Title'
                    required_input
                    error_message='Type an title!'
                    icon={CaseSensitive}
                />
                <Input 
                    input_type='text'
                    placeholder='Title'
                    required_input
                    error_message='Type an title!'
                    icon={CaseSensitive}
                />
                <Input 
                    input_type='text'
                    placeholder='Title'
                    required_input
                    error_message='Type an title!'
                    icon={CaseSensitive}
                />
            </form>
        </section>
    )

}