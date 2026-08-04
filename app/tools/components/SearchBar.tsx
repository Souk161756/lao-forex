"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="mb-8">

      <div className="relative">

        <Search
          size={22}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          placeholder="ຄົ້ນຫາ Calculator, Broker, Gold, Forex..."
          className="
            h-16
            w-full
            rounded-2xl
            border
            border-white/10
            bg-[#111827]
            pl-16
            pr-6
            text-[17px]
            text-white
            placeholder:text-gray-500
            transition-all
            duration-300
            focus:border-yellow-400
            focus:ring-4
            focus:ring-yellow-500/10
            focus:outline-none
          "
        />

      </div>

    </section>
  );
}