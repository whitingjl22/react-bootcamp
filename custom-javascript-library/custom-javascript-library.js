var jeremysLibrary = {

	map: function (arr, callback) {
		let myArr = []

		for (i = 0; i < arr.length; i++) {
			arr[i] = callback(arr[i])
			myArr.push(arr[i])
		}
		return myArr
	},


	reduce: function (arr, callback) {
		let sum = 0

		for (i = 0; i < arr.length; i++) {
			sum += callback(arr[i])
		}
		return sum
	},

	find: function (arr, callback) {
		let myArr = []

		for (i = 0; i < arr.length; i++) {
			if (callback(arr[i])) {
				myArr.push(arr[i])
				return myArr;
			}
		}
	},


	filter: function (arr, callback) {
		let myArr = []

		for (i = 0; i < arr.length; i++) {
			if (callback(arr[i])) {
				myArr.push(arr[i])
			}
		}
		return myArr;
	},


	reject: function (arr, callback, ) {
		let myArr = []

		for (i = 0; i < arr.length; i++) {
			if (callback(arr[i])) {
				myArr.push(arr[i])
			}
		}
		return myArr;
	}
}

// filter - looks through each value in the list, returning an array of all the values that pass a truth test (predicate)
var filterEvens = jeremysLibrary.filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (num) { return num % 2 === 0; });
console.log('Filter Evens: ', filterEvens); // [2, 4, 6, 8, 10]

// reject - returns the values in list without the elements that the truth test (predicate) passes 
var rejectEvens = jeremysLibrary.reject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (num) { return num % 2 !== 0; });
console.log('Reject Evens: ', rejectEvens); // [1, 3, 5, 7, 9]

// find - looks through each value in the list, returning the first one that passes a truth test 
var findFirstEven = jeremysLibrary.find([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (num) { return num % 2 === 0; });
console.log('Find Evens: ', findFirstEven); // [2]

// map - produces a new array of values by mapping each value in list through a transformation function
var mapTimesTwo = jeremysLibrary.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (num) { return num * 2; });
console.log('Map Times Two: ', mapTimesTwo); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// reduce - boils down a list of values into a single value
var reduceSum = jeremysLibrary.reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (num) { return num; });
console.log('Reduce Sum: ', reduceSum); // 55

