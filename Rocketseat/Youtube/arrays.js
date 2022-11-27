const arr = ["luffy", "naruto"]

arr.push("goku")

const n = arr.filter(ar => ar !== "naruto")
const p = arr.find(ar => ar !== "luffy")
const t = arr.includes("goku")
const newArr = [...arr, "frodo"]
const sliceArr = newArr.slice(1)

arr.pop()

console.log(arr)

const fruits = ["🍎", "🍏", "🍐", "🍒", "🍍", "🍌"]
const apples = fruits.map(fruit => "🍎")
const reverseFruits = [...fruits].reverse()

fruits.forEach(fruit => console.log(fruit))
console.log(reverseFruits)