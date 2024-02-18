import { LucideIcon } from "lucide-react"

interface InputProps {
    placeholder : string
    icon : LucideIcon
    error_message : string
    input_type : string
    required_input : boolean
    rest? : any []
}

export function Input ({input_type,error_message,icon : Icon ,placeholder, required_input, ...rest} : InputProps) {
    return (
        <section className="flex flex-col gap-1">
            <div className="w-full relative flex items-center gap-2 border border-zinc-300 rounded-md pl-1">
                {Icon && <Icon size={26} className=""/>}
                <input 
                    className="bg-transparent w-full p-3"
                    type={input_type} 
                    placeholder={placeholder}
                    required = {required_input}
                    {...rest}
                />
            </div>
            <span className="text-sm text-red-500 font-bold">{error_message}</span>
        </section>
         
    )
}