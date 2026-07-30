import Hero from "@/app/tools/components/Hero";
import SearchBar from "@/app/tools/components/SearchBar";
import CategoryTabs from "@/app/tools/components/CategoryTabs";
import Sidebar from "@/app/tools/components/Sidebar";
import CalculatorCard from "@/app/tools/components/CalculatorCard";
import { calculators } from "@/app/tools/data/calculators";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Hero />

        <div className="mt-8">
          <SearchBar />
        </div>

        <CategoryTabs />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* ຝັ່ງຊ້າຍ */}
          <div id="tools" className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold">
              ເຄື່ອງມືການເທຣດ
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {calculators.map((item) => (
                <CalculatorCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>

          {/* ຝັ່ງຂວາ */}
          <Sidebar />
        </div>
      </div>
    </main>
  );
}