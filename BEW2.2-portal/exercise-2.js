// Advanced Array Methods and Arrow Functions in JavaScript

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
  { title: '1984', author: 'George Orwell', ratings: 4.7 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
  { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
];

// 1. .filter() and Arrow Functions
const highRate = books.filter(book => book.ratings > 4)
console.log(highRate)

// 2. .map() method and Arrow Functions
const title = books.map(book => book.title)
console.log(title)

// 3. .find() method and Arrow Functions
const findBook = books.find(book => book.title === "1984")
console.log(findBook)

// 4. .sort() method and Arrow Functions
const sortedBook = books.sort((a, b) => b.ratings - a.ratings)
console.log(sortedBook)

// 5. Chaining Methods
const highestRating = books.sort((a,b) => b.ratings - a.rating)
console.log(highestRating[0].title)