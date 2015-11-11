(function()
{
	'use strict';

	var moment = require('moment');

	var wait = function(sec)
	{
		var finish = parseInt(moment().format('X')) + sec;
		while (moment().format('X') <= finish) {}
		return;
	};

	var wait2 = function(sec)
	{
		var finish = Math.floor(new Date().getTime() / 1000) + sec;
		while (Math.floor(new Date().getTime() / 1000) <= finish) {}
		return;
	};

	setTimeout(function()
	{
		console.log('3');
	}, 1000);

	console.log('1');

	wait2(3);

	console.log('2');
})();