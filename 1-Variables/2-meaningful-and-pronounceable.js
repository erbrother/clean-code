/** Meaningful */
const data = { id: 1, name: "John" }; // ❌ bad
const user = { id: 1, name: "John" }; // ✅ good
const customer = { id: 1, name: "John" }; // ✅ good

/** Pronounceable */
const yyyymmdd = moment().format("YYYY/MM/DD"); // 👎 bad

const currentDate = moment(); // ✅  good
// 在需要使用的地方再进行格式化
currentDate.format("YYYY/MM/DD"); // ✅  good

/** Detailed */
const days = 12; // ❌ bad
const time = 3785; // ❌ bad

const daysSinceCreation = 12; // ✅ good
const daysSinceEventCreation = 12; // ✅ good
const timeSinceLastCheck = 3785; // ✅ good

/** Boolean */
// is, are, should, has, etc...
let loading = true; // ❌ bad
let productsInCart = false; // ❌ bad

let isLoading = true; // ✅ good
let hasProductsInCart = false; // ✅ good
