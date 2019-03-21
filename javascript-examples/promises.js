// const doSomethingAsync = () => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("I did something"), 1000);
//   });
// };
// const doSomething = async () => {
//   console.log(await doSomethingAsync());
// };

// console.log("Before");
// doSomething();
// console.log("After");



function getStuffFromDatabase(resolve, reject) {
	var data = "whee"
	setTimeout(function () {
		data = [{ name: 'Todd' }, { name: 'Michael' }, { name: 'Portia' }];
		resolve(data);
	}, 1000);
	// reject(); //comment this line in and out!
}
function requestDataFromDatabase() {
	console.log('running');
	//creates promise
	var data = new Promise(function (resolve, reject) {
		getStuffFromDatabase(resolve, reject);
	});
	// if promise is successful (keeps me from putting all the logic in the callback)
	data.then(function (data) {
		console.log(data, "ASynchronous");
		for (var i = 0; i < data.length; i++) {
			console.log(data[i].name);
		}
	});
	data.catch(function () {
		console.log('failure');
	})
	console.log('end');
}
requestDataFromDatabase();