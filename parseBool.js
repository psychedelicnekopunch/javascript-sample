


function parseBool(v) {
	switch (v) {
	case true:
	case 'true':
	case 1:
	case '1':
		return true
	case false:
	case 'false':
	case '':
	case 0:
	case -1:
	case '0':
	case '-1':
	case null:
	case undefined:
		return false
	default:
		// String
		// WARN: 色々パターンがあると思うので、怪しい挙動だったらコメントアウトする。
		if (typeof v == 'string') {
			if (isNaN(Number(v))) {
				return true
			}
		}
		// NaN
		if (isNaN(v)) {
			return false
		}
		return null
	}
}

function check(v) {
	console.log(`${v} is ${parseBool(v)}.`)
}

check(true)
check('true')
check(false)
check('false')
check('test')
check(NaN)
check(Number('test'))
check()
check(undefined)
check(null)
check(1)
check(2)
check(-1)
check(-2)
check('')
check('-1')
check('-2')
