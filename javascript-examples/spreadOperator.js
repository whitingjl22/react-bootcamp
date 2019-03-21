let myInfo = {
  name: "Jeremy Whiting",
  age: 33,
  address: "Milwaukee, Wisconsin"
};

let updatedInfo = { ...myInfo, age: 21, address: "Miami, Florida" };
let additionalInfo = { ...updatedInfo, career: "Baseball Player" };

console.log(additionalInfo);

// console.log(myInfo); // { name: 'Jeremy Whiting', age: 33, address: 'Milwaukee, Wisconsin' }
// console.log(updatedInfo); // { name: 'Jeremy Whiting', age: 21, address: 'Miami, Florida' }

let bobBarker = {
  first: "Bob",
  middle: "Butt-face",
  last: "Barker"
};

let happyGilmore = { sirName: "Mr.", ...bobBarker }; // { sirName: 'Mr.', first: 'bob', middle: 'Butt-face', last: 'Barker' }

// console.log(happyGilmore);
// console.log(bobBarker.first);
