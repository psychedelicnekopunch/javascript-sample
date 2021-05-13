
var i = 0;

if (i) {
	console.log(`${i} is true`)
} else {
	console.log(`${i} is false`)
}


if (++i === 0) {
	console.log('true: i is ', i);
} else {
	console.log('false: i is ', i);
}

if (++i > 1) {
	console.log('true: i is ', i);
} else {
	console.log('false: i is ', i);
}

if (i++ > 2) {
	console.log('true: i is ', i);
} else {
	console.log('false: i is ', i);
}

console.log('i is ', i);


var func = function()
{
	console.log('call');
};

var obj = {
	func: function()
	{
		console.log('call');
	},
};

if (typeof func) {
	console.log('func is', typeof func);
	if (typeof func === 'function') {
		console.log('func: success');
	}
}

if (typeof invalidFunc) {
	console.log('invalidFunc is', typeof invalidFunc);
	if (typeof invalidFunc === 'undefined') {
		console.log('invalidFunc: success');
	}
}

if (typeof obj) {
	console.log('obj is', typeof obj);
	if (typeof obj === 'object') {
		console.log('obj: success');
	}
}

if (typeof obj.func) {
	console.log('obj.func is', typeof obj.func);
	if (typeof obj.func === 'function') {
		console.log('obj.func: success');
	}
}
