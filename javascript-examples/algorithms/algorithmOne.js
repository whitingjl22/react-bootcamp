for (var i = 0; i < 5; i++) {
  // 0,1,2,3,4
  console.log(i)
}

for (
  var i = 0;
  i < 5;
  i++ // 1,3,5
) {
  i = i + 1
  console.log(i)
}

for (
  var i = 0;
  i < 5;
  i++ // 3,7
) {
  i = i + 3
  console.log(i)
}

function y(num1, num2) {
  // 5,8
  return num1 + num2
}

console.log(y(2, 3))
console.log(y(3, 5))

function y(num1, num2) {
  //2,5,3,8
  console.log(num1)
  return num1 + num2
}
console.log(y(2, 3))
console.log(y(3, 5))

a = 15 // 15, 10, 10,
console.log(a)
function y(a) {
  console.log(a)
  return a
}
b = y(10)
console.log(b)

a = 15 // 15, 10, 20
console.log(a)
function y(a) {
  console.log(a)
  return a * 2
}
b = y(10)
console.log(b)

let arrOne = [1, 2, 3, 4, 5]
let arrTwo = [10, 20, 30, 40, 50]
let arrThree = [100, 200, 300, 400, 500]

function arrLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
  return arr
}

arrLoop(arrOne)
arrLoop(arrTwo)
arrLoop(arrThree)

function totalWithTip(billTotal, groupSize) {
  return (billTotal * 1.2) / groupSize
}

let totalPerPerson = totalWithTip(183.68, 1)

console.log(Math.ceil(totalPerPerson))
