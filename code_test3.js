
const str = "testdesuyo"
const arr = str.split("")
const reverseArr = arr.map((_, i) => arr[(arr.length - 1) - i])
// const reverseArr = arr.map((_, i) => { return arr[arr.length - i - 1] })

let res = ""

// for (const [_, v] of reverseArr.entries()) {
// 	res = `${res}${v}`
// }
for (const v of reverseArr.values()) {
	res = `${res}${v}`
}
// reverseArr.map((v) => { res = `${res}${v}` })

console.log(res)
