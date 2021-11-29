//array destructuring
let company =['cisco','microsoft','netflix','meta']

let company1,company2,rest;

[company1,company2,...rest] = company

console.log(company1)
console.log(company2)
console.log(rest)

//object destructuring

let emp = {"id":1,"name":"Kiran","job":"engineer","salary":"100000"}

let {id,name} = emp

console.log(id,name)