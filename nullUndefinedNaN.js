// null
const n = null

console.log(typeof n)

console.log(`(${n}) ? true : false -> ${((n) ? true : false)}`)
console.log(`${n} == null -> ${(n == null)}`)
console.log(`${n} == false -> ${(n == false)}`)
console.log(`${n} == undefined -> ${(n == undefined)}`)
console.log(`isNaN(1 + ${n}) -> ${isNaN(1 + n)}`)


// undefined
const u = undefined
// const v2
let u2

console.log(typeof u)
console.log(typeof u2)

console.log(`(${u}) ? true : false -> ${((u) ? true : false)}`)
console.log(`${u} == null -> ${(u == null)}`)
console.log(`${u} == false -> ${(u == false)}`)
console.log(`${u} == undefined -> ${(u == undefined)}`)
console.log(`isNaN(1 + ${u}) -> ${isNaN(1 + u)}`)


// NaN
const nan = NaN

console.log(typeof nan)

console.log(`(${nan}) ? true : false -> ${((nan) ? true : false)}`)
console.log(`${nan} == null -> ${(nan == null)}`)
console.log(`${nan} == false -> ${(nan == false)}`)
console.log(`${nan} == undefined -> ${(nan == undefined)}`)
console.log(`${nan} == NaN -> ${(nan == NaN)}`)
console.log(`${nan} === NaN -> ${(nan === NaN)}`)
console.log(`isNaN(${nan}) -> ${isNaN(nan)}`)
