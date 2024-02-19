import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
interface InputSearchModalProps {
    input_name : string
    input_id : string 
    input_placeholder : string
}
function InputSearchModal({input_id,input_name,input_placeholder} : InputSearchModalProps) {
    return (
        <fieldset>
            <label
                className='sr-only'
                htmlFor={input_id}>
                {input_name}
            </label>
            <input 
                className='py-1 px-2 w-full bg-transparent border border-zinc-300 rounded-md'
                type="text" 
                placeholder={input_placeholder}
                name={input_name}
                id={input_id}
            />
        </fieldset>
        
    )
}

function ModalContent () { 
    return (
        <Dialog.Content className='border border-zinc-300 min-w-72 w-full max-w-96 rounded-md p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-100'>
            <Dialog.Close className='absolute top-2 right-2 bg-transparent cursor-pointer text-red-500 hover:text-red-600 transition duration-200'>
                <X size={24}/> 
            </Dialog.Close>
            <Dialog.Title className='text-3xl font-bold text-zinc-900 mb-4'>
                Search
            </Dialog.Title>
            <form className=' flex-col  flex gap-2'>
            <InputSearchModal 
                input_id='Name'
                input_name='Client name'
                input_placeholder='By name...'
            />
            <InputSearchModal 
                input_id='cpf'
                input_name='Client cpf'
                input_placeholder='By cpf...'
            />
            <InputSearchModal 
                input_id='Name'
                input_name='Client name'
                input_placeholder='By name...'
            />

            </form>
        </Dialog.Content>
    )
}

export function SearchClientModal () {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className='absolute h-screen w-full inset-0 bg-black/60'/>
            <ModalContent />
        </Dialog.Portal>
    )
}