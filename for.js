'use strict';

// for いろいろ

const arr = ['a', 'b', 'c', 'd', 'e']

console.log('----- Array.prototype.forEach() -----')
arr.forEach((v, i) => {
	console.log(`${i}: ${v}`)
})

console.log('----- Array.prototype.entries() -----')
for (const [i, v] of arr.entries()) {
	console.log(`${i}: ${v}`)
}

console.log('----- Array.prototype.values() -----')
for (const v of arr.values()) {
	console.log(v)
}

console.log('----- Array.prototype.keys() -----')
for (const i of arr.keys()) {
	console.log(`${i}: ${arr[i]}`)
}



const obj = {
	a: 'aaa',
	b: 'bbb',
	c: 'ccc',
	d: 'ddd',
	e: 'eee'
}


console.log('----- Object.entries() -----')

for (const [k, v] of Object.entries(obj)) {
	console.log(`${k}: ${v}`)
}


console.log('----- Object.values() -----')
for (const v of Object.values(obj)) {
	console.log(v)
}

console.log('----- Object.keys() -----')
for (const k of Object.keys(obj)) {
	console.log(`${k}: ${obj[k]}`)
}
