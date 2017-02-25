'use strict';

const _ = require('lodash');

let i = 0;

const arr = _.times(5, (j) => {
	return i++;
});

console.log(arr);