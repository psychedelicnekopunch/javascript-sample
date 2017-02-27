'use strict';

const _ = require('lodash');

const lists = [
	{
		id: 1,
		name: 'angular',
	},
	{
		id: 2,
		name: 'vue',
	},
];

const res = _.map(lists, (list) => {
	return list.id;
});

console.log(res);