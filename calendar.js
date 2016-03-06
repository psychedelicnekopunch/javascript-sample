(function()
{
	'use strict';

	var Calendar = (function()
	{
		'use strict';

		var self = {};

		var moment = require('moment');

		var year    = null,
			month   = null,
			today   = null,
			daytime = null;

		self.init = function()
		{
			year    = moment().format('YYYY');
			month   = moment().format('M');
			today   = moment(moment().format('YYYY-M-D'), 'YYYY-M-D').format('X');
			daytime = 60*60*24;
		};

		self.get = function()
		{
			var res = [];

			var firstDayTime = getFirstDayTime();
			var calendar     = build(firstDayTime);

			var start = firstDayTime - (daytime * calendar.wday);

			var days = 0;

			while (true) {

				calendar = build(start + (daytime * days));

				if (days === 28 || days === 35) {
					if (res[days - 1].month !== calendar.month) {
						break;
					}
				} else if (days === 42) {
					break;
				}

				res.push(calendar);
				days++;
			}
			return res;
		};

		var build = function(unixtime)
		{
			var date = moment(unixtime, 'X');

			return {
				unixtime : parseInt(date.format('X')),
				wday     : parseInt(date.format('e')),
				year     : parseInt(date.format('YYYY')),
				month    : parseInt(date.format('M')),
				day      : parseInt(date.format('D')),
				today    : (parseInt(today) === parseInt(unixtime)) ? true : false,
			};
		};

		self.setYear = function(value)
		{
			var intValue = parseInt(value);
			year = (intValue > 1969) ? intValue : year;
		};

		self.setMonth = function(value)
		{
			var intValue = parseInt(value);
			month = (intValue > 0 && intValue < 13) ? intValue : month;
		};

		var getFirstDayTime = function()
		{
			return moment(year + '-' + month + '-1', 'YYYY-M-D').format('X');
		};

		self.init();

		return self;
	})();

	console.log(Calendar.get());
})();