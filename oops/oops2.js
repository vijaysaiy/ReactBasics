class Person {
    constructor(pname,gender,age){
        this.pname = pname;
        this.gender = gender;
        this.age = age;
    }
    getDetails(){
        console.log(`name: ${this.pname}, gender: ${this.gender},age: ${this.age}`);
    }
}

let p1 = new Person("vijay","male",21)
let p2 = new Person("suraj","male",24)
p1.getDetails();
p2.getDetails();