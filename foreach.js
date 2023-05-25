'use strict';



const arr = ['aaa', 'bbbb', 'cccc', 'dddd', 'eeee']

arr.forEach((value, key) => {
	console.log(key + '. ' + value)
})

console.log('--------')

const obj = {
	id: 0,
	name: 'psychedelic nekopunch',
	address: 'Tokyo',
	sex: 'male',
	age: 20,
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
	console.log(key + '. ' + obj[key])
})
