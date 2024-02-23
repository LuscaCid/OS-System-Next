import { LucideIcon } from "lucide-react"
import { InputNames } from "@/@types/costumer"
import { ChangeEvent } from "react"

interface InputProps {
    placeholder : string
    icon : LucideIcon
    error_message : string
    input_type : string
    required_input : boolean
    input_name : InputNames
    input_value : string | number
    onChangeFunction : (e : ChangeEvent<HTMLInputElement>) => void
}

export function Input({onChangeFunction, input_type,error_message,icon : Icon ,placeholder, required_input, input_name, input_value} : InputProps ) {
    
    

    return (
        <section className="flex flex-col gap-1">
            <div className="w-full relative flex items-center gap-2 border dark:border-zinc-800 border-zinc-300 rounded-md shadow-sm ">
                {Icon && <Icon size={26} className="absolute left-1"/>}
                <label className="sr-only" htmlFor={input_name}>{input_name}</label>
                <input 
                    id={input_name}
                    className="bg-transparent w-full py-2 pl-10 "
                    type={input_type} 
                    placeholder={placeholder}
                    required = {required_input}
                    onChange={onChangeFunction}
                    value={input_value}
                />
            </div>
            <span className=" invisible absolute text-sm text-red-500 font-bold">{error_message}</span>
        </section>
         
    )
}