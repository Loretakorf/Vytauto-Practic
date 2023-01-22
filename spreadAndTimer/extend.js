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
    }
    greet() {
        console.log(' my name' = this.name);
    }
}
const petras = new Person("petras", 18);

class Admin extends Person {
    constructor(name, age, email) {
        super(name, age);
        console.log('admin', this.name);
        this.email = email;
    }
    giveContacts() {
        console.log('email' + this.email);
    }
}
const jonasAdmin = new Admin("Jonas", 32, "pet@gmail.com");
jonasAdmin.greet();
jonasAdmin.giveContacts();