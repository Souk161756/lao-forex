"use client";

import { useMemo, useState } from "react";

import SearchBar from "./SearchBar";
import CategoryTabs from "./CategoryTabs";
import Sidebar from "./Sidebar";
import CalculatorCard from "./CalculatorCard";

import { calculators } from "../data/calculators";

export default function ToolsClient() {
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    if (!keyword) return calculators;

    return calculators.filter((tool) => {
      return (
        tool.title.toLowerCase().includes(keyword) ||
        tool.description.toLowerCase().includes(keyword) ||
        tool.category.toLowerCase().includes(keyword) ||
        tool.keywords.some((k) =>
          k.toLowerCase().includes(keyword)
        )
      );
    });
  }, [search]);

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />

      <CategoryTabs />

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div id="tools" className="lg:col-span-2">
          <h2 className="mb-6 text-2xl font-bold">
            ເຄື່ອງມືການເທຣດ
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredTools.map((item) => (
              <CalculatorCard
                key={item.id}
                title={item.title}
                description={item.description}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-[#111827] p-10 text-center text-gray-400">
              ບໍ່ພົບເຄື່ອງມືທີ່ຄົ້ນຫາ
            </div>
          )}
        </div>

        <Sidebar />
      </div>
    </>
  );
}