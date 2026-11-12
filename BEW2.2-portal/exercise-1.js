// Arrow Functions and Array Methods in JavaScript

// 1.  .map() method and Arrow Functions
const numbers = [1, 2, 3, 4, 5];

const numSquare = numbers.map(num => num * num)
console.log(numSquare)

// 2. .filter() method and Arrow Functions
const newNum = numbers.filter(num => num > 2)
console.log(newNum)

// 3. .forEach() method and Arrow Functions
const nums = numbers.forEach(num => console.log(num))

// 4. .find() method and Arrow Functions
const num3 = numbers.find(n => n % 3 === 0)
console.log(num3)

// 5. Chaining Methods
const result = numbers.filter(num => num > 2).map(n => n * n)
console.log(result)