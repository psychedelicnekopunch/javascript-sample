'use strict';

const body = '{"result":"success","data":[{"id":1,"name":"Simian Mobile Disco"},{"id":2,"name":"Kiasmos"}],"time":"134ms"}';

const res = JSON.parse(body);

console.log(res);

// Error Handling
const errorBody = 'ERROR! {"result":"success","data":[{"id":1,"name":"Simian Mobile Disco"},{"id":2,"name":"Kiasmos"}],"time":"134ms"}';

const callback = (res) => {
	console.log(res);
}

try {
	callback(JSON.parse(errorBody));
	console.log('stop');
} catch(e) {
	callback(e.message);
}

console.log('finish');