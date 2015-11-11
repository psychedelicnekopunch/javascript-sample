var i = 0;

if (++i === 0) {
	console.log('true: i is ', i);
} else {
	console.log('false: i is ', i);
}

if (++i > 1) {
	console.log('true: i is ', i);
} else {
	console.log('false: i is ', i);
}

if (i++ > 2) {
	console.log('true: i is ', i);
} else {
	console.log('false: i is ', i);
}

console.log('i is ', i);