//// Ternary Operator ////
let age = 99;
let beverage = age >= 21 ? "Beer" : "Juice";

// console.log(beverage); // "Beer"




let sumEvenNumber = (evenNumbers) => evenNumbers.reduce((a, b) => (a + b), 0)

let evenNumbers = []

for (i = 8; i <= 199; i++) {
	if (i % 2 === 0) {
		evenNumbers.push(i)
	}
}

// console.log(sumEvenNumber(evenNumbers))



let sum = 0

for (i = 8; i <= 199; i++) {
	if (i % 2 === 0) {
		sum += i;
	}
}

console.log(sum)