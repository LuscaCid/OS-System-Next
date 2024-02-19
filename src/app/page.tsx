import { MainContent } from "@/components/MainContent";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex border h-full border-zinc-300 dark:border-zinc-800 rounded-md shadow-2xl">
      <Sidebar />
      <MainContent />
    </div>
  );
}
