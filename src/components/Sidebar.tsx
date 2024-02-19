
import { ChevronsUpDown, User, Home as HomeIcon, UsersRound, Settings2 } from "lucide-react";
import { LiLink } from "./SidebarComponents/LiLink";

export function Sidebar () {
    return (
        <aside className=" p-2 w-36 border-r border-zinc-300">
            <div className="rounded-md border border-zinc-300 p-2 flex gap-1 hover:bg-zinc-200 transition duration-200 cursor-pointer mb-2 items-center overflow-hidden text-nowrap text-ellipsis" >
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

            </nav>
        </aside>
    )
}