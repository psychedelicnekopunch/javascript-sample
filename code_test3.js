
const str = "testdesuyo"
const arr = str.split("")
const reverseArr = arr.map((_, i) => arr[(arr.length - 1) - i])

let res = ""

// for (const [_, v] of reverseArr.entries()) {
// 	res = `${res}${v}`
// }
for (const v of reverseArr.values()) {
	res = `${res}${v}`
}

console.log(res)
