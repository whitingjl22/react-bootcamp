/// The concat method can be used to merge two or more arrays ///
const numbers = [1, 2, 3]
const otherNumbers = [4, 5, 6]
const numbersConcatenated = numbers.concat(otherNumbers)
//console.log(numbersConcatenated) // [1, 2, 3, 4, 5, 6]


// You can merge as many arrays as you want ///
function concatAll(arr, ...arrays) {
  return arr.concat(...arrays)
}

const array1 = [{id: 1, name: "John"}, {id: 2, name: "Sam"}]
const array2 = [{id: 3, name: "Bob"}, {id: 4, name: "Ashley"}]
const array3 = [{id: 5, name: "Alex"}, {id: 6, name: "Nicole"}]

//console.log(concatAll(array1, array2, array3))
//[ { "id": 1, "name": "John" }, { "id": 2, "name": "Sam" }, { "id": 3, "name": "Bob" }, { "id": 4, "name": "Ashley" }, { "id": 5, "name": "Alex" }, { "id": 6, "name": "Nicole" } ]


/// SLICE: Find passed in index then returns remaining items
const numbers = [100, 200, 300, 400, 500] 
const copy = numbers.slice(1)

//console.log(copy) // [ 200, 300, 400, 500 ]
