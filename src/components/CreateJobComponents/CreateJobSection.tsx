import { Plus } from "lucide-react";
import { NewJobForm } from "./NewJobForm";

export function CreateJobSection () {
    return (
        <div className="relative h-full col-span-1 md:col-span-1/5">
            <h1 className="  p-2 text-3xl font-bold border-b border-zinc-300 w-full p flex items-center gap-2">
                <div className="flex items-center border border-zinc-300 rounded-md">
                    <Plus size={24}/> 
                </div>
                Add a job
            </h1>
            <NewJobForm />
        </div>
    )
}