'use strict';

class ClassSample {
	constructor(text) {
		this.hello_ = (text) ? text : 'hello';
	}

	test() {
		return this.hello_;
	}
}

module.exports = ClassSample;