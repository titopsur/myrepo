#!/usr/bin/env node
var primesArr = new Array();
var cnt = 0;
var i = 2;
while (cnt < 100) {
	if (isPrime(i)) {
		primesArr.push(i);
		cnt++;
	}
	i++;
}
//console.log(primesArr.join(","));
var fs = require('fs');
fs.writeFileSync("primes.txt", primesArr.join(","));

function isPrime(n) {
	if (n < 2) return false;
	if (n == 2)  return true;
	for (var i = 2; i <= Math.sqrt(n); i++) {
		if (n%i ==0) return false;
	}
	return true;
}
