

class Sample {

	constructor() {
		this.test = 'test'
		this._test2 = ''
	}

	get testJr() {
		return this.test + ' Jr.'
	}

	set test2(value) {
		this._test2 = value
	}

}

const s = new Sample

console.log(s.testJr) // test Jr.
console.log(s.test2) // undefined

s.test2 = 'yeah'
console.log(s._test2) // yeah


const s2 = {

	test: 'test',
	_test2: '',

	get testJr() {
		return this.test + ' Jr.'
	},

	set test2(value) {
		this._test2 = value
	},

}

console.log(s2.testJr) // test Jr.
console.log(s2.test2) // undefined

s2.test2 = 'yeah'
console.log(s2._test2) // yeah
