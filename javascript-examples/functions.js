// Finds Average Number Of An Array
function findAvg(arr) {
	let sum = 0;
	let avg;
	let i;

	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
		avg = sum / arr.length;
	}
	return avg;
}

const findAvgWithReduce = (arr) => arr.reduce((a, b) => (a + b), 0) / arr.length

// console.log(findAvgWithReduce([10, 10])); // outputs 10

// Finds Odd Numbers In An Array
function oddNumbers() {
	var arr = [];
	let i;

	for (i = 0; i < 51; i++) {
		if (i % 2 === 1) {
			arr.push(i);
		}
	}
	return arr;
}

// console.log(oddNumbers());

// Counts Numbers In Array That Are Greater Than Y
function greaterY(arr, Y) {
	let count = 0;
	let i;

	for (i = 0; i < arr.length; i++) {
		if (arr[i] > Y) {
			count += 1;
		}
	}
	return count;
}

const greaterYFilter = (arr, Y) => arr.filter(a => a > Y).length
// console.log(greaterYFilter([1,3,5,7], 3));

// console.log(greaterY([1,3,5,7], 3)); // outputs 2


let arr = [1, 2, 3];
let arr1 = [];

let arr2 = arr.map(a => a * a)

for (i = 0; i < arr.length; i++) {
	arr1.push(arr[i] * arr[i]);
}

// console.log('ARR1:', arr1);
// console.log('ARR2:', arr2);


function noNeg(arr) {
	for (i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr[i] = 0;
		}
	}
	return arr;
}

// console.log(noNeg([-1,-2]));


function maxMinAvg(arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let arrReduceAvg = arr.reduce((a, b) => (a + b), 0) / arr.length;
	let arrNew = [max, min, arrReduceAvg];

	return arrNew;
}

// console.log(maxMinAvg([1, 5, 10, -2]));


function swapFirstLastValuesOfArray(arr) {
	[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
	return arr;
}

// console.log(swapFirstLastValuesOfArray([1, 2, 3, 4]));
// console.log(swapFirstLastValuesOfArray([0, 2, 1]));
// console.log(swapFirstLastValuesOfArray([3]));


// Find repeat items in Arg from Arr and remove them
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// Functions taking other functions
function multiply(a, b) {
	return a * b
}

function square(n) {
	return multiply(n, n)
}

function cube(x) {
	return multiply(square(x), x)
}

// console.log(cube(2))