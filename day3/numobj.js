let obj = { name: "xyz", id: 25, roll: 45, regid: "67" }

for (let x in obj)
    if ((typeof obj[x]) == "number") {
        obj[x] = obj[x] * 2;
    }

console.log(obj);