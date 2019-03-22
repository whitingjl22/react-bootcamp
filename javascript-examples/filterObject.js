let homies = [
  { name: "Bob", age: 20, sex: "M" },
  { name: "Ashley", age: 21, sex: "F" },
  { name: "Brian", age: 18, sex: "M" },
  { name: "Josh", age: 23, sex: "M" },
  { name: "Holly", age: 17, sex: "F" },
  { name: "Nicole", age: 25, sex: "F" }
]

let getHomiesWhoCanDrink = (homies) => homies.filter((a) => a.age >= 21)
let getHomiesUnderage = (homies) => homies.filter((a) => a.age < 21)
let getMales = (homies) => homies.filter((a) => a.sex === "M")
let getFemales = (homies) => homies.filter((a) => a.sex === "F")
let getAvgAge = (homies) => homies.reduce((a, b) => a + b.age, 0) / homies.length

let malesWhoCanDrink = getHomiesWhoCanDrink(getMales(homies))
let femalesWhoCanDrink = getHomiesWhoCanDrink(getFemales(homies))
let malesUnderage = getHomiesUnderage(getMales(homies))
let femalesUnderage = getHomiesUnderage(getFemales(homies))
let femalesAvgAge = getAvgAge(getFemales(homies))
let malesAvgAge = getAvgAge(getMales(homies))
let homiesAvgAge = Math.round(getAvgAge(homies))

console.log(femalesWhoCanDrink)
