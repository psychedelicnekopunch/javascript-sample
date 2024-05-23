'use strict'


// JOSN 文字列に変換
const obj = {
	hello: 'object world',
}
console.log(JSON.stringify(obj))

const arr = [ 'hello', 'array', 'world' ]
console.log(JSON.stringify(arr))

const str = 'hello, string world {}'
console.log(JSON.stringify(str))


try {
	let obj2 = {}
	obj2.obj = obj2
	// <ref *1> { obj: [Circular *1] }
	console.log(obj2)
	console.log(JSON.stringify(obj2))
} catch (e) {
	// Converting circular structure to JSON
	// --> starting at object with constructor 'Object'
	// --- property 'obj' closes the circle
	console.log(e.message)
}


try {
	const int = BigInt(1)
	// 1n
	console.log(int)
	console.log(JSON.stringify(int))
} catch (e) {
	// Do not know how to serialize a BigInt
	console.log(e.message)
}



// JSON 文字列を値として扱う

let parsedObj = JSON.parse(JSON.stringify(obj))
console.log(parsedObj)
console.log(parsedObj.hello)

let parsedArr = JSON.parse(JSON.stringify(arr))
console.log(parsedArr)
console.log(parsedArr[0])

console.log(JSON.parse(JSON.stringify(str)))

try {
	console.log(JSON.parse('hello warld {}'))
} catch (e) {
	// Unexpected token I in JSON at position 0
	console.log(e.message)
}

let parsedObj2 = JSON.parse('{"hello":"object world"}')
console.log(parsedObj2)
console.log(parsedObj2.hello)
