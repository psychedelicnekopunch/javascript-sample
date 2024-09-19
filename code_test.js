
let str = "testdesuyo"

let arr = str.split('')

let res = ""
let res2 = ""


for (let i = arr.length - 1; i >= 0; i--) {
	res = res + arr[i]
}

while (true) {
	let i = arr.length -1
	if (i < 0) {
		break
	}
	res2 = `${res2}${arr[i]}`
	arr.pop()
}

console.log(res)
console.log(res2)
