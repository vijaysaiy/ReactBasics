//Task 

class Employee {
    constructor(eid,ename,job,salary){
        this.eid = eid;
        this.ename =ename;
        this.job = job;
        this.salary = salary;
    }
    getDetails(){
        console.log(`Id: ${this.eid}, Name: ${this.ename}, Job: ${this.job}, salary: ${this.salary}`)
    }
}

let e1 = new Employee(101,"kiran","Trainer",5000)
let e2 = new Employee(102,"ram",'Developer',1000)

e1.getDetails()
e2.getDetails()