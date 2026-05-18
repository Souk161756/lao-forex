import { notFound } from "next/navigation";

const lessons: Record<string, {
  title: string;
  chapter: string;
  chapterColor: string;
  time: string;
  content: { heading?: string; text?: string; items?: string[]; type: "text" | "list" | "heading" | "tip" | "warning" }[];
  prev?: string;
  next?: string;
}> = {
  "1": {
    title: "Forex ແມ່ນຫຍັງ? ຕະຫຼາດເງິນຕາໂລກ",
    chapter: "ພາກທີ 1: ພື້ນຖານ Forex",
    chapterColor: "#60a5fa",
    time: "4 ນທ",
    next: "2",
    content: [
      { type: "text", text: "Forex ຫຼື Foreign Exchange ແມ່ນຕະຫຼາດແລກປ່ຽນເງິນຕາທີ່ໃຫຍ່ທີ່ສຸດໃນໂລກ ມີການຊື້ຂາຍກວ່າ $7 ຕື້ຕໍ່ວັນ — ໃຫຍ່ກວ່າຕະຫຼາດຫຸ້ນຫຼາຍເທົ່າ" },
      { type: "text", text: "ການເທຣດ Forex ໝາຍເຖິງການຊື້ເງິນຕາໜຶ່ງ ແລະ ຂາຍເງິນຕາອີກໜຶ່ງໃນເວລາດຽວກັນ ຕົວຢ່າງ: ຊື້ EUR/USD ໝາຍຄວາມວ່າ ຊື້ EUR ແລະ ຂາຍ USD" },
      { type: "heading", heading: "ຕົວຢ່າງງ່າຍໆ" },
      { type: "text", text: "ເຈົ້າຄິດວ່າ EUR ຈະແຂງຂຶ້ນ → ຊື້ EUR/USD ທີ່ 1.1000 → ລາຄາຂຶ້ນເປັນ 1.1050 → ເຈົ້າໄດ້ກໍາໄລ 50 Pip" },
      { type: "heading", heading: "ເວລາເທຣດ" },
      { type: "list", items: ["ຕະຫຼາດ Forex ເປີດ 24 ຊົ່ວໂມງ 5 ວັນຕໍ່ອາທິດ", "ວັນຈັນ-ວັນສຸກ (ຍົກເວັ້ນວັນພັກລັດຖະການ)", "Session ສໍາຄັນ: London, New York, Tokyo, Sydney", "ເວລາທີ່ Spread ຕໍ່ານທີ່ສຸດ: London + New York ຊ້ອນກັນ"] },
      { type: "tip", text: "💡 ສໍາລັບຄົນລາວ Session ທີ່ດີທີ່ສຸດແມ່ນ 14:00-23:00 (ລາວ) ເພາະເວລານັ້ນ London ແລະ New York ຊ້ອນກັນ — Volume ສູງ Spread ຕໍ່າ" },
    ],
  },
  "2": {
    title: "Pip, Lot, Spread ແມ່ນຫຍັງ?",
    chapter: "ພາກທີ 1: ພື້ນຖານ Forex",
    chapterColor: "#60a5fa",
    time: "4 ນທ",
    prev: "1",
    next: "3",
    content: [
      { type: "heading", heading: "Pip ແມ່ນຫຍັງ?" },
      { type: "text", text: "Pip ຄືໜ່ວຍນ້ອຍທີ່ສຸດຂອງການເຄື່ອນໄຫວລາຄາ ສໍາລັບ EURUSD: 1 Pip = 0.0001 ຕົວຢ່າງ: ລາຄາເຄື່ອນຈາກ 1.1000 → 1.1001 = 1 Pip" },
      { type: "heading", heading: "Lot ແມ່ນຫຍັງ?" },
      { type: "list", items: ["1 Lot (Standard) = 100,000 ໜ່ວຍ — ໃຫຍ່ເກີນສໍາລັບມືໃໝ່", "0.1 Lot (Mini) = 10,000 ໜ່ວຍ", "0.01 Lot (Micro) = 1,000 ໜ່ວຍ — ແນະນໍາສໍາລັບມືໃໝ່"] },
      { type: "heading", heading: "Spread ແມ່ນຫຍັງ?" },
      { type: "text", text: "Spread ແມ່ນຄ່າທໍານຽມຂອງໂບກເກີ້ — ສ່ວນຕ່າງລະຫວ່າງ ລາຄາຊື້ (Ask) ແລະ ລາຄາຂາຍ (Bid) ຕົວຢ່າງ: Bid 1.1000 / Ask 1.1002 → Spread = 2 Pip" },
      { type: "tip", text: "💡 ຍິ່ງ Spread ຕໍ່າ = ປະຢັດເງິນໄດ້ຫຼາຍ Exness ແລະ IUX ມີ Spread ຕໍ່ານທີ່ສຸດໃນລາວ" },
    ],
  },
  "3": {
    title: "Leverage ແມ່ນຫຍັງ? ໃຊ້ແນວໃດໃຫ້ປອດໄພ",
    chapter: "ພາກທີ 1: ພື້ນຖານ Forex",
    chapterColor: "#60a5fa",
    time: "4 ນທ",
    prev: "2",
    next: "4",
    content: [
      { type: "text", text: "Leverage ຄືການຍືມເງິນຈາກໂບກເກີ້ເພື່ອເທຣດໃນ Volume ທີ່ໃຫຍ່ກວ່າທຶນຂອງຕົວເອງ" },
      { type: "heading", heading: "ຕົວຢ່າງ Leverage 1:1000" },
      { type: "text", text: "ມີທຶນ $100 → ສາມາດຄວບຄຸມ Position $100,000 — ຄືຢືມເງິນ 1,000 ເທົ່າ" },
      { type: "heading", heading: "Leverage ສູງ = ຄວາມສ່ຽງສູງ" },
      { type: "warning", text: "⚠️ Leverage ສູງໝາຍຄວາມວ່າ ກໍາໄລໄວ ຂາດທຶນໄວຄືກັນ ມືໃໝ່ຄວນໃຊ້ Leverage 1:10 ຫຼື 1:50 ກ່ອນ" },
      { type: "list", items: ["ມືໃໝ່: ໃຊ້ Leverage 1:10 - 1:50", "ມືກາງ: ໃຊ້ Leverage 1:100 - 1:200", "ມືອາຊີບ: ໃຊ້ Leverage ສູງກວ່ານີ້ ແຕ່ຕ້ອງ manage risk ດີ"] },
    ],
  },
  "4": {
    title: "Timeframe ໃດດີ? M5, H1, D1 ຕ່າງກັນແນວໃດ",
    chapter: "ພາກທີ 1: ພື້ນຖານ Forex",
    chapterColor: "#60a5fa",
    time: "4 ນທ",
    prev: "3",
    next: "5",
    content: [
      { type: "text", text: "Timeframe ຄືຊ່ວງເວລາທີ່ແຕ່ລະ Candle ສະແດງ ເຊັ່ນ M5 = 1 Candle = 5 ນາທີ, H1 = 1 Candle = 1 ຊົ່ວໂມງ" },
      { type: "heading", heading: "Timeframe ທົ່ວໄປ" },
      { type: "list", items: ["M1, M5, M15 — Scalping · ເທຣດໄວ · Noise ຫຼາຍ", "M30, H1 — Day Trading · ສົມດຸນດີ · ແນະນໍາສໍາລັບມືໃໝ່", "H4, D1 — Swing Trading · ໃຊ້ເວລາຫຼາຍ · Trend ຊັດ", "W1, MN — Position Trading · ໄລຍະຍາວ"] },
      { type: "tip", text: "💡 ມືໃໝ່ຄວນເລີ່ມທີ່ H1 ຫຼື H4 — ບໍ່ເຫນັງຕີງໄວ · ມີເວລາຄິດ · ຫຼຸດ Stress" },
    ],
  },
  "5": {
    title: "ໂບກເກີ້ Forex ແມ່ນຫຍັງ? ເລືອກແນວໃດ",
    chapter: "ພາກທີ 1: ພື້ນຖານ Forex",
    chapterColor: "#60a5fa",
    time: "5 ນທ",
    prev: "4",
    next: "6",
    content: [
      { type: "text", text: "ໂບກເກີ້ຄືຕົວກາງລະຫວ່າງເຈົ້າກັບຕະຫຼາດ Forex — ເຈົ້າຕ້ອງເລືອກໂບກເກີ້ກ່ອນເລີ່ມເທຣດ" },
      { type: "heading", heading: "ໂບກເກີ້ທີ່ດີຕ້ອງມີ" },
      { type: "list", items: ["✅ Regulated — ໄດ້ຮັບໃບອະນຸຍາດ FCA, ASIC, CySEC", "✅ ຝາກ-ຖອນ BCEL ໄດ້", "✅ Spread ຕໍ່າ", "✅ Support ພາສາລາວ ຫຼື ໄທ", "✅ ຖອນໄວ ບໍ່ຕ້ອງລໍຖ້ານານ"] },
      { type: "heading", heading: "ໂບກເກີ້ແນະນໍາສໍາລັບຄົນລາວ" },
      { type: "list", items: ["XM — ເໝາະສໍາລັບມືໃໝ່ · Bonus $30 ຟຣີ", "Exness — ຖອນໄວ 24/7 · Spread ຕໍ່າ", "IUX — Spread ຕໍ່ານ 0.9pip", "Vantage — Cashback ສູງ $4/Lot"] },
      { type: "tip", text: "💡 ເລີ່ມດ້ວຍ XM ຫຼື Exness — ທັງສອງຮັບ BCEL ແລະ ມີ Support ດີ" },
    ],
  },
  "6": {
    title: "Candlestick ແມ່ນຫຍັງ? ອ່ານກຣາຟເບື້ອງຕົ້ນ",
    chapter: "ພາກທີ 2: ການວິເຄາະຕະຫຼາດ",
    chapterColor: "#facc15",
    time: "5 ນທ",
    prev: "5",
    next: "7",
    content: [
      { type: "text", text: "Candlestick ຫຼື ແທ່ງທຽນ ແມ່ນວິທີສະແດງລາຄາທີ່ນິຍົມທີ່ສຸດໃນ Forex — ແຕ່ລະ Candle ສະແດງ 4 ລາຄາ" },
      { type: "list", items: ["Open — ລາຄາເປີດ", "High — ລາຄາສູງສຸດ", "Low — ລາຄາຕໍ່ານສຸດ", "Close — ລາຄາປິດ"] },
      { type: "heading", heading: "Candle ສີຂຽວ vs ສີແດງ" },
      { type: "list", items: ["🟢 ສີຂຽວ (Bullish) = ລາຄາປິດສູງກວ່າເປີດ = ຂາຂຶ້ນ", "🔴 ສີແດງ (Bearish) = ລາຄາປິດຕໍ່າກວ່າເປີດ = ຂາລົງ"] },
      { type: "tip", text: "💡 Pattern ສໍາຄັນ: Doji, Hammer, Engulfing — ຮຽນ 3 ອັນນີ້ກ່ອນພໍ" },
    ],
  },
  "7": {
    title: "Support & Resistance ຄືຫຍັງ?",
    chapter: "ພາກທີ 2: ການວິເຄາະຕະຫຼາດ",
    chapterColor: "#facc15",
    time: "5 ນທ",
    prev: "6",
    next: "8",
    content: [
      { type: "text", text: "Support ແລະ Resistance ແມ່ນລະດັບລາຄາສໍາຄັນທີ່ຕະຫຼາດມັກຈະຢຸດ ຫຼື ກັບທິດ" },
      { type: "heading", heading: "Support (ແນວຮັບ)" },
      { type: "text", text: "ລະດັບລາຄາທີ່ຕະຫຼາດເຄີຍ Bounce ຂຶ້ນ — ຄືກັບພື້ນ ລາຄາຈ່ວງລົງມາຮອດບ່ອນນີ້ແລ້ວຂຶ້ນ" },
      { type: "heading", heading: "Resistance (ແນວຕ້ານ)" },
      { type: "text", text: "ລະດັບລາຄາທີ່ຕະຫຼາດເຄີຍ Reject ລົງ — ຄືກັບເພດານ ລາຄາຂຶ້ນໄປຮອດບ່ອນນີ້ແລ້ວລົງ" },
      { type: "tip", text: "💡 ວິທີໃຊ້: ຊື້ໃກ້ Support · ຂາຍໃກ້ Resistance · ຕັ້ງ Stop Loss ຢູ່ຕໍ່າກວ່າ Support" },
    ],
  },
  "8": {
    title: "Trend ແມ່ນຫຍັງ? ເທຣດຕາມ Trend",
    chapter: "ພາກທີ 2: ການວິເຄາະຕະຫຼາດ",
    chapterColor: "#facc15",
    time: "5 ນທ",
    prev: "7",
    next: "9",
    content: [
      { type: "text", text: '"Trend is your friend" — ການເທຣດຕາມທິດຕະຫຼາດໂດຍລວມຈະໄດ້ກໍາໄລໄດ້ງ່າຍກວ່າການສວນ Trend' },
      { type: "list", items: ["📈 Uptrend = Higher Highs + Higher Lows → ຊື້ (Buy)", "📉 Downtrend = Lower Highs + Lower Lows → ຂາຍ (Sell)", "↔️ Sideways = ລາຄາຊ໌ຫຼ້ ໄປມາ → ຫຼີກລ້ຽງ ຫຼື Range Trade"] },
      { type: "tip", text: "💡 ໃຊ້ MA (Moving Average) ຊ່ວຍເຫັນ Trend ຊັດຂຶ້ນ: ລາຄາຢູ່ເໜືອ MA = Uptrend · ລາຄາຢູ່ໃຕ້ MA = Downtrend" },
    ],
  },
  "9": {
    title: "Market Structure: Higher High, Lower Low",
    chapter: "ພາກທີ 2: ການວິເຄາະຕະຫຼາດ",
    chapterColor: "#facc15",
    time: "5 ນທ",
    prev: "8",
    next: "10",
    content: [
      { type: "text", text: "Market Structure ຄືການອ່ານໂຄງສ້າງຕະຫຼາດໂດຍດູ High ແລະ Low ຂອງລາຄາ — ວິທີນີ້ໃຊ້ໂດຍ Trader ມືອາຊີບ" },
      { type: "list", items: ["HH (Higher High) = ຈຸດສູງໃໝ່ → Uptrend ຍັງຄົງຢູ່", "HL (Higher Low) = ຈຸດຕໍ່ານໃໝ່ສູງກວ່າເກົ່າ → Uptrend ແຂງແກ່ນ", "LH (Lower High) = ຈຸດສູງໃໝ່ຕໍ່ານກວ່າເກົ່າ → Downtrend", "LL (Lower Low) = ຈຸດຕໍ່ານໃໝ່ → Downtrend ຍັງຄົງຢູ່"] },
      { type: "tip", text: "💡 ເມື່ອ HH ແລະ HL ຖືກທໍາລາຍ = Trend ກໍາລັງປ່ຽນ — ໃຫ້ລະວັງ" },
    ],
  },
  "10": {
    title: "Indicator ທີ່ຄວນຮູ້: RSI, MACD, MA",
    chapter: "ພາກທີ 2: ການວິເຄາະຕະຫຼາດ",
    chapterColor: "#facc15",
    time: "5 ນທ",
    prev: "9",
    next: "11",
    content: [
      { type: "heading", heading: "RSI (Relative Strength Index)" },
      { type: "text", text: "RSI ວັດຄວາມແຂງ-ອ່ອນຂອງລາຄາ ຄ່າ 0-100: ສູງກວ່າ 70 = Overbought (ອາດລົງ) · ຕໍ່າກວ່າ 30 = Oversold (ອາດຂຶ້ນ)" },
      { type: "heading", heading: "MACD" },
      { type: "text", text: "MACD ຊ່ວຍຫາ Momentum ແລະ ສັນຍານ Buy/Sell: MACD ຂ້າມ Signal Line ຂຶ້ນ = Buy · ຂ້າມລົງ = Sell" },
      { type: "heading", heading: "Moving Average (MA)" },
      { type: "text", text: "MA ສະແດງລາຄາສະເລ່ຍ ຊ່ວຍເຫັນ Trend: MA 20 ແລະ MA 50 ຖ້ານ MA 20 ຂ້າມ MA 50 ຂຶ້ນ = Buy Signal" },
      { type: "warning", text: "⚠️ Indicator ຊ່ວຍຢືນຢັນ ບໍ່ແມ່ນ Signal ດຽວ ຕ້ອງໃຊ້ຄຽງກັບ Price Action" },
    ],
  },
  "11": {
    title: "Risk Management ແມ່ນຫຍັງ?",
    chapter: "ພາກທີ 3: ການຄຸ້ມຄອງເງິນ",
    chapterColor: "#4ade80",
    time: "5 ນທ",
    prev: "10",
    next: "12",
    content: [
      { type: "text", text: "Risk Management ຄືການຄຸ້ມຄອງຄວາມສ່ຽງ — ຫຼາຍຄົນຂາດທຶນບໍ່ແມ່ນເພາະ Strategy ຜິດ ແຕ່ເພາະ Risk Management ບໍ່ດີ" },
      { type: "heading", heading: "ກົດ 1% Rule" },
      { type: "text", text: "ຢ່າສ່ຽງເກີນ 1-2% ຂອງ Account ຕໍ່ 1 Trade ຕົວຢ່າງ: Account $1,000 → ສ່ຽງໄດ້ສູງສຸດ $10-$20 ຕໍ່ Trade" },
      { type: "list", items: ["ຕັ້ງ Stop Loss ທຸກ Trade", "ຢ່າ Revenge Trade ຫຼັງຂາດທຶນ", "ຢ່າ Oversize ເພາະໝັ້ນໃຈ", "ບັນທຶກ Trade ທຸກອັນ"] },
      { type: "tip", text: "💡 Trader ທີ່ດີ ບໍ່ແມ່ນຄົນທີ່ຊະນະທຸກ Trade ແຕ່ຄືຄົນທີ່ຂາດທຶນໜ້ອຍທີ່ສຸດ" },
    ],
  },
  "12": {
    title: "Stop Loss & Take Profit ຕັ້ງຢ່າງຖືກຕ້ອງ",
    chapter: "ພາກທີ 3: ການຄຸ້ມຄອງເງິນ",
    chapterColor: "#4ade80",
    time: "5 ນທ",
    prev: "11",
    next: "13",
    content: [
      { type: "heading", heading: "Stop Loss (SL)" },
      { type: "text", text: "Stop Loss ຄືລະດັບລາຄາທີ່ລະບົບຈະປິດ Trade ໂດຍອັດຕະໂນມັດ ເພື່ອຈໍາກັດການຂາດທຶນ — ຕ້ອງຕັ້ງທຸກຄັ້ງ" },
      { type: "heading", heading: "Take Profit (TP)" },
      { type: "text", text: "Take Profit ຄືລະດັບລາຄາທີ່ລະບົບຈະປິດ Trade ໂດຍອັດຕະໂນມັດ ເພື່ອເກັບກໍາໄລ" },
      { type: "heading", heading: "Risk:Reward Ratio" },
      { type: "text", text: "ຄວນໃຊ້ RR ຢ່າງໜ້ອຍ 1:2 ໝາຍຄວາມວ່າ ສ່ຽງ 10 Pip → ກໍາໄລ 20 Pip ຖ້າ Win Rate 50% ກໍ່ຍັງໄດ້ກໍາໄລ" },
      { type: "warning", text: "⚠️ ຢ່າ Move Stop Loss ໃຫ້ໄກຂຶ້ນເມື່ອ Trade ກໍາລັງຂາດທຶນ — ນີ້ຄືການຂ້າ Account" },
    ],
  },
  "13": {
    title: "Money Management Plan",
    chapter: "ພາກທີ 3: ການຄຸ້ມຄອງເງິນ",
    chapterColor: "#4ade80",
    time: "5 ນທ",
    prev: "12",
    next: "14",
    content: [
      { type: "text", text: "Money Management Plan ຄືແຜນການຈັດການເງິນ ທີ່ຕ້ອງກໍານົດລ່ວງໜ້າກ່ອນເທຣດ" },
      { type: "list", items: ["ຈໍານວນ Trade ຕໍ່ວັນ: ສູງສຸດ 3-5 Trade", "% ສ່ຽງຕໍ່ Trade: 1-2% ຂອງ Account", "ສ່ຽງລວມຕໍ່ວັນ: ສູງສຸດ 5% ຂອງ Account", "ຖ້າຂາດທຶນ 3 Trade ຕິດກັນ: ຢຸດເທຣດວັນນັ້ນ"] },
      { type: "tip", text: "💡 ຂຽນ Plan ລົງເຈ້ຍ ແລ້ວຕິດໄວ້ໃກ້ Computer — ຈ່ວງທີ່ Emotion ມາ ຈະຊ່ວຍໃຫ້ຢຸດໄດ້" },
    ],
  },
  "14": {
    title: "Drawdown ແມ່ນຫຍັງ?",
    chapter: "ພາກທີ 3: ການຄຸ້ມຄອງເງິນ",
    chapterColor: "#4ade80",
    time: "5 ນທ",
    prev: "13",
    next: "15",
    content: [
      { type: "text", text: "Drawdown ຄືການຫຼຸດລົງຂອງ Account ຈາກຈຸດສູງສຸດ ຕົວຢ່າງ: Account $1,000 → ຂາດທຶນ → ເຫຼືອ $800 → Drawdown = 20%" },
      { type: "heading", heading: "ເຮັດຫຍັງເມື່ອ Drawdown?" },
      { type: "list", items: ["ຫຼຸດ Lot Size ລົງທັນທີ", "ທົບທວນ Strategy ວ່າຜິດຫຍັງ", "ຢ່າ Revenge Trade", "ພັກຜ່ອນ 1-2 ວັນ ກ່ອນກັບມາ"] },
      { type: "warning", text: "⚠️ Drawdown ເກີນ 20% = ອັນຕະລາຍ · ຕ້ອງຢຸດ ແລ້ວທົບທວນ Strategy ໃໝ່" },
    ],
  },
  "15": {
    title: "Position Sizing: ໃຊ້ Lot ຂະໜາດໃດ",
    chapter: "ພາກທີ 3: ການຄຸ້ມຄອງເງິນ",
    chapterColor: "#4ade80",
    time: "4 ນທ",
    prev: "14",
    next: "16",
    content: [
      { type: "text", text: "Position Sizing ຄືການຄໍານວນ Lot Size ທີ່ເໝາະສົມ ໂດຍອ້າງອີງຈາກ Account Size ແລະ ຄວາມສ່ຽງທີ່ຍອມຮັບໄດ້" },
      { type: "heading", heading: "ສູດຄໍານວນ" },
      { type: "text", text: "Lot Size = (Account × % Risk) ÷ (Stop Loss × Pip Value)" },
      { type: "list", items: ["Account $500 · Risk 1% = $5", "Stop Loss 20 Pip · Pip Value $1 = $20", "Lot Size = $5 ÷ $20 = 0.25 Lot"] },
      { type: "tip", text: "💡 ໃຊ້ Lot Calculator ຢູ່ໃນ XM ຫຼື Exness ຊ່ວຍຄໍານວນໄດ້ຄ່ອຍ" },
    ],
  },
  "16": {
    title: "ເປີດບັນຊີ Demo ຄັ້ງທຳອິດ",
    chapter: "ພາກທີ 4: ເລີ່ມເທຣດຈິງ",
    chapterColor: "#fb923c",
    time: "4 ນທ",
    prev: "15",
    next: "17",
    content: [
      { type: "text", text: "ບັນຊີ Demo ຄືບັນຊີຝຶກຫັດ ໃຊ້ເງິນສົມມຸດ — ສາມາດເທຣດໄດ້ຄືເງິນຈິງ ແຕ່ບໍ່ສ່ຽງເງິນຕົວເອງ" },
      { type: "heading", heading: "ຂັ້ນຕອນ" },
      { type: "list", items: ["1. ເຂົ້າ xm.com ຫຼື exness.com", "2. ສະໝັກ + ຢືນຢັນ Email", "3. ເລືອກ 'Open Demo Account'", "4. ດາວໂຫຼດ MT4 ຫຼື MT5", "5. Login ແລ້ວເລີ່ມຝຶກໄດ້ເລີຍ"] },
      { type: "tip", text: "💡 ຝຶກ Demo ຢ່າງໜ້ອຍ 1-3 ເດືອນ ຈົນ Consistent ກ່ອນໃຊ້ເງິນຈິງ" },
    ],
  },
  "17": {
    title: "ຝາກເງິນ BCEL ເຂົ້າ Forex",
    chapter: "ພາກທີ 4: ເລີ່ມເທຣດຈິງ",
    chapterColor: "#fb923c",
    time: "4 ນທ",
    prev: "16",
    next: "18",
    content: [
      { type: "text", text: "ໂບກເກີ້ທີ່ຮັບ BCEL ສໍາລັບຄົນລາວ ໄດ້ແກ່ XM, Exness, IUX, Vantage, HFM, Market4you" },
      { type: "heading", heading: "ຂັ້ນຕອນຝາກ BCEL" },
      { type: "list", items: ["1. Login ໂບກເກີ້ → ໄປ Deposit", "2. ເລືອກ 'Local Bank Transfer' ຫຼື 'Thailand/Laos Bank'", "3. ໃສ່ຈໍານວນ USD ທີ່ຕ້ອງການ", "4. ໂອນຜ່ານ BCEL One ຫຼື Counter ທະນາຄານ", "5. Upload Slip ຢືນຢັນ → ເງິນເຂົ້າ 15-60 ນາທີ"] },
      { type: "tip", text: "💡 XM ຮັບຝາກ BCEL ງ່າຍທີ່ສຸດ · Exness ຖອນໄວທີ່ສຸດ" },
    ],
  },
  "18": {
    title: "ວິທີເທຣດ EURUSD ຄັ້ງທຳອິດ",
    chapter: "ພາກທີ 4: ເລີ່ມເທຣດຈິງ",
    chapterColor: "#fb923c",
    time: "5 ນທ",
    prev: "17",
    next: "19",
    content: [
      { type: "text", text: "EURUSD ຄືຄູ່ເງິນທີ່ Spread ຕໍ່ານທີ່ສຸດ ແລະ ສຳລັບຜູ້ເລີ່ມຕົ້ນ — ເໝາະທີ່ສຸດໃນການຝຶກ" },
      { type: "heading", heading: "ຂັ້ນຕອນ Buy EURUSD" },
      { type: "list", items: ["1. ເປີດ MT4/MT5 → ຊອກ EURUSD", "2. ຄລິກຂວາ → New Order", "3. ເລືອກ Type: Market Execution", "4. ໃສ່ Volume: 0.01 (Micro)", "5. ຕັ້ງ Stop Loss ແລະ Take Profit", "6. ກົດ Buy (ຫຼື Sell ຖ້າຄິດລາຄາລົງ)"] },
      { type: "warning", text: "⚠️ ຢ່າລືມຕັ້ງ Stop Loss ທຸກຄັ້ງ — ທຸກ Trade ທີ່ບໍ່ມີ SL ແມ່ນ Gambling" },
    ],
  },
  "19": {
    title: "Backtesting ແມ່ນຫຍັງ?",
    chapter: "ພາກທີ 4: ເລີ່ມເທຣດຈິງ",
    chapterColor: "#fb923c",
    time: "5 ນທ",
    prev: "18",
    next: "20",
    content: [
      { type: "text", text: "Backtesting ຄືການທົດສອບ Strategy ໂດຍໃຊ້ຂໍ້ມູນລາຄາໃນອະດີດ ກ່ອນໃຊ້ເງິນຈິງ" },
      { type: "list", items: ["ທົດສອບ Strategy ໃນ 100-200 Trade ຂອງອະດີດ", "ບັນທຶກ Win Rate, RR, Max Drawdown", "ຖ້າ Win Rate > 50% ແລະ RR > 1:1.5 = Strategy ດີ", "ທົດລອງໃນ Demo ອີກ 1 ເດືອນ ກ່ອນ Live"] },
      { type: "tip", text: "💡 MT4 ມີ Strategy Tester ຟຣີ ໃຊ້ Backtest ໄດ້ຄ່ອຍ" },
    ],
  },
  "20": {
    title: "Trading Journal: ຈົດບັນທຶກ Trade",
    chapter: "ພາກທີ 4: ເລີ່ມເທຣດຈິງ",
    chapterColor: "#fb923c",
    time: "4 ນທ",
    prev: "19",
    content: [
      { type: "text", text: "Trading Journal ຄືບັນທຶກທຸກ Trade — Trader ທີ່ປະສົບຜົນສໍາເລັດທຸກຄົນຈົດ Journal" },
      { type: "heading", heading: "ສິ່ງທີ່ຕ້ອງຈົດ" },
      { type: "list", items: ["ວັນທີ ແລະ ເວລາ Trade", "ຄູ່ເງິນ ແລະ ທິດ (Buy/Sell)", "Lot Size · Entry · SL · TP", "ຜົນ: ກໍາໄລ ຫຼື ຂາດທຶນ", "ເຫດຜົນທີ່ເທຣດ — ອ້າງອີງ Pattern ຫຍັງ", "ຄວາມຮູ້ສຶກ ແລະ ບົດຮຽນ"] },
      { type: "tip", text: "💡 ທົບທວນ Journal ທຸກ 2 ອາທິດ — ຈະເຫັນ Pattern ຂອງຄວາມຜິດພາດ ແລະ ປັບປຸງໄດ້" },
    ],
  },
};

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = lessons[params.slug];
  if (!lesson) return notFound();

  return (
    <main
      className="min-h-screen text-white px-5 py-12"
      style={{ background: "#07080f", fontFamily: "'Noto Serif Lao', 'Phetsarath OT', serif" }}
    >
      <div className="max-w-3xl mx-auto">

        {/* BACK */}
        <a href="/blog/how-to-start-forex-laos" className="inline-flex items-center gap-2 text-gray-500 text-sm mb-6 hover:text-yellow-400 transition-colors">
          ← ກັບລາຍການບົດຮຽນ
        </a>

        {/* CHAPTER */}
        <div className="text-xs font-bold mb-3" style={{ color: lesson.chapterColor }}>
          {lesson.chapter}
        </div>

        {/* TITLE */}
        <h1 className="font-black leading-tight mb-3" style={{ fontSize: "clamp(1.6rem, 5vw, 2.5rem)" }}>
          {lesson.title}
        </h1>

        <div className="flex items-center gap-3 text-gray-500 text-sm mb-10">
          <span>🕐 {lesson.time}</span>
          <span>·</span>
          <span>ບົດທີ {params.slug}</span>
        </div>

        {/* CONTENT */}
        <div className="space-y-5">
          {lesson.content.map((block, i) => {
            if (block.type === "heading") return (
              <h2 key={i} className="text-xl font-black text-yellow-400 mt-8">{block.heading}</h2>
            );
            if (block.type === "text") return (
              <p key={i} className="text-gray-300 leading-relaxed" style={{ lineHeight: "2" }}>{block.text}</p>
            );
            if (block.type === "list") return (
              <ul key={i} className="space-y-2">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed"
                    style={{ lineHeight: "1.8" }}>
                    <span className="text-gray-600 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
            if (block.type === "tip") return (
              <div key={i} className="rounded-xl px-5 py-4 text-sm"
                style={{ background: "rgba(250,204,21,0.06)", border: "1px solid rgba(250,204,21,0.2)", color: "#fde68a", lineHeight: "1.8" }}>
                {block.text}
              </div>
            );
            if (block.type === "warning") return (
              <div key={i} className="rounded-xl px-5 py-4 text-sm"
                style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", color: "#fca5a5", lineHeight: "1.8" }}>
                {block.text}
              </div>
            );
            return null;
          })}
        </div>

        {/* NAV BUTTONS */}
        <div className="flex gap-3 mt-12">
          {lesson.prev && (
            <a href={`/blog/how-to-start-forex-laos/${lesson.prev}`}
              className="flex-1 py-4 rounded-xl font-bold text-sm text-center transition-all hover:scale-[1.02]"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}>
              ← ບົດກ່ອນ
            </a>
          )}
          {lesson.next && (
            <a href={`/blog/how-to-start-forex-laos/${lesson.next}`}
              className="flex-1 py-4 rounded-xl font-black text-sm text-center text-black transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #facc15, #f97316)" }}>
              ບົດຕໍ່ໄປ →
            </a>
          )}
        </div>

        {lesson.next === undefined && (
          <div className="mt-8 text-center">
            <div className="text-2xl mb-3">🎉</div>
            <div className="font-black text-xl mb-2">ຮຽນຈົບແລ້ວ!</div>
            <p className="text-gray-400 text-sm mb-6">ຕອນນີ້ເຈົ້າພ້ອມເລີ່ມເທຣດ Forex ແລ້ວ</p>
            <a href="/#brokers"
              className="inline-block px-8 py-4 rounded-2xl font-black text-black text-lg transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #facc15, #f97316)" }}>
              🚀 ເລືອກໂບກເກີ້ເລີຍ
            </a>
          </div>
        )}

      </div>
    </main>
  );
}