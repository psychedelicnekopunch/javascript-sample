
let str = "testdesuyo"

let arr = str.split('')
let arr2 = []

let res = ""


arr.forEach((v) => {
	arr2.push({
		v: v,
		i: v.codePointAt(0),
	})
})
console.log(arr2)

while (true) {
	let i = 0
	let v = ""
	let removeIndex = 0
	let arrTemp = []
	arr2.forEach((list, index) => {
		if (index == 0) {
			removeIndex = index
			i = list.i
			v = list.v
			return
		}
		if (list.i < i) {
			removeIndex = index
			i = list.i
			v = list.v
		}
	})
	arr2.forEach((list, index) => {
		if (index == removeIndex) {
			return
		}
		arrTemp.push(list)
	})
	arr2 = arrTemp

	res = `${res}${v}`

	if (arr2.length == 0) {
		break
	}
}

console.log(res)
