'use strict';

const _ = require('lodash');

const arr = _.times(5, (i) => {
	return i++;
});

console.log(arr);