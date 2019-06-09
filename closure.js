'use strict';

var g = 'this is global';

function test() {
	var str = 'success';

	(function() {
		console.log(str)
		console.log(g)
	})()
}

// console.log(str); // undefined
test();
