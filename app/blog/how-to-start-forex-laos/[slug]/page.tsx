import { notFound } from "next/navigation";

type Block = {
  type: "text" | "list" | "heading" | "tip" | "warning" | "danger" | "example";
  text?: string;
  heading?: string;
  items?: string[];
};

type Lesson = {
  title: string;
  chapter: string;
  chapterNum: number;
  time: string;
  content: Block[];
  prev?: string;
  next?: string;
};

const lessons: Record<string, Lesson> = {
  "1": {
    title: "Forex ແມ່ນຫຍັງ? ຕະຫຼາດເງິນຕາໂລກ",
    chapter: "ພາກທີ 1: ພື້ນຖານ Forex",
    chapterNum: 1,
    time: "4 ນທ",
    next: "2",
    content: [
      { type: "text", text: "Forex ຫຼື Foreign Exchange ແມ່ນຕະຫຼາດແລກປ່ຽນເງິນຕາທີ່ໃຫຍ່ທີ່ສຸດໃນໂລກ ມີການຊື້ຂາຍກວ່າ $7 ຕື້ຕໍ່ວັນ" },
      { type: "text", text: "ການເທຣດ Forex ໝາຍເຖິງການຊື້ເງິນຕາໜຶ່ງ ແລະ ຂາຍເງິນຕາອີກໜຶ່ງໃນເວລາດຽວກັນ ຕົວຢ່າງ: ຊື້ EUR/USD ໝາຍຄວາມວ່າ ຊື້ EUR ແລະ ຂາຍ USD" },
      { type: "heading", heading: "ຕົວຢ່າງງ່າຍໆ" },
      { type: "example", text: "ເຈົ້າຄິດວ່າ EUR ຈະແຂງຂຶ້ນ → ຊື້ EUR/USD ທີ່ 1.1000 → ລາຄາຂຶ້ນເປັນ 1.1050 → ໄດ້ກໍາໄລ 50 Pip" },
      { type: "list", items: ["ຕະຫຼາດ Forex ເປີດ 24 ຊົ່ວໂມງ 5 ວັນຕໍ່ອາທິດ", "Session ສໍາຄັນ: London, New York, Tokyo, Sydney", "ເວລາທີ່ດີສໍາລັບຄົນລາວ: 14:00-23:00"] },
      { type: "tip", text: "💡 Session London + New York ຊ້ອນກັນ = Volume ສູງ Spread ຕໍ່າ — ເວລາທີ່ດີທີ່ສຸດ!" },
    ],
  },
  "2": {
    title: "Pip, Lot, Spread ແມ່ນຫຍັງ?",
    chapter: "ພາກທີ 1: ພື້ນຖານ Forex",
    chapterNum: 1,
    time: "4 ນທ",
    prev: "1", next: "3",
    content: [
      { type: "heading", heading: "Pip ແມ່ນຫຍັງ?" },
      { type: "text", text: "Pip ຄືໜ່ວຍນ້ອຍທີ່ສຸດຂອງການເຄື່ອນໄຫວລາຄາ — EURUSD: 1 Pip = 0.0001" },
      { type: "example", text: "ລາຄາ 1.1000 → 1.1001 = ຂຶ້ນ 1 Pip · 1 Pip ໃນ 0.1 Lot = $1" },
      { type: "heading", heading: "Lot ແມ່ນຫຍັງ?" },
      { type: "list", items: ["1 Lot = 100,000 ໜ່ວຍ (ໃຫຍ່ — ຫ້າມໃຊ້ສໍາລັບມືໃໝ່!)", "0.1 Lot (Mini) = 10,000 ໜ່ວຍ", "0.01 Lot (Micro) = 1,000 ໜ່ວຍ ✅ ແນະນໍາສໍາລັບມືໃໝ່"] },
      { type: "heading", heading: "Spread ແມ່ນຫຍັງ?" },
      { type: "text", text: "Spread = ຄ່າທໍານຽມໂບກເກີ້ = ສ່ວນຕ່າງ Ask - Bid" },
      { type: "example", text: "Bid 1.1000 / Ask 1.1002 → Spread = 2 Pip = ເສຍ $2 ຕໍ່ 0.1 Lot" },
      { type: "tip", text: "💡 Spread ຕໍ່າ = ປະຢັດເງິນ Exness ແລະ IUX ມີ Spread ຕໍ່ານທີ່ສຸດ!" },
    ],
  },
  "3": {
    title: "Leverage ແມ່ນຫຍັງ? ໃຊ້ແນວໃດໃຫ້ປອດໄພ",
    chapter: "ພາກທີ 1: ພື້ນຖານ Forex",
    chapterNum: 1,
    time: "4 ນທ",
    prev: "2", next: "4",
    content: [
      { type: "text", text: "Leverage ຄືການຢືມເງິນຈາກໂບກເກີ້ ເພື່ອຄວບຄຸມ Position ທີ່ໃຫຍ່ກວ່າທຶນຕົວເອງ" },
      { type: "example", text: "Leverage 1:1000 + ທຶນ $100 → ຄວບຄຸມ $100,000 — ກໍາໄລ/ຂາດທຶນ ຂະຫຍາຍ 1,000 ເທົ່າ!" },
      { type: "list", items: ["ມືໃໝ່: ໃຊ້ 1:10 - 1:50", "ມືກາງ: ໃຊ້ 1:100 - 1:200", "ມືອາຊີບ: 1:500+ (ຕ້ອງ Risk Management ດີ)"] },
      { type: "danger", text: "🚨 Leverage ສູງ = ກໍາໄລໄວ = ຂາດທຶນໄວ ທຶນ $100 + Leverage 1:1000 ລາຄາຂຶ້ນ 0.1% = ໄດ້ $100 / ລາຄາຫຼຸດ 0.1% = ໝົດບັນຊີ!" },
      { type: "tip", text: "💡 ກົດທຳອິດ: ຂາດທຶນໄດ້ສູງສຸດ 1-2% ຂອງ Account ຕໍ່ 1 Trade" },
    ],
  },
  "4": {
    title: "Timeframe ໃດດີ? M5, H1, D1 ຕ່າງກັນແນວໃດ",
    chapter: "ພາກທີ 1: ພື້ນຖານ Forex",
    chapterNum: 1,
    time: "4 ນທ",
    prev: "3", next: "5",
    content: [
      { type: "text", text: "Timeframe ຄືຊ່ວງເວລາຂອງ 1 Candle — M5 = 5 ນາທີ / H1 = 1 ຊົ່ວໂມງ / D1 = 1 ວັນ" },
      { type: "list", items: ["M1-M15: Scalping · ໄວ · Stress ສູງ · ບໍ່ແນະນໍາມືໃໝ່", "H1-H4: Day Trading ✅ ແນະນໍາ · ສົມດຸນ · ມີເວລາຄິດ", "D1-W1: Swing Trading · ໄລຍະຍາວ · ໃຊ້ທຶນໜ້ອຍ"] },
      { type: "tip", text: "💡 ມືໃໝ່ເລີ່ມ H1 ກ່ອນ — ບໍ່ຮ້ອນໃຈ ມີເວລາ Entry ໄດ້ດີ" },
    ],
  },
  "5": {
    title: "ໂບກເກີ້ Forex ແມ່ນຫຍັງ? ເລືອກແນວໃດ",
    chapter: "ພາກທີ 1: ພື້ນຖານ Forex",
    chapterNum: 1,
    time: "5 ນທ",
    prev: "4", next: "6",
    content: [
      { type: "text", text: "ໂບກເກີ້ຄືຕົວກາງລະຫວ່າງ Trader ກັບຕະຫຼາດ — ເລືອກໂບກເກີ້ຜິດ = ເສຍເງິນທັງທີ່ເທຣດດີ!" },
      { type: "list", items: ["✅ Regulated: FCA, ASIC, CySEC", "✅ ຝາກ-ຖອນ BCEL ໄດ້", "✅ Spread ຕໍ່າ", "✅ Support ພາສາລາວ/ໄທ", "✅ ຖອນໄວ ຕໍ່າກວ່າ 24 ຊົ່ວໂມງ"] },
      { type: "tip", text: "💡 ສໍາລັບຄົນລາວ: XM ດີທີ່ສຸດສໍາລັບມືໃໝ່ · Exness ຖອນໄວທີ່ສຸດ · Vantage Cashback ສູງທີ່ສຸດ" },
    ],
  },
  "6": {
    title: "Candlestick ອ່ານກຣາຟເບື້ອງຕົ້ນ",
    chapter: "ພາກທີ 2: ການວິເຄາະຕະຫຼາດ",
    chapterNum: 2,
    time: "5 ນທ",
    prev: "5", next: "7",
    content: [
      { type: "text", text: "Candlestick ສະແດງ 4 ລາຄາໃນ 1 Candle: Open, High, Low, Close" },
      { type: "list", items: ["🟢 ຂຽວ (Bullish) = ປິດສູງກວ່າເປີດ = ຂາຂຶ້ນ", "🔴 ແດງ (Bearish) = ປິດຕໍ່າກວ່າເປີດ = ຂາລົງ", "ໄສ້ຍາວ = ມີການ Reject ລາຄາຢ່າງຮຸນແຮງ"] },
      { type: "heading", heading: "Pattern ສໍາຄັນ 3 ອັນ" },
      { type: "list", items: ["Doji = ລາຄາເປີດ=ປິດ = ຕະຫຼາດລັງເລ ລໍຖ້າທິດທາງ", "Hammer = ໄສ້ລ່າງຍາວ = Signal ຂຶ້ນ (ຢູ່ Support)", "Engulfing = Candle ໜ້ານີ້ກືນ Candle ກ່ອນ = Reversal"] },
      { type: "tip", text: "💡 ຮຽນ 3 Pattern ນີ້ກ່ອນພໍ — ໃຊ້ໄດ້ທຸກ Timeframe" },
    ],
  },
  "7": {
    title: "Support & Resistance ຄືຫຍັງ?",
    chapter: "ພາກທີ 2: ການວິເຄາະຕະຫຼາດ",
    chapterNum: 2,
    time: "5 ນທ",
    prev: "6", next: "8",
    content: [
      { type: "heading", heading: "Support (ແນວຮັບ)" },
      { type: "text", text: "ລະດັບລາຄາທີ່ຕະຫຼາດເຄີຍ Bounce ຂຶ້ນ — ຄືກັບພື້ນ ລາຄາຕໍ່ານລົງຮອດບ່ອນນີ້ແລ້ວດີດຂຶ້ນ" },
      { type: "heading", heading: "Resistance (ແນວຕ້ານ)" },
      { type: "text", text: "ລະດັບລາຄາທີ່ຕະຫຼາດເຄີຍ Reject ລົງ — ຄືກັບເພດານ ລາຄາຂຶ້ນໄປຮອດແລ້ວຕົກລົງ" },
      { type: "example", text: "XAUUSD Support $4,500 → ລາຄາຫຼຸດລົງ $4,500 → Buy · Stop Loss $4,480 · Take Profit $4,560" },
      { type: "tip", text: "💡 ຍິ່ງ level ຖືກ test ຫຼາຍຄັ້ງ = ຍິ່ງແຂງແກ່ນ ແຕ່ຖ້າທໍ່ = Breakout!" },
    ],
  },
  "8": {
    title: "Trend ແມ່ນຫຍັງ? ເທຣດຕາມ Trend",
    chapter: "ພາກທີ 2: ການວິເຄາະຕະຫຼາດ",
    chapterNum: 2,
    time: "5 ນທ",
    prev: "7", next: "9",
    content: [
      { type: "text", text: '"Trend is your friend" — ເທຣດຕາມທິດຕະຫຼາດຈະໄດ້ກໍາໄລງ່າຍກວ່າສວນ Trend ຫຼາຍ' },
      { type: "list", items: ["📈 Uptrend = Higher Highs + Higher Lows → Buy ເທົ່ານັ້ນ", "📉 Downtrend = Lower Highs + Lower Lows → Sell ເທົ່ານັ້ນ", "↔️ Sideways = ລາຄາໄປມາ → ຫຼີກລ້ຽງ ຫຼື Range Trade"] },
      { type: "tip", text: "💡 ໃຊ້ MA200 ຊ່ວຍ: ລາຄາຢູ່ເໜືອ = Uptrend ຊື້ · ຢູ່ໃຕ້ = Downtrend ຂາຍ" },
    ],
  },
  "9": {
    title: "Market Structure: Higher High, Lower Low",
    chapter: "ພາກທີ 2: ການວິເຄາະຕະຫຼາດ",
    chapterNum: 2,
    time: "5 ນທ",
    prev: "8", next: "10",
    content: [
      { type: "text", text: "Market Structure ຄືການອ່ານໂຄງສ້າງຕະຫຼາດຜ່ານ High ແລະ Low ຂອງລາຄາ" },
      { type: "list", items: ["HH (Higher High) = ຈຸດສູງໃໝ່ → Uptrend ດໍາເນີນ", "HL (Higher Low) = ຈຸດຕໍ່ານໃໝ່ຍັງສູງກວ່າເກົ່າ → Uptrend ແຂງ", "LH (Lower High) = ຈຸດສູງໃໝ່ຕໍ່າກວ່າ → ສັນຍານ Downtrend", "LL (Lower Low) = ຈຸດຕໍ່ານໃໝ່ → Downtrend ດໍາເນີນ"] },
      { type: "warning", text: "⚠️ ເມື່ອ Structure ທໍ່ = Trend ກໍາລັງປ່ຽນ → ລໍ Confirm ກ່ອນ Entry" },
    ],
  },
  "10": {
    title: "Indicator ທີ່ຄວນຮູ້: RSI, MACD, MA",
    chapter: "ພາກທີ 2: ການວິເຄາະຕະຫຼາດ",
    chapterNum: 2,
    time: "5 ນທ",
    prev: "9", next: "11",
    content: [
      { type: "heading", heading: "RSI — ວັດຄວາມແຂງ" },
      { type: "text", text: "RSI > 70 = Overbought (ລາຄາອາດຫຼຸດ) · RSI < 30 = Oversold (ລາຄາອາດຂຶ້ນ)" },
      { type: "heading", heading: "MACD — ວັດ Momentum" },
      { type: "text", text: "MACD ຂ້າມ Signal ຂຶ້ນ = Buy Signal · ຂ້າມລົງ = Sell Signal" },
      { type: "heading", heading: "Moving Average (MA)" },
      { type: "text", text: "MA20 ຂ້າມ MA50 ຂຶ້ນ = Golden Cross = Buy · ຂ້າມລົງ = Death Cross = Sell" },
      { type: "warning", text: "⚠️ Indicator ຊ່ວຍ Confirm ເທົ່ານັ້ນ — ຕ້ອງໃຊ້ຄຽງກັບ Price Action ສະເໝີ" },
    ],
  },
  "11": {
    title: "Risk Management ແມ່ນຫຍັງ?",
    chapter: "ພາກທີ 3: ການຄຸ້ມຄອງເງິນ",
    chapterNum: 3,
    time: "5 ນທ",
    prev: "10", next: "12",
    content: [
      { type: "text", text: "Trader ສ່ວນໃຫຍ່ທີ່ລົ້ມເຫຼວ ບໍ່ແມ່ນເພາະ Strategy ຜິດ ແຕ່ເພາະ Risk Management ບໍ່ດີ" },
      { type: "heading", heading: "ກົດ 1% Rule" },
      { type: "example", text: "Account $1,000 → ສ່ຽງໄດ້ສູງສຸດ $10 ຕໍ່ Trade → ຕ້ອງ Margin Out 100 Trade ຕິດກັນ ຈຶ່ງໝົດ!" },
      { type: "list", items: ["ຕັ້ງ Stop Loss ທຸກ Trade ຫ້າມຂ້າມ!", "ຢ່າ Revenge Trade ຫຼັງຂາດທຶນ", "ຢ່າ Oversize ເພາະໝັ້ນໃຈ", "ບັນທຶກ Journal ທຸກ Trade"] },
      { type: "tip", text: "💡 Trader ດີ ≠ ຊະນະທຸກ Trade · Trader ດີ = ຂາດທຶນໜ້ອຍ ກໍາໄລຫຼາຍ" },
    ],
  },
  "12": {
    title: "Stop Loss & Take Profit ຕັ້ງຢ່າງຖືກຕ້ອງ",
    chapter: "ພາກທີ 3: ການຄຸ້ມຄອງເງິນ",
    chapterNum: 3,
    time: "5 ນທ",
    prev: "11", next: "13",
    content: [
      { type: "heading", heading: "Stop Loss (SL)" },
      { type: "text", text: "ລະດັບລາຄາທີ່ລະບົບປິດ Trade ໂດຍອັດຕະໂນມັດ ເພື່ອຈໍາກັດຂາດທຶນ" },
      { type: "heading", heading: "Take Profit (TP)" },
      { type: "text", text: "ລະດັບລາຄາທີ່ລະບົບປິດ Trade ໂດຍອັດຕະໂນມັດ ເພື່ອລັອກກໍາໄລ" },
      { type: "heading", heading: "Risk:Reward Ratio (RR)" },
      { type: "example", text: "RR 1:2 = ສ່ຽງ 10 Pip → ກໍາໄລ 20 Pip · Win Rate 40% ກໍ່ຍັງໄດ້ກໍາໄລໃນໄລຍະຍາວ!" },
      { type: "danger", text: "🚨 ຢ່າ Move SL ໃຫ້ໄກຂຶ້ນ ເມື່ອ Trade ຂາດທຶນ — ນີ້ຄືວິທີທີ່ 1 ທີ່ Trader ໝົດ Account" },
    ],
  },
  "13": {
    title: "Money Management Plan",
    chapter: "ພາກທີ 3: ການຄຸ້ມຄອງເງິນ",
    chapterNum: 3,
    time: "5 ນທ",
    prev: "12", next: "14",
    content: [
      { type: "text", text: "Money Management Plan ຄືກົດທີ່ຕ້ອງກໍານົດ ແລ້ວຕິດໄວ້ກ່ອນ Open Trade ທຸກຄັ້ງ" },
      { type: "list", items: ["ສ່ຽງຕໍ່ Trade: ສູງສຸດ 1-2%", "Trade ຕໍ່ວັນ: ສູງສຸດ 3-5 ອັນ", "ສ່ຽງລວມຕໍ່ວັນ: ສູງສຸດ 5%", "ຂາດທຶນ 3 Trade ຕິດ = ຢຸດ ລໍວັນໃໝ່"] },
      { type: "tip", text: "💡 ຂຽນ Plan ໃສ່ Post-it ຕິດ Monitor — ລະລືມໄດ້ງ່າຍຕອນ Emotion ສູງ!" },
    ],
  },
  "14": {
    title: "Drawdown ແມ່ນຫຍັງ?",
    chapter: "ພາກທີ 3: ການຄຸ້ມຄອງເງິນ",
    chapterNum: 3,
    time: "5 ນທ",
    prev: "13", next: "15",
    content: [
      { type: "text", text: "Drawdown = ການຫຼຸດລົງຂອງ Account ຈາກຈຸດສູງສຸດ" },
      { type: "example", text: "Account $1,000 → ຂາດທຶນ → ເຫຼືອ $800 → Drawdown = 20%" },
      { type: "list", items: ["Drawdown 10-15%: ປົກກະຕິ ທົບທວນ Strategy", "Drawdown 20%: ຄ່ອນຂ້າງໜັກ ຫຼຸດ Lot Size", "Drawdown 30%+: ຢຸດເທຣດທັນທີ ທົບທວນໃຫຍ່"] },
      { type: "danger", text: "🚨 Recovery ຍາກກວ່າທີ່ຄິດ: ຂາດທຶນ 50% ຕ້ອງໄດ້ 100% ກໍາໄລ ຈຶ່ງກັບມາທຶນເດີມ!" },
    ],
  },
  "15": {
    title: "Position Sizing: ໃຊ້ Lot ຂະໜາດໃດ",
    chapter: "ພາກທີ 3: ການຄຸ້ມຄອງເງິນ",
    chapterNum: 3,
    time: "4 ນທ",
    prev: "14", next: "16",
    content: [
      { type: "heading", heading: "ສູດຄໍານວນ Lot Size" },
      { type: "example", text: "Account $500 · Risk 1% = $5 · SL 20 Pip · Pip Value $1 → Lot = $5 ÷ $20 = 0.25 Lot" },
      { type: "list", items: ["Account $100: ໃຊ້ 0.01 Lot ເທົ່ານັ້ນ", "Account $500: ໃຊ້ 0.05-0.1 Lot", "Account $1,000: ໃຊ້ 0.1-0.2 Lot"] },
      { type: "tip", text: "💡 ໃຊ້ Lot Size Calculator ໃນ XM ຫຼື Exness ຊ່ວຍຄໍານວນ — ງ່າຍ ຖືກຕ້ອງ 100%" },
    ],
  },
  "16": {
    title: "ເປີດບັນຊີ Demo ຄັ້ງທຳອິດ",
    chapter: "ພາກທີ 4: ເລີ່ມເທຣດຈິງ",
    chapterNum: 4,
    time: "4 ນທ",
    prev: "15", next: "17",
    content: [
      { type: "text", text: "Demo Account = ເທຣດດ້ວຍເງິນສົມມຸດ — ບໍ່ສ່ຽງ ແຕ່ Condition ຄືຈິງທຸກຢ່າງ" },
      { type: "list", items: ["1. ໄປ xm.com ສະໝັກ + Verify Email", "2. ເລືອກ Open Demo Account", "3. ດາວໂຫຼດ MT4 ຫຼື MT5", "4. Login ດ້ວຍ Demo Credentials", "5. ເລີ່ມຝຶກໄດ້ທັນທີ"] },
      { type: "tip", text: "💡 ຝຶກ Demo ຢ່າງໜ້ອຍ 3 ເດືອນ ໃຫ້ Consistent ກ່ອນ ຫ້າມຮ້ອນໃຈໄປ Live!" },
    ],
  },
  "17": {
    title: "ຝາກເງິນ BCEL ເຂົ້າ Forex",
    chapter: "ພາກທີ 4: ເລີ່ມເທຣດຈິງ",
    chapterNum: 4,
    time: "4 ນທ",
    prev: "16", next: "18",
    content: [
      { type: "list", items: ["1. Login ໂບກ → Deposit → Local Bank", "2. ເລືອກ Laos / BCEL", "3. ໃສ່ຈໍານວນ USD", "4. ໂອນ BCEL One ຫຼື Counter", "5. Upload Slip → ເງິນເຂົ້າ 15-60 ນາທີ"] },
      { type: "tip", text: "💡 XM ຝາກ BCEL ງ່າຍທີ່ສຸດ · Exness ຖອນໄວທີ່ສຸດ Instant 24/7" },
    ],
  },
  "18": {
    title: "ວິທີເທຣດ EURUSD ຄັ້ງທຳອິດ",
    chapter: "ພາກທີ 4: ເລີ່ມເທຣດຈິງ",
    chapterNum: 4,
    time: "5 ນທ",
    prev: "17", next: "19",
    content: [
      { type: "list", items: ["1. MT4/MT5 → ຊອກ EURUSD", "2. ກົດຂວາ → New Order", "3. Volume: 0.01 (Micro)", "4. ຕັ້ງ Stop Loss + Take Profit", "5. ກົດ Buy ຫຼື Sell"] },
      { type: "danger", text: "🚨 ຢ່າລືມ Stop Loss ທຸກຄັ້ງ — Trade ທີ່ບໍ່ມີ SL = Gambling ບໍ່ແມ່ນ Trading!" },
    ],
  },
  "19": {
    title: "Backtesting ແມ່ນຫຍັງ?",
    chapter: "ພາກທີ 4: ເລີ່ມເທຣດຈິງ",
    chapterNum: 4,
    time: "5 ນທ",
    prev: "18", next: "20",
    content: [
      { type: "text", text: "Backtesting = ທົດສອບ Strategy ໂດຍໃຊ້ຂໍ້ມູນລາຄາໃນອະດີດ ກ່ອນໃຊ້ເງິນຈິງ" },
      { type: "list", items: ["ທົດສອບ 100-200 Trade ໃນອະດີດ", "ບັນທຶກ Win Rate, RR, Max Drawdown", "Win Rate > 50% + RR > 1:1.5 = Strategy ໃຊ້ໄດ້", "ທົດລອງ Demo 1 ເດືອນ ກ່ອນ Live"] },
      { type: "tip", text: "💡 MT4 ມີ Strategy Tester ຟຣີ — ໃຊ້ Backtest ໄດ້ທັນທີ" },
    ],
  },
  "20": {
    title: "Trading Journal: ຈົດບັນທຶກ Trade",
    chapter: "ພາກທີ 4: ເລີ່ມເທຣດຈິງ",
    chapterNum: 4,
    time: "4 ນທ",
    prev: "19", next: "21",
    content: [
      { type: "text", text: "Trading Journal = ບັນທຶກທຸກ Trade — Trader ອາຊີບທຸກຄົນຈົດ Journal" },
      { type: "list", items: ["ວັນທີ + ເວລາ", "ຄູ່ເງິນ + ທິດ (Buy/Sell)", "Lot · Entry · SL · TP", "ຜົນ: ກໍາໄລ/ຂາດທຶນ", "ເຫດຜົນ Entry + ຄວາມຮູ້ສຶກ"] },
      { type: "tip", text: "💡 ທົບທວນ Journal ທຸກ 2 ອາທິດ — ຈະເຫັນ Pattern ຂໍ້ຜິດພາດ ແລະ ແກ້ໄດ້!" },
    ],
  },

  // ====== ພາກທີ 5: ຮູ້ເລິກກ່ອນເສຍເງິນ ======

  "21": {
    title: "Balance, Equity, Margin, Free Margin ຄືຫຍັງ?",
    chapter: "ພາກທີ 5: ຮູ້ເລິກກ່ອນເສຍເງິນ",
    chapterNum: 5,
    time: "6 ນທ",
    prev: "20", next: "22",
    content: [
      { type: "text", text: "4 ຕົວເລກໃນ MT4/MT5 ທີ່ Trader ທຸກຄົນຕ້ອງເຂົ້າໃຈ — ຂາດຕົວໃດໜຶ່ງ = ໝົດ Account ໄດ້ໂດຍບໍ່ຮູ້ຕົວ!" },
      { type: "heading", heading: "Balance" },
      { type: "text", text: "Balance = ເງິນໃນ Account ຕອນບໍ່ມີ Trade ເປີດ · ຈະອັບເດດຫຼັງ Close Trade ເທົ່ານັ້ນ" },
      { type: "heading", heading: "Equity" },
      { type: "text", text: "Equity = Balance + ກໍາໄລ/ຂາດທຶນ Floating ຂອງ Trade ທີ່ເປີດຢູ່ · ອັບເດດ Real-time" },
      { type: "example", text: "Balance $1,000 · ກໍາລັງ Buy XAUUSD ຂາດທຶນ $50 → Equity = $950" },
      { type: "heading", heading: "Margin" },
      { type: "text", text: "Margin = ເງິນທີ່ຖືກລັອກໄວ້ຄໍ້າປະກັນ Trade ທີ່ເປີດ — ໃຊ້ບໍ່ໄດ້ຕອນ Trade ຍັງເປີດ" },
      { type: "example", text: "Buy 0.1 Lot XAUUSD Leverage 1:100 ລາຄາ $4,500 → Margin = $4,500 × 0.1 ÷ 100 = $45" },
      { type: "heading", heading: "Free Margin" },
      { type: "text", text: "Free Margin = Equity - Margin = ເງິນທີ່ຍັງໃຊ້ Open Trade ໃໝ່ໄດ້" },
      { type: "danger", text: "🚨 Free Margin ຕໍ່າ = ໃກ້ Margin Call! ຖ້າ Free Margin = 0 → ບໍ່ສາມາດ Open Trade ໃໝ່ໄດ້" },
      { type: "tip", text: "💡 ໃຊ້ Equity ເປັນ Reference ສໍາລັບ Account ຕົວຈິງ ບໍ່ແມ່ນ Balance" },
    ],
  },
  "22": {
    title: "Margin Level ແລະ Stop Out ຄືຫຍັງ?",
    chapter: "ພາກທີ 5: ຮູ້ເລິກກ່ອນເສຍເງິນ",
    chapterNum: 5,
    time: "6 ນທ",
    prev: "21", next: "23",
    content: [
      { type: "heading", heading: "Margin Level" },
      { type: "text", text: "Margin Level = (Equity ÷ Margin) × 100% · ຕ່ຳຂຶ້ນ = ອັນຕະລາຍຂຶ້ນ" },
      { type: "example", text: "Equity $200 · Margin $100 → Margin Level = 200% (ຍັງ OK) · Equity $100 → Level = 100% (ເລີ່ມອັນຕະລາຍ)" },
      { type: "heading", heading: "Margin Call" },
      { type: "text", text: "Margin Call = ໂບກເກີ້ແຈ້ງເຕືອນວ່າ Margin Level ຕໍ່າເກີນ — ໃຫ້ຝາກເງິນເພີ່ມ ຫຼື ປິດ Trade" },
      { type: "heading", heading: "Stop Out" },
      { type: "text", text: "Stop Out = ໂບກເກີ້ປິດ Trade ໂດຍອັດຕະໂນມັດ ເມື່ອ Margin Level ຕໍ່າຮອດລະດັບທີ່ກໍານົດ" },
      { type: "danger", text: "🚨 ສ່ວນໃຫຍ່ Margin Call = 100% · Stop Out = 50% ແຕ່ບາງໂບກໃຫ້ Stop Out ທີ່ 20% ເທົ່ານັ້ນ!" },
      { type: "tip", text: "💡 ຮັກສາ Margin Level ໃຫ້ຢູ່ເໜືອ 200% ສະເໝີ — ຢ່າ Open Trade ຫຼາຍຈົນ Margin Level ຕໍ່າ" },
    ],
  },
  "23": {
    title: "Stop Out 20% — ໂບກຫຼອກ ຫຼື ປົກກະຕິ?",
    chapter: "ພາກທີ 5: ຮູ້ເລິກກ່ອນເສຍເງິນ",
    chapterNum: 5,
    time: "5 ນທ",
    prev: "22", next: "24",
    content: [
      { type: "text", text: "ໂບກເກີ້ຕ່າງກໍານົດ Stop Out Level ຕ່າງກັນ — ຫ້າມສົມມຸດວ່າທຸກໂບກ Stop Out ທີ່ 50%" },
      { type: "heading", heading: "ຕາຕະລາງ Stop Out ແຕ່ລະໂບກ" },
      { type: "list", items: ["XM: Margin Call 50% · Stop Out 20%", "Exness: Stop Out 0% (ໃຫ້ Negative Balance Protection)", "Vantage: Stop Out 50%", "IUX: Stop Out 50%", "HFM: Margin Call 100% · Stop Out 50%"] },
      { type: "example", text: "Account $1,000 · XM Stop Out 20% → ເມື່ອ Equity ຫຼຸດເຫຼືອ $200 → ລະບົບປິດ Trade ທັງໝົດ!" },
      { type: "warning", text: "⚠️ Stop Out 20% ຂອງ XM ບໍ່ແມ່ນຫຼອກລວງ — ແມ່ນ Policy ທີ່ຂຽນໃນ T&C · ຕ້ອງອ່ານກ່ອນ!" },
      { type: "tip", text: "💡 ຮຽນ Stop Out Level ຂອງໂບກທີ່ໃຊ້ ກ່ອນ Deposit ທຸກຄັ້ງ" },
    ],
  },
  "24": {
    title: "Buy Ask / Sell Bid — ຄົນສ່ວນໃຫຍ່ຍັງບໍ່ຮູ້!",
    chapter: "ພາກທີ 5: ຮູ້ເລິກກ່ອນເສຍເງິນ",
    chapterNum: 5,
    time: "5 ນທ",
    prev: "23", next: "25",
    content: [
      { type: "text", text: "ໃນ Forex ມີ 2 ລາຄາສະເໝີ: Bid ແລະ Ask · ຫຼາຍຄົນ Confuse ແລ້ວ Entry ຜິດລາຄາ!" },
      { type: "heading", heading: "Bid vs Ask" },
      { type: "list", items: ["Bid = ລາຄາທີ່ຕະຫຼາດ 'ຊື້' ຈາກເຈົ້າ = ລາຄາ Sell ຂອງເຈົ້າ", "Ask = ລາຄາທີ່ຕະຫຼາດ 'ຂາຍ' ໃຫ້ເຈົ້າ = ລາຄາ Buy ຂອງເຈົ້າ", "Spread = Ask - Bid"] },
      { type: "example", text: "EURUSD: Bid 1.1000 / Ask 1.1002 → ຖ້າ Buy ເຂົ້າທີ່ 1.1002 · ຖ້າ Sell ເຂົ້າທີ່ 1.1000 · ທໍາໄດ້ເສຍ 2 Pip ທັນທີ!" },
      { type: "heading", heading: "ຜົນກະທົບຕໍ່ Stop Loss" },
      { type: "text", text: "ເມື່ອ Buy: SL ຖືກ Trigger ດ້ວຍ Bid · ເມື່ອ Sell: SL ຖືກ Trigger ດ້ວຍ Ask" },
      { type: "example", text: "Buy EURUSD Entry 1.1002 SL 1.0980 → SL ຈິງ = 22 Pip ບໍ່ແມ່ນ 20 Pip (ຕ່າງ 2 Pip = Spread)" },
      { type: "danger", text: "🚨 ຄົນສ່ວນໃຫຍ່ຕັ້ງ SL ຜິດ 2-3 Pip ທຸກ Trade → ຂາດທຶນຫຼາຍກວ່າຄາດ!" },
    ],
  },
  "25": {
    title: "Slippage ແລະ Gap ຄືຫຍັງ?",
    chapter: "ພາກທີ 5: ຮູ້ເລິກກ່ອນເສຍເງິນ",
    chapterNum: 5,
    time: "5 ນທ",
    prev: "24", next: "26",
    content: [
      { type: "heading", heading: "Slippage" },
      { type: "text", text: "Slippage = ລາຄາ Execute ຈິງ ≠ ລາຄາທີ່ສັ່ງ · ເກີດໃນເວລາ Volatility ສູງ ຫຼື Liquidity ຕໍ່າ" },
      { type: "example", text: "ສັ່ງ Buy XAUUSD ທີ່ $4,500 · ລະບົບ Execute ທີ່ $4,503 = Slippage 3 Pip = ເສຍ $3 ຕໍ່ 0.1 Lot" },
      { type: "list", items: ["ເກີດຫຼາຍໃນ: ຂ່າວໃຫຍ່, ຕອນເປີດ/ປິດ Market, ໂບກ B-Book", "ຫຼຸດ Slippage: ໃຊ້ Market Execution · ໂບກ A-Book · ຫຼີກລ້ຽງ Scalp ຕອນຂ່າວ"] },
      { type: "heading", heading: "Gap" },
      { type: "text", text: "Gap = ລາຄາ 'ກ້າວຂ້າມ' ໂດຍບໍ່ Trade ຜ່ານ ລາຄາລະຫວ່າງນັ້ນ · ເກີດຫຼາຍຕອນ Weekend Open" },
      { type: "example", text: "XAUUSD ປິດ Friday $4,500 · ເປີດ Monday $4,450 = Gap ລົງ $50 · SL ທີ່ $4,470 ຈະ Execute ທີ່ $4,450 ບໍ່ແມ່ນ $4,470!" },
      { type: "danger", text: "🚨 ຢ່າ Hold Trade ຂ້າມ Weekend ໂດຍບໍ່ SL ທີ່ຫ່າງ — Gap ສາມາດໝົດ Account ຄືນດຽວ!" },
    ],
  },
  "26": {
    title: "Instant vs Market Execution ຕ່າງກັນແນວໃດ?",
    chapter: "ພາກທີ 5: ຮູ້ເລິກກ່ອນເສຍເງິນ",
    chapterNum: 5,
    time: "5 ນທ",
    prev: "25", next: "27",
    content: [
      { type: "heading", heading: "Instant Execution" },
      { type: "text", text: "ໂບກ Execute ໃນລາຄາທີ່ເຈົ້າສັ່ງ ຫຼື Requote (ຖາມລາຄາໃໝ່) ຖ້າລາຄາປ່ຽນໄປ" },
      { type: "list", items: ["✅ ລາຄາ Execute ທີ່ຕ້ອງການ ຫຼື Requote", "❌ ອາດ Requote ຫຼາຍຄັ້ງ ທໍາໃຫ້ Miss Entry", "ໃຊ້ກັບ: Fixed Spread Account, ໂບກ B-Book"] },
      { type: "heading", heading: "Market Execution" },
      { type: "text", text: "ໂບກ Execute ໃນລາຄາຕະຫຼາດຈິງ ≠ ລາຄາທີ່ສັ່ງ ອາດ Slippage ແຕ່ Execute ທັນທີ" },
      { type: "list", items: ["✅ Execute ໄວ ບໍ່ Requote", "✅ ເໝາະ Scalping ແລະ News Trading", "❌ ອາດ Slippage ໃນຕອນ Volatility ສູງ"] },
      { type: "tip", text: "💡 Market Execution ດີກວ່າສໍາລັບ Active Trader · Instant ດີກວ່າສໍາລັບ Swing Trader ທີ່ຕ້ອງການລາຄາແນ່ນອນ" },
    ],
  },
  "27": {
    title: "A-Book vs B-Book vs Market Maker",
    chapter: "ພາກທີ 5: ຮູ້ເລິກກ່ອນເສຍເງິນ",
    chapterNum: 5,
    time: "6 ນທ",
    prev: "26", next: "28",
    content: [
      { type: "text", text: "ນີ້ຄືຄວາມລັບທີ່ Trader ສ່ວນໃຫຍ່ບໍ່ຮູ້ — ໂບກເກີ້ 'ຫາກິນ' ແນວໃດ?" },
      { type: "heading", heading: "A-Book (STP/ECN)" },
      { type: "text", text: "ໂບກສົ່ງ Order ຂອງເຈົ້າໄປ Liquidity Provider ຈິງ — ໂບກໄດ້ Commission/Spread · ບໍ່ conflict ກັບ Trader" },
      { type: "list", items: ["✅ ໂບກໄດ້ເງິນຈາກ Spread/Commission ເທົ່ານັ້ນ", "✅ ເຈົ້າ Profit ໄດ້ ໂບກກໍ່ໄດ້ · ບໍ່ conflict", "✅ Exness, Vantage, IUX ໃຊ້ A-Book ເປັນສ່ວນໃຫຍ່"] },
      { type: "heading", heading: "B-Book (Market Maker)" },
      { type: "text", text: "ໂບກ 'ຮັບ' Order ຂອງເຈົ້າເອງ — ເຈົ້າຂາດທຶນ = ໂບກໄດ້ກໍາໄລ · ເຈົ້າ Profit = ໂບກຂາດທຶນ" },
      { type: "list", items: ["❌ ໂບກ B-Book ມີ Incentive ໃຫ້ Trader ຂາດທຶນ", "❌ ອາດ Requote, Slippage, Spike ທີ່ Trigger SL", "⚠️ ໂບກ B-Book ຈໍານວນຫຼາຍ — Spread ຕໍ່າ ແຕ່ Execution ຊ້າ"] },
      { type: "heading", heading: "Hybrid (A+B Book)" },
      { type: "text", text: "ໂບກສ່ວນໃຫຍ່ໃຊ້ Hybrid: Trader ທີ່ຊະນະ = ສ່ງ A-Book · Trader ທີ່ຂາດທຶນ = ຖື B-Book" },
      { type: "tip", text: "💡 ໃຊ້ ECN/STP Account ຈາກໂບກ Regulated ຊັ້ນ 1 (FCA/ASIC) = ໂອກາດໄດ້ A-Book ສູງກວ່າ" },
    ],
  },
  "28": {
    title: "Dealing Desk vs Non-Dealing Desk",
    chapter: "ພາກທີ 5: ຮູ້ເລິກກ່ອນເສຍເງິນ",
    chapterNum: 5,
    time: "5 ນທ",
    prev: "27", next: "29",
    content: [
      { type: "heading", heading: "Dealing Desk (DD)" },
      { type: "text", text: "ມີ 'Dealer' ຄົນຮັບ Order ຂອງເຈົ້າ = Market Maker = B-Book" },
      { type: "list", items: ["❌ ອາດ Requote ໄດ້ຕາມໃຈ", "❌ ອາດ Delay Execution ໃນ Volatility ສູງ", "⚠️ ເໝາະ Beginner ທີ່ Trade Lot ນ້ອຍ"] },
      { type: "heading", heading: "Non-Dealing Desk (NDD)" },
      { type: "text", text: "ໂບກ Route Order ໂດຍກົງໄປ LP · ບໍ່ມີ Dealer ແຊກ = STP ຫຼື ECN = A-Book" },
      { type: "list", items: ["✅ ບໍ່ Requote · Execution ໄວ", "✅ Spread ລອຍ (Variable) ຕາມຕະຫຼາດ", "✅ ໂປ່ງໃສ · ເໝາະ Active Trader"] },
      { type: "example", text: "Exness Zero Account = ECN (NDD) · XM Standard = DD (ສ່ວນໃຫຍ່ B-Book) ·  XM Zero = ECN (NDD)" },
      { type: "tip", text: "💡 ເລືອກ NDD/ECN Account ສໍາລັບ Scalping ແລະ News Trading ສະເໝີ" },
    ],
  },
  "29": {
    title: "Swap, Negative Balance Protection ຄືຫຍັງ?",
    chapter: "ພາກທີ 5: ຮູ້ເລິກກ່ອນເສຍເງິນ",
    chapterNum: 5,
    time: "5 ນທ",
    prev: "28", next: "30",
    content: [
      { type: "heading", heading: "Swap (Overnight Fee)" },
      { type: "text", text: "Swap = ຄ່າ 'ດ້ານຄືນ' ທີ່ເກີດເມື່ອ Hold Trade ຂ້າມ 00:00 (Server Time) · ອາດ + ຫຼື - ຂຶ້ນກັບຄູ່ເງິນ" },
      { type: "example", text: "Buy EURUSD Hold 7 ຄືນ · Swap = -$5 ຕໍ່ຄືນ × 7 = -$35 ຫັກຈາກ Account ໂດຍອັດຕະໂນມັດ!" },
      { type: "list", items: ["ວັນພຸດ = Swap x3 (ຊົດເຊີຍ Weekend)", "ຕ້ອງການ Swap-Free? ເລືອກ Islamic Account", "XAUUSD Swap ສູງ — ຢ່າ Hold ຂ້າມຄືນຫຼາຍ"] },
      { type: "heading", heading: "Negative Balance Protection (NBP)" },
      { type: "text", text: "NBP = ໂບກຮັບປະກັນວ່າ Account ຂອງເຈົ້າຈະບໍ່ຕໍ່າກວ່າ $0 ເຖິງແມ່ນ Gap ຫຼື Flash Crash" },
      { type: "example", text: "SNB Event 2015: CHF/JPY ຫຼຸດ 30% ໃນ 1 ວິ · Trader ທີ່ບໍ່ມີ NBP ຕິດໜີ້ໂບກ $100,000+ · Trader ທີ່ມີ NBP ຂາດທຶນ Max = ເງິນໃນ Account" },
      { type: "danger", text: "🚨 ບໍ່ແມ່ນທຸກໂບກມີ NBP — ກວດ T&C ກ່ອນ Deposit ທຸກຄັ້ງ! Exness ແລະ XM ມີ NBP" },
    ],
  },
  "30": {
    title: "Liquidity ແລະ Market Volatility ຄືຫຍັງ?",
    chapter: "ພາກທີ 5: ຮູ້ເລິກກ່ອນເສຍເງິນ",
    chapterNum: 5,
    time: "6 ນທ",
    prev: "29",
    content: [
      { type: "heading", heading: "Liquidity (ສະພາບຄ່ອງ)" },
      { type: "text", text: "Liquidity = ຄວາມສາມາດ Buy/Sell ໃນລາຄາທີ່ຕ້ອງການ ໂດຍບໍ່ Slippage ຫຼາຍ" },
      { type: "list", items: ["Liquidity ສູງ = Spread ຕໍ່າ · Slippage ໜ້ອຍ · Execute ໄວ", "Liquidity ຕໍ່າ = Spread ຊ່ວງ · Slippage ຫຼາຍ · Execute ຊ້າ", "EURUSD, XAUUSD = Liquidity ສູງທີ່ສຸດ"] },
      { type: "example", text: "ຕອນ Liquidity ຕໍ່າ (ເຊົ້າ Tokyo ຫຼື Weekend) ກ່ອນ Open = Spread XAUUSD ຈາກ 0.3 → 3-5 Pip!" },
      { type: "heading", heading: "Market Volatility (ຄວາມຜັນຜວນ)" },
      { type: "text", text: "Volatility = ຄວາມໄວ ແລະ ຂະໜາດຂອງການເຄື່ອນໄຫວລາຄາ" },
      { type: "list", items: ["Volatility ສູງ = ກໍາໄລໄດ້ຫຼາຍ ແຕ່ SL ຖືກ Hit ຫຼາຍ", "Volatility ຕໍ່າ = ຂຶ້ນ-ລົງໜ້ອຍ Strategy ບາງອັນໃຊ້ບໍ່ໄດ້", "ຂ່າວໃຫຍ່ NFP, CPI, Fed = Volatility ສູງ"] },
      { type: "warning", text: "⚠️ ໃນ Volatility ສູງ: Spread ກວ້າງ, Slippage ຫຼາຍ, SL ຖືກ Trigger ງ່າຍ — ຫຼຸດ Lot Size ລົງ 50%!" },
      { type: "tip", text: "💡 ໃຊ້ Economic Calendar (forexfactory.com) ກວດ Volatility ລ່ວງໜ້າ ແລ້ວວາງແຜນ Trade ໃຫ້ດີ!" },
    ],
  },
};

