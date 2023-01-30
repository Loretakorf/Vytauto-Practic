class A {
    constructor() {
        this.first = 'first attribute';
        this.second = 'second attribute';
    }
    test() {
        console.log('say test');
    }
}
const myAClass = new A();
myAClass.test();

console.log(myAClass);
class SuperA extends A {
    constructor() {
        super();
        
        this.third = 'third attribute'
    }
}
const mySuperAClass = new SuperA();
mySuperAClass.test();

class Person {
    constructor(name) {
        this.name = name;
        this.age = age;
        // this.greet =() => {
        //     console.log(' my name' = this.name);
        // }
    }
    greet() {
        console.log(' my name' = this.name);
    }
}
const petras = new Person("petras", 18);
const jonas = new Person("jonas", 23);

class Admin extends Person {
    constructor(name, age, email) {
        super(name, age);//iskvecia person constructor
        console.log('admin', this.name);
        this.email = email;
    }
    greet() {
        console.log('Sir, my name is' = this.name);
    }
    giveContacts() {
        console.log('email' + this.email);
    }
}
const jonasAdmin = new Admin("Jonas", 32, "pet@gmail.com");
jonasAdmin.greet();
jonasAdmin.giveContacts();