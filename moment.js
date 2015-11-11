var moment = require('moment');

console.log(moment().format('X'));

var y = moment().format('YYYY');
var m = moment().format('MM');
var d = moment().format('DD');

console.log(moment(y+'-'+m+'-'+d + '00:00:00', "YYYY-MM-DD HH:mm:ss").format('X'));