const chapterColors: Record<number, string> = {
  1: "#60a5fa",
  2: "#facc15",
  3: "#4ade80",
  4: "#fb923c",
  5: "#f472b6",
};

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = lessons[slug];
  if (!lesson) return notFound();

  const color = chapterColors[lesson.chapterNum] || "#facc15";

  return (
    <main className="min-h-screen text-white px-5 py-12"
      style={{ background: "#07080f", fontFamily: "'Noto Serif Lao', 'Phetsarath OT', serif" }}>
      <div className="max-w-3xl mx-auto">

        {/* BACK */}
        <a href="/blog/how-to-start-forex-laos"
          className="inline-flex items-center gap-2 text-gray-500 text-sm mb-6 hover:text-yellow-400 transition-colors">
          ← ກັບລາຍການບົດຮຽນ
        </a>

        {/* CHAPTER BADGE */}
        <div className="text-xs font-bold mb-3" style={{ color }}>
          {lesson.chapter}
        </div>

        {/* TITLE */}
        <h1 className="font-black leading-tight mb-3" style={{ fontSize: "clamp(1.6rem, 5vw, 2.5rem)" }}>
          {lesson.title}
        </h1>

        <div className="flex items-center gap-3 text-gray-500 text-sm mb-10">
          <span>🕐 {lesson.time}</span>
          <span>·</span>
          <span>ບົດທີ {slug} / 30</span>
        </div>

        {/* CONTENT */}
        <div className="space-y-5">
          {lesson.content.map((block, i) => {
            if (block.type === "heading") return (
              <h2 key={i} className="text-xl font-black mt-8" style={{ color }}>{block.heading}</h2>
            );
            if (block.type === "text") return (
              <p key={i} className="text-gray-300 text-sm" style={{ lineHeight: "2" }}>{block.text}</p>
            );
            if (block.type === "list") return (
              <ul key={i} className="space-y-2">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex gap-3 text-gray-300 text-sm" style={{ lineHeight: "1.8" }}>
                    <span className="flex-shrink-0" style={{ color }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
            if (block.type === "example") return (
              <div key={i} className="rounded-xl px-5 py-4 text-sm"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#e2e8f0", lineHeight: "1.8" }}>
                📝 {block.text}
              </div>
            );
            if (block.type === "tip") return (
              <div key={i} className="rounded-xl px-5 py-4 text-sm"
                style={{ background: "rgba(250,204,21,0.06)", border: "1px solid rgba(250,204,21,0.2)", color: "#fde68a", lineHeight: "1.8" }}>
                {block.text}
              </div>
            );
            if (block.type === "warning") return (
              <div key={i} className="rounded-xl px-5 py-4 text-sm"
                style={{ background: "rgba(251,146,60,0.06)", border: "1px solid rgba(251,146,60,0.25)", color: "#fed7aa", lineHeight: "1.8" }}>
                {block.text}
              </div>
            );
            if (block.type === "danger") return (
              <div key={i} className="rounded-xl px-5 py-4 text-sm"
                style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.25)", color: "#fca5a5", lineHeight: "1.8" }}>
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

        {/* FINISH */}
        {!lesson.next && (
          <div className="mt-8 text-center">
            <div className="text-4xl mb-3">🎓</div>
            <div className="font-black text-2xl mb-2">ຮຽນຈົບ 30 ບົດແລ້ວ!</div>
            <p className="text-gray-400 text-sm mb-6">ຕອນນີ້ເຈົ້າຮູ້ Forex ເລິກກວ່າ Trader 90% ໃນລາວ!</p>
            <a href="/#brokers"
              className="inline-block px-8 py-4 rounded-2xl font-black text-black text-lg transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, #facc15, #f97316)" }}>
              🚀 ເລືອກໂບກເກີ້ ເລີ່ມເທຣດ!
            </a>
          </div>
        )}

      </div>
    </main>
  );
}