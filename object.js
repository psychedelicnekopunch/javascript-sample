var obj  = null;
var obj2 = {
	val1: 'override',
	val2: 'test',
};

var obj3 = {};

if (obj3) {
	console.log('obj3 is true');
} else {
	console.log('obj3 is false');
}

console.log(obj2.hasOwnProperty('val1'));
console.log(obj2.hasOwnProperty('val3'));
console.log(obj2.hasOwnProperty(''));
console.log(obj2.hasOwnProperty(null));
console.log(obj2.hasOwnProperty(undefined));
console.log(obj3.hasOwnProperty(''));
console.log(obj3.hasOwnProperty(null));
console.log(obj3.hasOwnProperty(undefined));

/*
if (obj3.length) {
	console.log('obj3 is true');
} else {
	console.log('obj3 is false');
}*/

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