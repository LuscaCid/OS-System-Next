'use client'
import { History, Search } from "lucide-react";
import { FormEvent, useEffect, useState } from 'react'
import { useContextSelector } from "use-context-selector";
import { HistoryAndJobContext } from "@/contexts/CreateJobContext";
import { Suspense } from "react";
import { HistoryRender } from "./HistoryRendering";
import { LoadingHistory } from "./loading";

export function HistorySection () {
 
    const [query, setQuery] = useState<string>('')

    const {fetchData, setJobsHistory} = useContextSelector(HistoryAndJobContext, (context) => {
        return {
            fetchData : context.fetchHistory,
            setJobsHistory : context.setJobsHistory
        }
    }) 

    useEffect(() => {
        fetchData(query).then(data => setJobsHistory(data))
        if(query.length===0)fetchData().then(data => setJobsHistory(data))
    }, [query, fetchData, setJobsHistory])

    return(
        <div className="h-full col-span-1 md:col-span-4/5 w-full  border-r border-zinc-300 dark:border-zinc-800 relative">
            <h1 className="mb-2 ml-3 flex items-center gap-2 p-2 text-3xl font-bold border-b border-zinc-300 dark:border-zinc-800 w-full">
                <div className="border border-zinc-300 dark:border-zinc-800 rounded-md">
                <History size={24} />
                </div>
                History
            </h1>
            <div className="mt-2 px-2 w-full flex gap-1  items-center">
                <input 
                    className="py-1 px-4  bg-zinc-300 rounded-full w-full border border-zinc-400 text-md text-zinc-950 dark:bg-zinc-700 dark:text-zinc-300 dark:border-zinc-700/80"
                    type="text"
                    placeholder="Search for an service" 
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        <div className="border-t border-b border-zinc-300 dark:border-zinc-800  rounded-md m-2 flex flex-col gap-2 overflow-y-auto absolute inset-0 top-24 bottom-4 pr-2">           
            <Suspense fallback={<LoadingHistory />}>
                <HistoryRender /> 
            </Suspense>
            </div>                                     
        </div>
    )
}