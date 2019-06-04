'use strict';

// string to boolean
const t = 'true'
const f = 'false'

console.log(Boolean(t)) // true
console.log(Boolean(f)) // true

console.log((t)) // 'true'
console.log((f)) // 'false'

console.log((t == 'true')) // true
console.log((f == 'true')) // false


function parseBool(value) {
	switch (value) {
	case true:
	case 'true':
	case 1:
	case '1':
		return true;
	case false:
	case 'false':
	case 0:
	case '0':
		return false;
	default:
		return null;
	}
}

console.log(parseBool(t))
console.log(parseBool(f))

console.log(parseBool(t).toString())
console.log(parseBool(f).toString())
