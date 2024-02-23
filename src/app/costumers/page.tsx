import { Header } from "@/components/Header";

import { Sidebar } from "@/components/Sidebar";
import { SideBarContextProvider } from "@/contexts/SidebarMenu";

export default function Costumers () {

    return (
        
        <>
        <SideBarContextProvider>
          <div className="overflow-hidden flex flex-col border-b-none border h-full border-zinc-300 dark:border-zinc-800 rounded-md shadow-2xl">
            <Header/>
            <div className="flex overflow-hidden border h-screen border-zinc-300 dark:border-zinc-800 rounded-md shadow-2xl">
              <Sidebar />
            </div>
          </div>
        </SideBarContextProvider>
        
      </>
    )
}