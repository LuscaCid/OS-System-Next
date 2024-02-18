import { Plus } from "lucide-react";

import { HistorySection } from "./historyComponents/HistorySection";
import { CreateJobSection } from "./CreateJobComponents/CreateJobSection";

export function MainContent () {
 
    return (
        <main className="h-full grid grid-cols-1 md:grid-cols-2 w-full">
            <HistorySection />
            <CreateJobSection />
        </main>
    )
}