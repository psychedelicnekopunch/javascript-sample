
// コピーメソッドと変更メソッド
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#%E3%82%B3%E3%83%94%E3%83%BC%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%81%A8%E5%A4%89%E6%9B%B4%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89
//
// - コピーメソッド
// コピーは常にシャローコピーで行われます。
//
// - 変更メソッド
// メソッドによって返値が異なります。あるものは同じ配列への参照を、あるものは新しい配列の長さを返します。
//


const originArr = [{
	arr: ["test"],
	obj: {
		str: "test",
		arr: ["test"],
	},
	str: "test",
}]

const originObj = {
	arr: ["test"],
	obj: {
		str: "test",
		arr: ["test"],
	},
	str: "test",
}


// Shallow copy (シャローコピー)
// https://developer.mozilla.org/ja/docs/Glossary/Shallow_copy
//

// let shallowCopy = originArr
let shallowCopy = originArr.map(v => v)
// let shallowCopy = [...originArr]
// let shallowCopy = { ...originArr }
// const shallowCopy = originArr.concat(["add"])
// shallowCopy.push("add")
shallowCopy[0] = { str: "change" }
// shallowCopy[0].arr = ["change"]
// shallowCopy[0].arr.push("change")
// shallowCopy[0].arr = shallowCopy[0].arr.concat(["change"])
// shallowCopy[0].obj.str = "change"
// shallowCopy[0].obj.arr = ["change"]
// shallowCopy[0].str = "change"
console.log(shallowCopy[0])


// let shallowCopy = originObj
// let shallowCopy = { ...originObj }
// shallowCopy.arr = ["change"]
// shallowCopy.arr.push("change")
// shallowCopy.arr = shallowCopy.arr.concat(["change"])
// shallowCopy.obj.str = "change"
// shallowCopy.obj.arr = ["change"]
// shallowCopy.obj.arr.push("change")
// shallowCopy.str = "change"
// console.log(shallowCopy)





// Deep copy (ディープコピー)
// https://developer.mozilla.org/ja/docs/Glossary/Deep_copy
//

// let deepCopy = structuredClone(originArr)
// deepCopy[0] = { str: "change" }
// deepCopy[0].arr = ["change"]
// deepCopy[0].arr.push("change")
// deepCopy[0].arr = deepCopy[0].arr.concat(["change"])
// deepCopy[0].obj.str = "change"
// deepCopy[0].obj.arr = ["change"]
// deepCopy[0].str = "change"
// console.log(deepCopy[0])


// let deepCopy = structuredClone(originObj)
// deepCopy = { str: "change" }
// deepCopy.arr = ["change"]
// deepCopy.arr.push("change")
// deepCopy.arr = deepCopy.arr.concat(["change"])
// deepCopy.obj.str = "change"
// deepCopy.obj.arr = ["change"]
// deepCopy.str = "change"
// console.log(deepCopy)



// console.log(originArr)
console.log(originArr[0])
// console.log(originObj)
