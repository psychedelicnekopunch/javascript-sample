'use strict';

let i = 1.7
console.log(i)
console.log(Number(i))
console.log(Math.round(i))
console.log(Math.ceil(i))
console.log(Math.floor(i))

console.log("=========")

i = 1.4
console.log(i)
console.log(Number(i))
console.log(Math.round(i))
console.log(Math.ceil(i))
console.log(Math.floor(i))


let depth = function (d) {
	let res = 1
	for (i = 0; i < d; i++) {
		res = res * 10
	}
	return res
}

let log = function (i, d) {
	console.log("=========")
	console.log(Math.round(i * d) / d)
	console.log(Math.ceil(i * d) / d)
	console.log(Math.floor(i * d) / d)
}

log(1.748, depth(0))
log(1.748, depth(1))
log(1.748, depth(2))
