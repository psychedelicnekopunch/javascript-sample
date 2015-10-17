var objOverride = (function()
{
	var self = this;

	self.val = ['override', 'test'];

	self.set = function(val)
	{
		self.val.push(val);
	};

	return {
		val : self.val,
		set : self.set,
	};
})();

var obj = (function()
{
	console.log(objOverride);

	var self = this;

	self.val = null;

	self.contents = {
		val: null,
	};

	self.init = function()
	{
		console.log('objOverride.val IN obj:' + objOverride.val);
		self.val          = objOverride.val;
		self.contents.val = objOverride.val;
		console.log('self.val: ' + self.val);
	};

	return {
		init     : self.init,
		val      : self.val,
		contents : self.contents,
	};
})();

console.log('obj.val: ' + obj.val);

obj.init();

console.log('==============');
console.log('obj.val: ' + obj.val);
console.log('obj.contents.val: ' + obj.contents.val);

objOverride.set('success');

console.log('==============');
console.log('obj.val: ' + obj.val);
console.log('obj.contents.val: ' + obj.contents.val);

console.log('==============');
console.log(objOverride);

process.exit();