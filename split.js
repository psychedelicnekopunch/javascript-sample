
const str = "::ffff:192.168.0.1"
const str2 = "221.100.15.1, 174.1.9.17"


function get(str) {
	let arr = str.split(", ")
	let res = ""
	if (arr.length > 0) {
		res = arr[0]
		arr = res.split(":")
		if (arr.length > 0) {
			res = arr[arr.length - 1]
		}
	}
	return res
}

console.log(get(str))
console.log(get(str2))
