let people =[
    {name: 'John',gender:"Male", age:100},
    {name: 'David',gender:"Female", age:40},
    {name: 'Anil',gender:"Male", age:20},
    {name: 'Suraj',gender:"Male", age:30}
]

let x = people.find(a => a.name === "Anil")
console.log(x);

let maleExist = people.some(m=>m.gender === "Male");

maleExist ? console.log("male exists") : console.log("only female exists")