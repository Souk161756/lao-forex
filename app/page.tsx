export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-[#0a0f1f] border-b border-gray-800 sticky top-0 z-50">
        
        <h1 className="text-2xl font-bold text-yellow-400">
          LaoForex
        </h1>

        <div className="flex gap-3">

          <a
            href="https://t.me/RebateFXlaos"
            target="_blank"
            className="bg-blue-500 px-4 py-2 rounded-xl font-bold"
          >
            Telegram
          </a>

          <a
            href="https://wa.me/8562029826898"
            target="_blank"
            className="bg-green-500 px-4 py-2 rounded-xl font-bold"
          >
            WhatsApp
          </a>

        </div>
      </nav>

      {/* Search */}
      <div className="px-6 py-6">
        <input
          type="text"
          placeholder="Search broker..."
          className="w-full bg-[#0f172a] border border-gray-700 rounded-2xl px-5 py-4 text-white text-lg outline-none"
        />
      </div>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-5xl font-bold text-yellow-400 mb-6">
          ນາຍໜ້າ Forex ທີ່ດີສຸດໃນລາວ
        </h1>

        <p className="text-gray-400 mb-10">
          ລວມ broker ຊັ້ນນໍາ ສຳລັບຄົນລາວ
        </p>

        {/* XM */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">XM Broker</h2>

          <div className="space-y-2 mb-6">
            <p>⭐ Rating: 9.1/10</p>
            <p>💰 Cashback: $3/Lot</p>
            <p>⚡ Spread: 1.0 pip</p>
          </div>

          <a
            href="https://affs.click/wLl9B"
            target="_blank"
            className="block w-full bg-yellow-400 text-black py-3 rounded-xl font-bold text-center"
          >
            ລົງທະບຽນ
          </a>
        </div>

        {/* Exness */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Exness</h2>

          <div className="space-y-2 mb-6">
            <p>⭐ Rating: 9.5/10</p>
            <p>💰 Cashback: $5/Lot</p>
            <p>⚡ Spread: 0.8 pip</p>
          </div>

          <a
            href="https://one.exnessonelink.com/a/ocvhdpugv1"
            target="_blank"
            className="block w-full bg-yellow-400 text-black py-3 rounded-xl font-bold text-center"
          >
            ລົງທະບຽນ
          </a>
        </div>

        {/* Vantage */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Vantage</h2>

          <div className="space-y-2 mb-6">
            <p>⭐ Rating: 9.0/10</p>
            <p>💰 Cashback: $4/Lot</p>
            <p>⚡ Spread: 0.9 pip</p>
          </div>

          <a
            href="https://vigco.co/la-com-inv/wmd8Y80S"
            target="_blank"
            className="block w-full bg-yellow-400 text-black py-3 rounded-xl font-bold text-center"
          >
            ລົງທະບຽນ
          </a>
        </div>

        {/* IUX */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">IUX</h2>

          <div className="space-y-2 mb-6">
            <p>⭐ Rating: 8.9/10</p>
            <p>💰 Cashback: $4/Lot</p>
            <p>⚡ Spread: 0.7 pip</p>
          </div>

          <a
            href="https://iux.com/en/register?code=EPs5nw6M"
            target="_blank"
            className="block w-full bg-yellow-400 text-black py-3 rounded-xl font-bold text-center"
          >
            ລົງທະບຽນ
          </a>
        </div>

        {/* Market4you */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Market4you</h2>

          <div className="space-y-2 mb-6">
            <p>⭐ Rating: 8.7/10</p>
            <p>💰 Cashback: $3/Lot</p>
            <p>⚡ Spread: 1.2 pip</p>
          </div>

          <a
            href="https://account.markets4you.online/en/user-registration/?affid=bpblvtj"
            target="_blank"
            className="block w-full bg-yellow-400 text-black py-3 rounded-xl font-bold text-center"
          >
            ລົງທະບຽນ
          </a>
        </div>

        {/* HFM */}
        <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">HFM</h2>

          <div className="space-y-2 mb-6">
            <p>⭐ Rating: 9.0/10</p>
            <p>💰 Cashback: $5/Lot</p>
            <p>⚡ Spread: 0.9 pip</p>
          </div>

          <a
            href="https://register.hfm.com/sv/en/new-live-account/?refid=30421077"
            target="_blank"
            className="block w-full bg-yellow-400 text-black py-3 rounded-xl font-bold text-center"
          >
            ລົງທະບຽນ
          </a>
        </div>

      </section>

    </main>
  );
}