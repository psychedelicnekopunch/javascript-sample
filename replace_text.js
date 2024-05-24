const str  = 'aaaa_bbbb_ccccc_ddddd_eeeee_fffff';
console.log(str.replace('_', '-'))
console.log(str.replace(/_/g, '-'))



function ajust(str) {
	console.log(str.toLowerCase().replace(' ', '-'))
}


ajust('Visa')
ajust('MasterCard')
ajust('Diners Club')
ajust('Discover')
ajust('JCB')
ajust('American Express')
