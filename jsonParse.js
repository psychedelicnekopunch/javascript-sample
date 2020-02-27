'use strict'

const body = '{"result":"success","data":[{"id":1,"name":"Simian Mobile Disco"},{"id":2,"name":"Kiasmos"}],"time":"134ms"}'

// const res = JSON.parse(body)
// console.log(res)

// Error Handling
const errorBody = 'ERROR! {"result":"success","data":[{"id":1,"name":"Simian Mobile Disco"},{"id":2,"name":"Kiasmos"}],"time":"134ms"}'

let obj = null

try {
	obj = JSON.parse(errorBody)
} catch(e) {
	console.log('==========')
	console.log(e.message)
	console.log('==========')
}

console.log(obj)

try {
	obj = JSON.parse(body)
} catch(e) {
	console.log('==========')
	console.log(e.message)
	console.log('==========')
}

console.log(obj)
