//inheritance

class Animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(`${this.name} makes a noise `)
    }
}
class Dog extends Animal{
    constructor(name,color="white"){
        super(name)
        this.color=color

    }
    speak(){
        console.log(`${this.name} barks`)
    }
}
class Cat extends Animal{
    constructor(name,color="white"){
        super(name)
        this.color=color

    }
    speak(){
        console.log(`${this.name} meows`)
    }
}

let animal = new Animal("lion")
let animal1 = new Dog("dog")
let animal2 = new Cat("cat");
animal.speak()
animal1.speak()
animal2.speak()