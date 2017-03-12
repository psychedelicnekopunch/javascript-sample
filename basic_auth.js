'use strict';

const url = 'http://user:pass@sample.com/';

let options = {};

const setAuth = function(url, options) {

	url = url.split('?')[0];

	let user = null;
	let pass = null;

	if (url.split(':').length === 3 ) {
		user = url.split(':')[1].replace('//', '');
		if (url.split(':')[2].split('@').length === 2) {
			pass = url.split(':')[2].split('@')[0];
		}
	}
	if (!user || !pass) {
		return options;
	}

	const auth = 'Basic ' + new Buffer(`${user}:${pass}`).toString('base64');

	if (!options.hasOwnProperty('headers')) {
		options['headers'] = {};
	}
	if (!options.headers.hasOwnProperty('Authorization')) {
		options['headers']['Authorization'] = '';
	}

	options['headers']['Authorization'] = auth;

	return options;
};

console.log(setAuth(url, options));