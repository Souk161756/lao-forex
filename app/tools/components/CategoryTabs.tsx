export default function CategoryTabs() {
  const tabs = [
    "ທັງໝົດ",
    "ເຄື່ອງຄິດໄລ່",
    "ທອງຄຳ",
    "ສະກຸນເງິນ",
    "ຕະຫຼາດ",
    "ອື່ນໆ",
  ];

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`rounded-full px-5 py-3 transition ${
            index === 0
              ? "bg-yellow-500 text-black font-semibold"
              : "border border-gray-700 bg-[#121826] hover:border-yellow-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}