'use strict';

class ClassSample2 {
	constructor(text) {
		this.hello_ = (text) ? text : 'hello2';
	}

	test() {
		return this.hello_;
	}
}

module.exports = ClassSample2;