let arr1 = [0, 3, 8, 10, 20, 50]
let arr2 = [6, 7, 8]
let arr3 = [...arr1, ...arr2] // Spread Example
let arr4 = arr1.filter((a) => a < 4) // Filter Example
let arr5 = arr1.reduce((a, b) => a + b, 0) // Reduce Example
let arr6 = arr1.map((a) => a * a) // Map Example
let arr7 = arr1.map((a) => a * 1) // Map Example

console.log(arr3)

const arr = [0, 1, 2, 3, 4, 5]
const newArray1 = arr.map((number) => number * 2)
let newArray2 = arr.map((number) => number * 2)

// console.log(newArray);

// let test = [1, 2, 3, 4, 5].map((item) => {

//   const evenOrOdd = item % 2 > 0 ? "odd" : "even";
//   console.log(`${item} is ${evenOrOdd}`)

//   return evenOrOdd;
// })

// console.log(test);
