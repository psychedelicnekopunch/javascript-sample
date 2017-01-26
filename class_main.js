'use strict';

const ClassSample  = require('./ClassSample');
const ClassSample2 = require('./ClassSample2');

const sample = new ClassSample;
console.log(sample.test());


const sample2 = new ClassSample('world');
console.log(sample2.test());

console.log(sample.test());


const sample3 = new ClassSample2;
console.log(sample3.test());


const sample4 = new ClassSample2('world2');
console.log(sample4.test());