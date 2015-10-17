var obj  = null;
var obj2 = {
	val1: 'override',
	val2: 'test',
};

console.log('var obj = null');
console.log("var obj2 = {val1: 'override', val2: 'test'}");
console.log('\n');

obj = obj2;
console.log('****** No 01 ******');
console.log('obj = obj2');
console.log(obj);

obj2.val3 = 'success';
console.log('****** No 02 ******');
console.log("obj2.val3 = 'success'");
console.log(obj);

obj2.val3 = 'change';
console.log('****** No 03 ******');
console.log("obj2.val3 = 'change'");
console.log(obj);

obj2 = {
	val1: 'this',
	val2: 'is',
	val3: 'object',
};
console.log('****** No 04 ******');
console.log("obj2 = {val1: 'this', val2: 'is', val3: 'object'}");
console.log(obj);

process.exit();