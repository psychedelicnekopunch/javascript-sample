(function()
{
	'use strict';

	function* testfunc() {
		console.log("start");
		yield 1;
		console.log("after 1");
		yield 2;
		console.log("after 2");
		return 3;
	}

	var generator = testfunc();

	console.log(generator);
	console.log(generator.next());
	console.log(generator.next());
	console.log(generator.next());
})();