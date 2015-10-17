var moment = require('moment');

console.log(moment().format());
console.log(moment().format('e'));

var getDays = function()
{
	// js  -> 1 - 7 : mon - sun
	// php -> 0 - 6 : sun - sta
	var days = moment().format('e');
	return (days === '7') ? '0' : days;
};

console.log(getDays());

var getWeek = function()
{
	var arr = [];
	var format = 'MM/DD(ddd)';

	var setArr = function(days, format)
	{
		var obj = {
			days   : (days === '7') ? '0' : days,
			format : format,
		};
		arr.push(obj);
	};

	for (var i = 0; i < 7; i++) {
		setArr(moment().add(i, 'day').format('e'), moment().add(i, 'day').format(format));
	}
	return arr;
};

console.log(getWeek());

process.exit();