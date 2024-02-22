'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { ThemeTriggerButton } from './ThemeTrigger'
import { MouseEvent, useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ChangeTheme() {
    
    const [actualTheme, setActualTheme] = useState<string>('')
    
    function handleSwitchTheme(e : MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        if(e.currentTarget.name === 'light'){
            setActualTheme('light')
            localStorage.setItem('@OS-theme', 'light')
            
        } else if(e.currentTarget.name === 'dark'){
            setActualTheme('dark')
            localStorage.setItem('@OS-theme', 'dark')
        }
    }

    useEffect(() => {
        let themeFromStorage = localStorage.getItem('@OS-theme')
        setActualTheme(themeFromStorage ? themeFromStorage : 'light')
    }, [])

    useEffect(() => {
        const HtmlElement = document.querySelector('html')
        if(actualTheme === 'dark'){
            HtmlElement?.classList.add('dark')
        } else if (actualTheme === 'light') {
            HtmlElement?.classList.remove('dark')
        }
    }, [actualTheme])
    return (
        <Dialog.Root>
            <ThemeTriggerButton currentTheme = {actualTheme}/>
            <Dialog.Overlay/>
            <Dialog.Content className='flex flex-col gap-1 rounded-md border dark:border-zinc-800/80 border-zinc-300 p-2 shadow-md'>     
                <button 
                    onClick={handleSwitchTheme}
                    name='light' 
                    className='hover:bg-zinc-200 transition duration-200 rounded-md flex px-2 dark:hover:bg-zinc-800/80 justify-between'>
                    light <Sun size={20} />
                </button>
        
            
                 <button 
                    onClick={handleSwitchTheme}
                    name='dark' 
                    className='hover:bg-zinc-200 transition duration-200 rounded-md flex px-2 dark:hover:bg-zinc-800/80 justify-between'>
                    dark <Moon size={20} />
                </button>

            </Dialog.Content>
        </Dialog.Root>
    )
}