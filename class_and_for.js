'use strict';

class Sample {

	#private = "private value"
	public = "public value"

	constructor() {
		this.id = 1
		this.name = "tom"
		this.age = 30

		console.log(typeof this)// object
		console.log(Object.keys(this))

		for (const key of Object.keys(this)) {
			console.log(this[key])
		}
	}

	get privateValue() {
		return this.#private
	}

	sayHello() {
		return "hello"
	}
}


const sample = new Sample

// console.log(sample)
// console.log(sample.id)// 1
console.log(typeof sample)// object
console.log(Object.keys(sample))
// console.log(sample.privateValue)

for (const [key, value] of Object.entries(sample)) {
	console.log(`${ key }: ${ value }`)
}
