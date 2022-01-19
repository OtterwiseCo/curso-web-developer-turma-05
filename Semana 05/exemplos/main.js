import { hello } from "./functions.js";
import soma from "./functions.js";
import { formatDate } from "./formatters.js";

hello();

console.log(soma(2, 2));

console.log(new Date());
console.log(formatDate(new Date()));
