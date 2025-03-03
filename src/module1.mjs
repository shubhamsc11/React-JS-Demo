import num, {a, c, d} from "./module2.mjs" // it will access default exported objects/variables
// import {a, c, d} from "./module2.mjs" // it will access named exported variables/objects

console.log(num + '\n' + a, c, d);
// console.log(a, c, d);
