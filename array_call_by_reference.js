// var arr  = null;
// var arr2 = ['override', 'test'];

// console.log('var arr = null');
// console.log("var arr2 = ['override', 'test']");
// console.log('\n');

// arr = arr2;
// console.log('****** No 01 ******');
// console.log('arr = arr2');
// console.log(arr);

// arr2.push('success');
// console.log('****** No 02 ******');
// console.log("arr2.push('success')");
// console.log(arr);

// arr2.splice(1, 1);
// console.log('****** No 03 ******');
// console.log('arr2.splice(1, 1);');
// console.log(arr);

// arr2 = ['this', 'is', 'array'];
// console.log('****** No 04 ******');
// console.log("arr2 = ['this', 'is', 'array']");
// console.log(arr);

// arr2.splice(1, 1);
// console.log('****** No 05 ******');
// console.log('arr2.splice(1, 1);');
// console.log(arr);

// arr.splice(1, 1);
// console.log('****** No 06 ******');
// console.log('arr.splice(1, 1);');
// console.log(arr);


let obj = {
	arr: ["test"],
}
let arr = ["test"]

// function add(arg) {
// 	// arg.arr.push("push")// { arr: [ 'test', 'push' ] }
// 	// arg.arr = arg.arr.concat(["concat"])// { arr: [ 'test', 'concat' ] }
// 	// arg.arr = [...arg.arr, "スプレッド構文"]// { arr: [ 'test', 'スプレッド構文' ] }
// }
// add(obj)

// function add(arg) {
// 	// arg.push("push")// { arr: [ 'test', 'push' ] }
// 	// arg = arg.concat(["concat"])// { arr: [ 'test' ] }
// 	// arg = [...arg, "スプレッド構文"]// { arr: [ 'test' ] }
// }
// add(obj.arr)

function setObj(arg) {
	console.log(arg)
	// if (arg !== arr) {
	// 	console.log("レンダリング")
	// }
}

let arrCopy = arr
arrCopy.push("push")
setObj(arrCopy)

let newArr = arr.map(v => v)
newArr.push("push")
setObj(newArr)

let blankArr = []

setObj(arr.concat(["concat"]))
setObj([...arr, "スプレッド構文"])

console.log(arr)

let objCopy = obj
// objCopy.arr.push("push")// { arr: [ 'test', 'push' ] }
// objCopy.arr = objCopy.arr.concat(["concat"])// { arr: [ 'test', 'concat' ] }
// objCopy.arr = [...objCopy.arr, "スプレッド構文"]// { arr: [ 'test', 'スプレッド構文' ] }
// console.log(obj)

