class Cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }
  getVolume() {
    return Math.PI * this.radius * this.radius * this.height;
  }
  getSurfaceArea() {
    const result = 2 * Math.PI * this.radius * (this.radius + this.height);
    console.log(this);
    return result;
  }
}
const cylinder = new Cylinder(2, 10);

console.log(cylinder.getSurfaceArea());

class Book {
  constructor(name, author, pageCount, yearOfIsssiue, printHouse) {
    this.name = name;
    this.author = author;
    this.pageCount = pageCount;
    this.yearOfIsssiue = yearOfIsssiue;
    this.printHouse = printHouse;
  }
}

const book = new Book();

const hemingway = new Book(
  "For Whom the Bell Tolls",
  "Ernest Hemingway",
  350,
  1940,
  "Charles Scribner's Sons"
);
const tolkien = new Book(
  "The Lord of the Rings",
  "J. R. R. Tolkien",
  1216,
  1954,
  "Allen & Unwin"
);
const tolkien2 = new Book(
  "The Hobbit",
  "J. R. R. Tolkien",
  310,
  1937,
  "Allen & Unwin"
);
const tolkien3 = new Book(
  "The Silmarillion",
  "J. R. R. Tolkien",
  400,
  1977,
  "Allen & Unwin"
);

const remarque = new Book(
  "All Quiet on the Western Front",
  "Erich Maria Remarque",
  352,
  1929,
  "Harcourt, Brace and Company"
);
const remarque2 = new Book(
  "Three Comrades",
  "Erich Maria Remarque",
  320,
  1936,
  "Harcourt, Brace and Company"
);

const herbert = new Book("Dune", "Frank Herbert", 604, 1965, "Chilton Books");
const herbert2 = new Book(
  "Dune Messiah",
  "Frank Herbert",
  512,
  1969,
  "Chilton Books"
);
const herbert3 = new Book(
  "Children of Dune",
  "Frank Herbert",
  512,
  1976,
  "Chilton Books"
);
const herbert4 = new Book(
  "God Emperor of Dune",
  "Frank Herbert",
  512,
  1981,
  "Chilton Books"
);

class Library {
  constructor(nameOfLibrary, address, books = []) {
    this.nameOfLibrary = nameOfLibrary;
    this.address = address;
    this.books = [...books]; //spread  darome kopija,nemutojame
  }

  addBook(book) {
    this.books.push(book);
  }
  removeBook(book) {
    //books -[daug knygu]
    //book herbert4
    //result [hemingway]
    const result = []; //kad nemutavo
    for (let listBook of this.books) {
      //  const isBookToRemove = listBook.book === book.book;//liginame
      //  console.log('cycle', isBookToRemove);
      if (listBook.name !== book.name) {
        result.push(listBook);
      }
    }
    this.books = result;
  }
  bookCount() {
    return this.books.length;
  }
  bookList() {
    return this.books;
  }
  bookListByAuthor(author) {

    const result = [];

    for (let book of this.books) {
      if (book.author === author) {
        result.push(book);
      }
    }
    return result;
  }
  bookListByPublisher(printHouse) {
    for (let book of this.books) {
      if (book.printHouse === printHouse) {
      }
    }
  }
  bookListByYear(yearOfIsssiue) {
    for (let book of this.books) {
      if (book.yearOfIsssiue === yearOfIsssiue) {
        // ...sprendimas cia...
      }
    }
  }
  bookListWithPagesGreaterThan(pageCount) {} //< or >
  bookListWithPagesLessThan(pageCount) {}
}
const library = new Library("Biblioteka", "Vilnius");
const vilniausBiblioteka = new Library(
  "Martyno Mazvydo biblioteka",
  "ugnes g",
  [herbert4]
);
vilniausBiblioteka.addBook(hemingway);
vilniausBiblioteka.removeBook(herbert4);
console.log(library.addBook(hemingway));
console.log(vilniausBiblioteka);
// console.log(library.addBook(herbert));
// console.log(library.bookListByAuthor("Frank Herbert"));
