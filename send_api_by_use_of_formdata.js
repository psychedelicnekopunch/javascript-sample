
// import _ from 'lodash'
const _ = require('lodash');

let sendParams = {
	id: 1,
	name: 'smith',
	favorites: ['music', 'video games', 'YouTube', 'movies']
}

let formData = new FormData()


_.forEach(sendParams, (value, key) => {
	if (Array.isArray(value)) {
		_.forEach(value, (v, _) => {
			formData.append(key + '[]', v)
		})
	} else {
		formData.append(key, value)
	}
})
