import { Search, X } from "lucide-react";
import * as Dialog from '@radix-ui/react-dialog'
import { SearchClientModal } from "./SearchClientModal";

export function SearchClientButton () {
    return (
        <section className='flex flex-col gap-2 mt-4'>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button type='button' className=' items-center flex justify-between  w-full bg-transparent p-3 border border-zinc-300 rounded-md hover:bg-zinc-200/50 transition duration-200 cursor-text'>
                        Select an Client <Search strokeWidth={1.25} size={24}/>
                    </button>
                </Dialog.Trigger>    
            <SearchClientModal />
            </Dialog.Root>
            <span className='p-3 border flex items-center justify-between border-zinc-300 rounded-md hover:bg-zinc-200 transition duration-200 '>
                Werlay dos Santos
                <X 
                    className='text-red-500 cursor-pointer' 
                    size={24} 
                />
            </span>
        </section>
        
        
    )
}