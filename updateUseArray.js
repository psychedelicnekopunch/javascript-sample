
function change1(a, i) {
	a[i] = 'test1'
}

function change2(a) {
	a.push('test2')
	a.push('test2')
	a.push('test2')
	a.push('test2')
	a[0] = 'test3'
}

let arr = ['apple', 'banana', 'candy']

change1(arr, 0)
console.log(arr)

change2(arr)
console.log(arr)


let copy = arr

change2(arr)
change1(copy, 1)
console.log(arr)
console.log(copy)
