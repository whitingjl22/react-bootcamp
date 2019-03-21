// Write a function called zero_negativity(). 
// This function should take an array. 
// Return true if the input array contains no negative numbers, 
// return false if it does.

function zero_negativity(arr) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			return 'False';
		}
	}
	return 'True';
}

console.log(zero_negativity([1, 2, 3])) // True
console.log(zero_negativity([1, 2, -3])) // False

// Write a function called is_even(). 
// This function should take a number. 
// Return true if the input number is even, 
// return false if the number is odd.

function is_even(num) {
	if (num % 2 === 0) {
		return 'True';
	}
	return 'False';
}

console.log(is_even(8)) // True
console.log(is_even(3)) // False

// Write a function called how_many_even(). 
// This function should take an array. 
// Return the total number of elements in the array 
// that are even. You may call is_even() to solve this.

const how_many_even = (arr) => arr.filter(a => a % 2 === 0).length

console.log(how_many_even([1, 2, 3, 4, 5, 6])) // 3

// Write a function called create_dummy_array(). 
// This function should take a number n. 
// Return an array of random numbers between 0 and 9 with the length of n.

function create_dummy_array(num) {
	let randomArr = Array.from({ length: num }, () => Math.floor(Math.random() * 10));
	return randomArr
}

// Write a function called random_choice(). 
// This function should take an array. 
// Return a random element of the array, based on its length. 
// This function should never return undefined.

function random_choice(arr) {
	let randomItem = arr[Math.floor(Math.random()*arr.length)];
	return randomItem
}
