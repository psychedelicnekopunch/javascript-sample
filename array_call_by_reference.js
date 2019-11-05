var arr  = null;
var arr2 = ['override', 'test'];

console.log('var arr = null');
console.log("var arr2 = ['override', 'test']");
console.log('\n');

arr = arr2;
console.log('****** No 01 ******');
console.log('arr = arr2');
console.log(arr);

arr2.push('success');
console.log('****** No 02 ******');
console.log("arr2.push('success')");
console.log(arr);

arr2.splice(1, 1);
console.log('****** No 03 ******');
console.log('arr2.splice(1, 1);');
console.log(arr);

arr2 = ['this', 'is', 'array'];
console.log('****** No 04 ******');
console.log("arr2 = ['this', 'is', 'array']");
console.log(arr);

arr2.splice(1, 1);
console.log('****** No 05 ******');
console.log('arr2.splice(1, 1);');
console.log(arr);

arr.splice(1, 1);
console.log('****** No 06 ******');
console.log('arr.splice(1, 1);');
console.log(arr);

// process.exit();