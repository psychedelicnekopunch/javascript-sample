'use strict';

class ClassSample {

	#hello = 'hello'

	constructor() {
		// this.#hello = 'hello'
	}


	get say() {
		return this.#hello
	}

	hey() {
		return `hey! ${this.#yo()}`
	}

	#yo() {
		return 'yo!'
	}
}


let sample = new ClassSample()
console.log(sample)
// console.log(sample.#hello) // SyntaxError
// console.log(sample.#test) // SyntaxError
console.log(sample.say)
console.log(sample.hey())
