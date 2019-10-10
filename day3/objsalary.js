
let arr = [{ name: "abc", salary: 20000 }, { name: "def", salary: 30000 }, { name: "klm", salary: 40000 }, { name: "xyz", salary: 50000 }]

let avg, sum = 0

for (let x in arr) sum = sum + arr[x].salary
avg = sum / arr.length

console.log(`sum of salary = ${sum}, average of salary = ${avg}`)
