class User {
  name = null;
  role = null;
  isHappy = true;
  constructor(name, role = "student") {
    console.log("called");
    // this[example] = example;
    // this.example = "text"
    this.name = name;
    this.role = role;
  }
  sayHi() {
    console.log(this.name + " says hi");
  }
}

// let obj = {
//     addAttr() {
//         this.attr = true;
//         obj.attr =true;
//     },
// };
// obj["text"] = "text"
// obj.example = "text"
// obj.addAttr();
const vytasUser = new User("Vytas", "lecturer");
const jonasUser = new User("Jonas");
const petrasUser = new User("Petras");

const myUser = new User("text");

console.log(myUser); //User {}
console.log(vytasUser, jonasUser, petrasUser);
vytasUser.sayHi();
jonasUser.sayHi();
petrasUser.sayHi();

class Product {
  title = null;
  price = null;
  quantity = null;

  isOutOfStock = null;
  isDiscounted = false;
  canBeDelivered = null;
  constructor({ title, price, quantity, weight }) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
    this.isOutOfStock = quantity <= 0;
    this.canBeDelivered = !weight || weight < 200;
  }
}
const formData = {
    title: "Knyga",
    price: "10.00",
    quantity: 20,
    weight: null,
};
const formData2 = {
    title: "Knyga 2",
    price: "10.00",
    quantity: 20,
    weight: null,
    isDraft: true,
};
const firstProduct = new Product(formData);
const secondProduct = new Product({
    ...formData2,
    title: "Hello",
})
const isProduct = firstProduct instanceof Product; // like typeof
console.log(isProduct); // true
// function createProduct({title, price, quantity, weight}) {
//     return {
//         title,
//         price,
//         quantity,
//         isOutOfStock: quantity > 0 ? false : true,
//         isDiscounted: false,
//         canBeDelivered: !weight || weight < 200,
//     }
// }// perdarom i classe

// Create a class named "Worker" which accepts a name argument in its constructor.
// If a name argument is not provided, use a default value "unnamed"

//     The class has two attributes:
//     - name (string, from the constructor)
//     - accumulatedCost (number, starts at 0)

//     The class has two methods:
//     - doJob(): logs to the console the following string `${name} has done a job!`,
//         and increments the accumulated cost by 500.
//     
//     - payWorker(): logs to the console the following string `${name} has been paid ${accumulatedCost}`,
//         and then the accumulated cost is reset to 0.


class JobWorker {
    name;
    accumulatedCost = 0;
    constructor(name = "unnamed") {
        this.name = name;
    }
    doJob() {
        console.log(`${this.name} has done a job!`);
        this.accumulatedCost += 500; 
    };
    payWorker() {
        console.log(`${this.name} has been paid ${this.accumulatedCost}`);
        this.accumulatedCost = 0;
    }
}
const may = new JobWorker("May");
const unnamedWorker = new JobWorker();
console.log(may);
console.log(unnamedWorker);
may.doJob();
may.payWorker();