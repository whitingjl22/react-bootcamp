/* 
  .map() creates a more elegant way for us to transform elements in an array.
  Let's say we have an array of heights, and we want to transform each element from inches to centimeters.
*/

const heightsInInches = [60, 64, 59, 73, 78];

/* Option 1 may be to create a custom function just for this problem */

function transformInchesToCm()  {
  const factor = 2.54;
  const arrayOfCm = [];
  for (let i = 0; i < heightsInInches.length; i += 1) {
    const element = heightsInInches[i];
    const transformedElement = Math.floor(element * 2.54); // Notice I round the numbers down with "Math.floor()" simply to neaten the output.
    arrayOfCm.push(transformedElement);
  }
  return arrayOfCm;
}

const heightsInCm1 = transformInchesToCm();
console.log('Option 1:', heightsInCm1);

/* It's not terrible, but if we wanted to transform this array again, 
 * we'd have to write another function
 */

/* Option 2 is to create a more resusable function 
 * This function will take an array, and a function/callback you
 * want to pass each of the elements of the array through
 */

function transformArray(array, cb) {
  const newArray = [];
  for(let i = 0; i < array.length; i += 1) {
    const element = cb(array[i]);
    newArray.push(element); 
  }
  return newArray;
}

const heightsInCm2 = transformArray(heightsInInches, function(element) {
  return Math.floor(element * 2.54);
});

console.log('Option 2:', heightsInCm2);
/* This is better, we can reuse this to perform multiple transformations.
 * It's a bit verbose and lengthy. If only there was a "built-in" method...?
 */

/* And finally, Option 3 is using .map() */

const heightsInCm3 = heightsInInches.map(e => Math.floor(e * 2.54));

console.log('Option 3:', heightsInCm3);

/* One line of code accomplishes what it took 5+ lines to do */

/* Let's create our own .map() prototype */

const myMap = function(userDefinedFunction) {
  const newArr = [];
  for (let i = 0; i < this.length; i += 1) {
    const arrEl = this[i];
    const modifiedArrEl = userDefinedFunction(arrEl);
    newArr.push(modifiedArrEl);
  }
  return newArr;
}

Array.prototype.myMap = myMap;

const heightsInCm4 = heightsInInches.map(e => Math.floor(e * 2.54));

console.log('Option 4:', heightsInCm4);