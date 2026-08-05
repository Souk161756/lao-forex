import Hero from "@/app/tools/components/Hero";
import ToolsClient from "@/app/tools/components/ToolsClient";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Hero />

        <div className="mt-8">
          <ToolsClient />
        </div>
      </div>
    </main>
  );
}