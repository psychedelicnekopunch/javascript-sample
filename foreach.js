'use strict';



const arr = ['aaa', 'bbbb', 'cccc', 'dddd', 'eeee']

arr.forEach((value, key) => {
	console.log(key + '. ' + value)
})

console.log('--------')

// const obj = {
// 	id: 0,
// 	name: 'psychedelic nekopunch',
// 	address: 'Tokyo',
// 	sex: 'male',
// }


const obj = {
	id: 0,
	name: 'psychedelic nekopunch',
	address: 'Tokyo',
	sex: 'male',
	marks: {
		japanese: 'D',
		science: 'C',
		math: 'A',
		physical: 'A',
		english: {
			reading: 'B',
			writing: 'C',
			speaking: 'A',
		}
	},
}


// オブジェクトは forEach() メソッドを持っていないから使えない
// obj.forEach((value, key) => {
// 	console.log(key + '. ' + value)
// })

const keys = Object.keys(obj)
const values = Object.values(obj)

values.forEach((value, i) => {
	console.log(keys[i] + '. ' + value)
})

console.log('--------')

const cnt = keys.length
for (let i = 0; i < cnt; i++) {
	console.log(keys[i] + '. ' + values[i])
}

console.log('--------')

keys.forEach((key) => {
	console.log(`${key}: ${obj[key]}`)
})

console.log('--------')

function reflexiveCall(obj, nest) {
	const keys = Object.keys(obj)
	keys.forEach((key) => {
		// console.log(typeof obj[key])
		if (typeof obj[key] == 'object') {
			if (nest) {
				reflexiveCall(obj[key], `${nest}${key}.`)
			} else {
				reflexiveCall(obj[key], `${key}.`)
			}
			return
		}
		if (nest) {
			console.log(`${nest}${key}: ${obj[key]}`)
		} else {
			console.log(`${key}: ${obj[key]}`)
		}
	})
}

reflexiveCall(obj, '')
