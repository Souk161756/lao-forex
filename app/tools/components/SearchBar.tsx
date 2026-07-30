"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mt-8">

      <div className="relative">

        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          placeholder="ຄົ້ນຫາເຄື່ອງມື..."
          className="
            w-full
            rounded-2xl
            border
            border-gray-700
            bg-[#121826]
            py-5
            pl-14
            pr-5
            text-lg
            text-white
            placeholder:text-gray-500
            focus:border-yellow-400
            focus:outline-none
          "
        />

      </div>

    </div>
  );
}