let arr = ['apple', 'banana', 'candy']
let arr2 = null
console.log(arr)

// add
arr.push('追加')
console.log("\narr.push('追加')")
console.log(arr)

arr.unshift('追加2')
console.log("\narr.unshift('追加2')")
console.log(arr)

arr.splice(0, 0, '追加3')
console.log("\narr.splice(0, 0, '追加3')")
console.log(arr)

arr.splice(1, 0, '追加4')
console.log("\narr.splice(0, 0, '追加4')")
console.log(arr)

arr.splice(3, 0, '追加5a', '追加5b', '追加5c', '追加5d')
console.log("\narr.splice(3, 0, '追加5a', '追加5b')")
console.log(arr)


// find
console.log("\narr2 = arr.forEach((value, key) => { ... })")
arr2 = arr.forEach((value, key) => {
	console.log(`${key}. ${value}`)
	return `【${key}】${value}`
})
console.log("\narr2")
console.log(arr2)

console.log("\narr2 = arr.map((value, key) => { ... })")
arr2 = arr.map((value, key) => {
	console.log(`${key}. ${value}`)
	return `【${key}】${value}`
})
console.log("\narr2")
console.log(arr2)


// delete
arr.pop()
console.log("\narr.pop()")
console.log(arr)

arr.shift()
console.log("\narr.shift()")
console.log(arr)

arr.splice(0, 1)
console.log("\narr.splice(0, 1)")
console.log(arr)

arr.splice(1, 2)
console.log("\narr.splice(1, 2)")
console.log(arr)

arr2 = arr.slice(1)
console.log("\narr2 = arr.slice(1)")
console.log(arr)
console.log("↓")
console.log(arr2)

arr2 = arr.slice(1, 3)
console.log("\narr2 = arr.slice(1, 3)")
console.log(arr)
console.log("↓")
console.log(arr2)

arr2 = arr.slice(2, -1)
console.log("\narr2 = arr.slice(2, -1)")
console.log(arr)
console.log("↓")
console.log(arr2)
