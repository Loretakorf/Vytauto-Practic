// Sukurkime tris klases: produktai, krepselio produktai ir krepselis.

// Produktas turi savybes: id (number), pavadinimas (name), kaina (price), nuotraukos url (imagUrl), aprasymas(description) ir likutis(stock).
//  - id turi buti random sugeneruotas, kiekvienam produktui unikalus skaicius.
//     - šiam pratimui sukurkime produktus su id nuo 1 iki n.

// Krepselio produktas turi savybes: pavadinimas(name), kaina(price), nuotraukos url(imageUrl), aprasymas(description), kiekis(quantity) ir visa suma (totalPrice).
// SVARBU!: likutis ir kiekis nėra tie patys atributai!
//     Krepselio produktas turi paveldimuma (extends) is produktu klases.
//     Krepselio produktas konstruktoriuje priima produkta (klase) ir kieki. new CartProduct(product, quantity)
//         jei kiekis yra didesnis uz produkto likuti, tai kiekis turi buti lygus produkto likuciui.

//     Krepselio produktas turi du metodus:
//     1. didinti kieki (kiekis++)
//         - jis turi atnaujinti ir visa suma (totalPrice)
//     2. mažtinti kieki (kiekis--)
//         - jis turi atnaujinti ir visa suma (totalPrice)
//     3. nustatyti kieki (kiekis = number)
//         - jis turi atnaujinti ir visa suma (totalPrice)

// Krepselis turi savybes: krepselio produktus (cart products - array), bendra krepselio suma (totalCartPrice) ir bendra kiekis (totalCartQuantity).

// Krepselis turi metodus:
// 1. prideti produktus i krepseli (addProduct)
//     - jei krepselio produkto kiekis lygus 0, tai i krepseli preke neprisideda
//     - jei krepselyje jau yra toks produktas, tai turi didinti jo kieki
//     - atnaujinti bendra krepselio suma (totalCartPrice)
//     - atnaujinti bendra kieki (totalCartQuantity)
// 2. pasalinti produktus is krepselio (removeProduct)
//     - jei krepselyje yra toks produktas, tai turi mazinti jo kieki
//     - jei krepselyje yra toks produktas ir jo kiekis yra 0, tai turi pasalinti produktas is krepselio
//       - atnaujinti bendra krepselio suma (totalCartPrice)
//     - atnaujinti bendra kieki (totalCartQuantity)
// 3. pirkti produktus (buyProducts)
//     - console.log visus produktus
//     - console.log bendra krepselio suma (totalCartPrice)
//     - console.log bendra kieki (totalCartQuantity)
//     - turi pasalinti visus produktus is krepselio
//     - atnaujinti bendra krepselio suma (totalCartPrice)
//     - atnaujinti bendra kieki (totalCartQuantity)

// Produktu pavyzdiai su duomenimis:

// const products = [
//     {
//         id: 1,
//         name: 'Product 1',
//         price: 100,
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.',
//         stock: 10
//     },
//     {
//         id: 2,
//         name: 'Product 2',
//         price: 200,
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.',
//         stock: 20
//     },
//     {
//         id: 3,
//         name: 'Product 3',
//         price: 300,
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.',
//         stock: 30
//     },
//     {
//         id: 4,
//         name: 'Product 4',
//         price: 400,
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.',
//         stock: 40
//     },
// ];
class Product {
  constructor(name, price, imageURL, description, stock) {
    this.id = Math.round(Math.random() * 10 ** 16);
    this.name = name;
    this.price = price;
    this.imageURL = imageURL;
    this.description = description;
    this.stock = stock;
  }
}
const exampleProduct = new Product(
  "A Book",
  24.99,
  "#",
  "a very good book",
  10
);

const exampleProduct1 = new Product(
  "A Bike",
  300.99,
  "#",
  "a very good book",
  5
);

const exampleProduct2 = new Product(
  "Pillow",
  39.99,
  "#",
  "a very good book",
  100
);

class CartProduct extends Product {
  constructor(product, quantity) {
    super(
      product.name,
      product.price,
      product.imageURL,
      product.description,
      product.stock
    );
    const validQty = quantity > product.stock ? product.stock : quantity;
    this.assignQuantityAndTotalPrice(validQty);
  }
  increaseCount(newQty) {
    const currentQty = this.quantity + 1;
    if (newQty > this.stock) {
      return;
    }
    this.assignQuantityAndTotalPrice(newQty);
  }

  decreaseCount() {
    const newQty = this.quantity - 1;
    if (newQty < 0) {
      return;
    }
    this.assignQuantityAndTotalPrice(newQty);
  }

  assignQuantity(quantity) {
    if (quantity < 0 || quantity > this.stock) {
      return;
    }
    this.assignQuantityAndTotalPrice(quantity);
  }

  assignQuantityAndTotalPrice(quantity) {
    this.quantity = quantity;
    this.totalPrice = (this.price * 100 * quantity) / 100;
  }
}

const cartProduct = new CartProduct(exampleProduct, 11);
console.log(cartProduct); //9
cartProduct.increaseCount();
cartProduct.assignQuantity();
console.log(cartProduct);

class Cart {
  constructor() {
    this.products = [];
    this.totalPrice = 0;
    this.totalCartQuantity = 0;
  }
  addProduct(product) {
    let isAssignedQty = false;

    for (let innerProduct of this.products) {
      if (innerProduct.id === product.id) {
        // console.log("found one", innerProduct);
        const newQuantity = innerProduct.quantity + product.quantity;
        innerProduct.assignQuantity(newQuantity);
        isAssignedQty = true;
      }
    }
    if (!isAssignedQty) {
      this.products.push(product);
    }
    this.updateCartTotalPriceAndQuantity()
  }

  updateCartTotalPriceAndQuantity() {
    let newCartQty = 0;
    let newCartTotalPrice = 0;
    
    for(let product of this.products) {
       newCartTotalPrice+= product.totalPrice * 100;
       newCartQty += product.quantity;
    }
    this.totalCartPrice = newCartTotalPrice / 100;
    this.totalCartQuantity = newCartQty;

  }
}
const myCart = new Cart();
myCart.addProduct(cartProduct);
console.log(myCart);
