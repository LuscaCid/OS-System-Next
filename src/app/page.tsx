
import { Header } from "@/components/Header";
import { MainContent } from "@/components/MainContent";
import { Sidebar } from "@/components/Sidebar";
import { SideBarContextProvider } from "@/contexts/SidebarMenu";

export default function Home() {
  return (
    <>
      <SideBarContextProvider>
        <div className="overflow-hidden flex flex-col border-b-none border h-full border-zinc-300 dark:border-zinc-800 rounded-md shadow-2xl">
          <Header/>
          <div className="flex overflow-hidden border h-full border-zinc-300 dark:border-zinc-800 rounded-md shadow-2xl">
            <Sidebar />
            <MainContent />

          </div>
        </div>
      </SideBarContextProvider>
      
    </>
    
  );
}
