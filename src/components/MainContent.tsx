
import { HistorySection } from "./historyComponents/HistorySection";
import { CreateJobSection } from "./CreateJobComponents/CreateJobSection";
import { HistoryAndJobContextProvider } from "@/contexts/CreateJobContext";

export  function MainContent () {
    
    return (
        <main className="h-full grid grid-cols-1 md:grid-cols-2 w-full">
            <HistoryAndJobContextProvider>
                <>
                    <HistorySection />
                    <CreateJobSection />
                </>
            </HistoryAndJobContextProvider>
            
        </main>
    ) 
}

//posso ter um contexto para compartilhar tanto com o lado do historico as ultimas ordens de servico funcoes de busca e do lado do createjobsection com as funcoes de criacao de uma ordem de servico