
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
	// 最後尾を削除
	arr.pop()

	// slice(start, end)
	// start: 0からはじまるインデックス。抽出を始める位置を指定する
	// end: 0からはじまるインデックス。抽出に含まず、その直前までを抽出する
	// arr = arr.slice(0, i)
}

console.log(res)
console.log(res2)
