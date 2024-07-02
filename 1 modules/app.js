const { findSum } = require("./custom")
const sums= [1,2,3,4,1,1,2,3,4]
const one = findSum(...sums)
const two = findSum(1,2)
const three = findSum(1,2,10,100)

console.log(one)
console.log(two)
console.log(three)