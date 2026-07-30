export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* ລາຄາທອງຄຳ */}
      <div className="rounded-2xl border border-yellow-500/20 bg-[#121826] p-6">
        <h2 className="mb-4 text-lg font-bold text-yellow-400">
          🥇 ລາຄາທອງຄຳ
        </h2>

        <div className="flex items-center justify-between">
          <span className="text-gray-400">XAU/USD</span>
          <span className="text-2xl font-bold text-green-400">
            3,338.52
          </span>
        </div>

        <p className="mt-2 text-sm text-green-400">
          ▲ +12.35 (+0.37%)
        </p>
      </div>

      {/* ຄູ່ເງິນຍອດນິຍົມ */}
      <div className="rounded-2xl border border-gray-700 bg-[#121826] p-6">
        <h2 className="mb-4 text-lg font-bold">
          💱 ຄູ່ເງິນຍອດນິຍົມ
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>EUR/USD</span>
            <span>1.1762</span>
          </div>

          <div className="flex justify-between">
            <span>GBP/USD</span>
            <span>1.3521</span>
          </div>

          <div className="flex justify-between">
            <span>USD/JPY</span>
            <span>148.64</span>
          </div>

          <div className="flex justify-between">
            <span>AUD/USD</span>
            <span>0.6598</span>
          </div>
        </div>
      </div>

      {/* ສະຖານະຕະຫຼາດ */}
      <div className="rounded-2xl border border-gray-700 bg-[#121826] p-6">
        <h2 className="mb-4 text-lg font-bold">
          🌍 ສະຖານະຕະຫຼາດ
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>ຊິດນີ</span>
            <span className="text-red-400">ປິດ</span>
          </div>

          <div className="flex justify-between">
            <span>ໂຕກຽວ</span>
            <span className="text-red-400">ປິດ</span>
          </div>

          <div className="flex justify-between">
            <span>ລອນດອນ</span>
            <span className="text-red-400">ປິດ</span>
          </div>

          <div className="flex justify-between">
            <span>ນິວຢອກ</span>
            <span className="text-red-400">ປິດ</span>
          </div>
        </div>
      </div>

      {/* ຂ່າວສຳຄັນ */}
      <div className="rounded-2xl border border-gray-700 bg-[#121826] p-6">
        <h2 className="mb-4 text-lg font-bold">
          📰 ຂ່າວສຳຄັນ
        </h2>

        <ul className="space-y-3 text-sm text-gray-300">
          <li>• ຕິດຕາມການປະຊຸມ FOMC</li>
          <li>• ປະກາດຕົວເລກ GDP ສະຫະລັດ</li>
          <li>• ການເຄື່ອນໄຫວຂອງ XAU/USD</li>
        </ul>
      </div>
    </div>
  );
}