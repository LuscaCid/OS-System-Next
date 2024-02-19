import { LucideIcon } from "lucide-react"
import { useFormContext } from "react-hook-form"
import { InputNames } from "@/@types/costumer"
import { useEffect } from "react"

interface InputProps {
    placeholder : string
    icon : LucideIcon
    error_message : string
    input_type : string
    required_input : boolean

    input_name : InputNames
}

export function Input({input_type,error_message,icon : Icon ,placeholder, required_input, input_name} : InputProps ) {
    
    const {register, watch} = useFormContext()

    const watchedInput = watch(input_name)

    useEffect(() => {
        console.log(watchedInput)
    }, [watchedInput])
    return (
        <section className="flex flex-col gap-1">
            <div className="w-full relative flex items-center gap-2 border border-zinc-300 rounded-md shadow-sm ">
                {Icon && <Icon size={26} className="absolute left-1"/>}
                <label className="sr-only" htmlFor={input_name}>{input_name}</label>
                <input 
                    id={input_name}
                    className="bg-transparent w-full py-2 pl-10 "
                    type={input_type} 
                    placeholder={placeholder}
                    required = {required_input}
                    {...register(input_name)}
                />
            </div>
            <span className=" invisible absolute text-sm text-red-500 font-bold">{error_message}</span>
        </section>
         
    )
}