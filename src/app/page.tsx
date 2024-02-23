
import { CreateJobSection } from "@/app/components/CreateJobComponents/CreateJobSection";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { HistorySection } from "@/app/components/historyComponents/HistorySection";
import { HistoryAndJobContextProvider } from "@/contexts/CreateJobContext";
import { SideBarContextProvider } from "@/contexts/SidebarMenu";

export default function Home() {
  return (
    <>
      <SideBarContextProvider>
        <div className="overflow-hidden flex flex-col border-b-none border h-full border-zinc-300 dark:border-zinc-800 rounded-md shadow-2xl">
          <Header/>
          <div className="flex overflow-hidden border h-screen border-zinc-300 dark:border-zinc-800 rounded-md shadow-2xl">
            <Sidebar />
            
          <main className="h-full grid grid-cols-1 md:grid-cols-2 w-full">
              <HistoryAndJobContextProvider>
                  <>
                    <HistorySection />
                    <CreateJobSection />
                  </>
              </HistoryAndJobContextProvider>
              
          </main>
         </div>
        </div>
      </SideBarContextProvider>
      
    </>
    
  );
}
