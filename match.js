const str1 = '11月 8日 (日), 12:30 ～ 19:00';
const str2 = '2015年 9月 20日 (日曜日)';
const str3 = '2016年 2月 22日 (月), 01:00 ～ 01:05';
const str4 = '/signout/hoge';
const str5 = '/signout/hoge/success';

if (str1.match(/^[0-9]{1,2}月 [0-9]{1,2}日 \(.\), */i)) {
	console.log('success');
}
if (str2.match(/^[0-9]{4}年 [0-9]{1,2}月 [0-9]{1,2}日 \(...\)/i)) {
	console.log('success2');
}
if (str3.match(/^[0-9]{4}年 [0-9]{1,2}月 [0-9]{1,2}日 \(.\), */i)) {
	console.log('success3');
}
if (str4.match(/(signin|signout)/i)) {
	console.log('success4');
}

const regexp = new RegExp(str4, 'i');

if (str5.match(regexp)) {
	console.log('success5');
}

// const arr = str.split(',');
// console.log(arr);