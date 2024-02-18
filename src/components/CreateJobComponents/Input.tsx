import { LucideIcon } from "lucide-react"

interface InputProps {
    placeholder : string
    icon : LucideIcon
    error_message : string
    input_type : string
    required_input : boolean
}

export function Input ({input_type,error_message,icon : Icon ,placeholder, required_input} : InputProps) {
    return (
        
        <div className="w-full relative flex items-center gap-2 border border-zinc-300 rounded-md pl-1">
            {Icon && <Icon size={26} className=""/>}
            <input 
                className="bg-transparent w-full p-3"
                type={input_type} 
                placeholder={placeholder}
                required = {required_input}
            />
        </div>
         
    )
}