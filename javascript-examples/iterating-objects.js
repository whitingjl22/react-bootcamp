// To iterate over an object, we will use a for-in loop

// here is an object literal with four key-value pairs
let sandwich = {
	cheese: 'Smoked Gouda',
	meat: 'Dry-aged Bison',
	sauce: 'Chipotle Aioli',
	veggies: 'Caramelized Onions'
}

for (let key in sandwich) { // the variable 'key' is used instead of an index
	console.log('key: ', key); // returns the 'key' of the key-value pair
	console.log('value: ', sandwich[key]); // when we pass the key to the 'sandwich' object, we can pull values
}


