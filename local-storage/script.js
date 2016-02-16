(function()
{
	'use strict';

	var storage = null;

	var onAdd   = document.getElementById('onAdd');
	var onClear = document.getElementById('onClear');

	var inputLocalStorage = document.getElementById('inputLocalStorage');

	var init = function()
	{

	};

	onAdd.addEventListener('click', function(e)
	{
		Storage.add(function(res)
		{
			console.log(res);
			Storage.check();
			if (res) {
				inputLocalStorage.value = '';
			}
		}, inputLocalStorage.value);
	});

	onClear.addEventListener('click', function(e)
	{
		Storage.clear(function(res)
		{
			console.log(res);
			Storage.check();
		});
	});

	var Storage = (function()
	{
		var self = {};

		self.check = function()
		{
			// var lists = localStorage.getItem('lists');
			// console.log(JSON.parse(lists));
			get(function(data)
			{
				console.log(data);
			});
		};

		var get = function(callback)
		{
			var lists = localStorage.getItem('lists');
			lists = (lists) ? JSON.parse(lists) : [];
			callback(lists);
		};

		self.add = function(callback, value)
		{
			if (!value) {
				callback(false);
				return;
			}
			get(function(data){
				var lists = data;
				lists.push(value);
				localStorage.setItem('lists', JSON.stringify(lists));
				callback(true);
			});
		};

		self.clear = function(callback)
		{
			localStorage.removeItem('lists');
			callback(true);
		};

		return {
			check : self.check,
			add   : self.add,
			clear : self.clear,
		};
	})();

	// window.addEventListener('load', function()
	// {
	// 	storage = (localStorage) ? localStorage : null;
	// 	init();
	// });
})();