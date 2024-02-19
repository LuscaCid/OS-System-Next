import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface Props {
    title : string
    source : string
    icon: LucideIcon
}
export function LiLink({source, title, icon : Icon} : Props) {
    return (
        <li className="p-1 w-full hover:bg-zinc-200 dark:hover:bg-zinc-800/80 transition duration-200 cursor-pointer rounded-sm">
            <Link className="flex gap-1 items-center" href={source}>
                {Icon && <Icon size={20}/>}
                {title}
            </Link>  
        </li>
    )
}