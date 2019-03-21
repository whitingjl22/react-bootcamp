// // Print 1 to x
// function printUpTo(x) {
// 	for (let i = 1; i <= x; i++) {
// 		if (x > 0) {
// 			console.log(i)
// 		}
// 	}
// 	if (x < 0) {
// 		console.log('Negative Number')
// 		return false
// 	}
// }

// console.log(printUpTo(5))


// PrintSum
function printSum(x) {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		console.log(i)
		sum += arguments[i];
	}
	return sum;
}

y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640
