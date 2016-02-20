var price = '1234';
var len = price.length;

// console.log(price.substring(0, 1));
// console.log(price.substring(len - 3 , len));
// console.log(price.substring(0, 1) + ',' + price.substring(len - 3 , len));

var convert = function(num)
{
	var len = num.length;
	return (len < 4) ? num : convert(num.substring(0, len - 3)) + ',' + num.substring(len - 3 , len);
};

var price = '12345678';
var len = price.length;

// console.log(price.substring(0, 1) + ',' + price.substring(len - 3 , len));
// console.log(price.substring(0, len - 3));

console.log(convert(price));