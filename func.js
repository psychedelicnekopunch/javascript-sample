'use strict';

(function(){
	console.log('call');

	var x = 0;

	var test = function() {
		x = 10;
	}();

	console.log(x);

})();


(function(str){
	console.log('call ' + str);
})('success');



function test() {
	// プライベート変数
	var str = 'success';

	return {
		// パブリック関数
		get: function() {
			return str;
		}
	};
}

var t = new test;
console.log(t);
console.log(t.get());