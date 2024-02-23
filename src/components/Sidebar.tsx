import { ChevronsUpDown, User, Home as HomeIcon, UsersRound, Settings2, ArrowRight } from "lucide-react";
import { LiLink } from "./SidebarComponents/LiLink";
import { ChangeTheme } from "./SidebarComponents/ThemeMode";
import { useContextSelector } from "use-context-selector";
import { SidebarContext } from "@/contexts/SidebarMenu";

export function Sidebar () {
    const isOpen = useContextSelector(SidebarContext, (context) => {
        return context.isOpen
    })

    const isOpenClassAttributes = isOpen ? "w-36" : "w-0"
    return (

        <aside className="items-start overflow-hidden p-2  border-r border-zinc-300 dark:border-zinc-800">
            <div className="rounded-md border border-zinc-300 dark:border-zinc-800 p-2 flex gap-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition duration-200 cursor-pointer mb-2 items-center  text-nowrap text-ellipsis" >
                <User  size={15}/>Lucas Cid <ChevronsUpDown size={15} />
            </div>
            <nav className="list-none flex flex-col gap-2">
                <LiLink 
                    icon={HomeIcon}
                    source="/" 
                    title="home" 
                />
                <LiLink 
                    icon={UsersRound}
                    source="/" 
                    title="clients"
                />
                <LiLink 
                    source="/" 
                    icon={Settings2}
                    title="settings" 
                />
                <ChangeTheme />
            </nav>
        </aside>
    )
}