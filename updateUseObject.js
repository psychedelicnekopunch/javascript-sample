
function change1(a, i) {
	a[i] = 'test'
}


let obj = {
	a: 'apple',
	b: 'banana',
	c: 'candy',
}

change1(obj, 'a')
console.log(obj)

change1(obj, 'x')
console.log(obj)


let copy = obj

change1(copy, 'b')
console.log(obj)
