// Destructuring Assignment and Spread Operator 2

// 1. Destructuring Assignment
const book = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    characters: ['Bilbo', 'Gandalf', 'Thorin', 'Smaug'],
    publication: {
        year: 1937,
        publisher: 'George Allen & Unwin'
    }
};

const { title, author, characters } = book
const { publication: {year, publisher} } = book


// 2. Spread Operator
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = {...obj1, ...obj2}
const obj4 = {...obj1}

console.log(obj3)
console.log(obj4)


// 3. Destructuring and Spread Together
const data = {
    numbers1: [1, 2, 3, 4],
    numbers2: [5, 6, 7, 8]
};

const array1 = data.numbers1
const array2 = data.numbers2

const array3 = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(array3)