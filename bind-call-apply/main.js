////////////////// BIND //////////////////

var customObject = {
	name: 'California, Eureka',
	onClick: function () {
		console.log("I've been clicked");
		console.log(this.name);
	}
}

var newObject = {
	name: "West Virginia,  Montani semper liberi"
}

// our behavior on click.
$('button').click(customObject.onClick.bind(newObject));
// $('button').click(customObject.onClick.bind(customObject));

////////////////// CALL & APPLY //////////////////

// Call and Apply allow us to inherit methods from other constructors:
function Ninja(name, age) {
	this.name = name;
	this.age = age;
	// there could be lots of other stuff here!
}
function BlackBelt(name, age) {
	//Commas!
	Ninja.call(this, name, age);
	this.belt = 'black';
}
function YellowBelt(name, age) {
	//ARRAY
	Ninja.apply(this, [name, age]);
	this.belt = 'yellow';
}
var yB = new YellowBelt('mike', 40);
var bB = new BlackBelt('charlie', 29);
console.log(bB.name);
console.log(yB.name, yB.age);

// Another use of call and apply: It allows us to use this, without constructing an object with new first:
function levelUp() {
	console.log(this.name + " has learned a new kata, in " + this.gender + " favorite language: " + this.language);
}
var person = {
	name: 'Lisa',
	gender: 'her',
	language: 'JavaScript, duh!'
};

var todd = {
	name: 'Todd',
	gender: 'his',
	language: 'Python, duh!'
};

levelUp.call(todd);