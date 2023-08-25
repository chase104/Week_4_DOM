



let names = ["Chase", "Bob", "George", "sarah", "jim"]

// i = 0;

for (let i=0; i<names.length; i++) {
    if (names[i].length > 3) {
        names.splice(i, 1)
        i--
    }
};


let shortNamesArray = names.filter((element) => {
    if (element.length > 3) {
        return false
    } else {
        return true
    }
    // return element.length <= 3
})

names = shortNamesArray;


let shortNames = names.filter((element) => {
    if (element.length > 5) {
        return false;
    } else {
        return true;
    }
     
})



let nameLengths = names.map((oneElement) => {
    return oneElement.length;
});

// console.log(nameLengths);

let users = [
    { name: "Chase", points: 200},
    { name: "Bob", points: 150},
    { name: "Yian", points: 500}
]

let usersWithLotsOfPoints = users.filter((person) => {
    if (person.points >= 200) {
        return true
    } else {
        return false
    }
})
console.log(usersWithLotsOfPoints);
let newUsers = users.map((element) => {
    let newObject = {...element};
    newObject.points += 10;
    return newObject;
})







// let totalPoints = 0;

// users.forEach((element) => {
//     console.log("couting points of " + element.name);
//     console.log("adding ", + element.points);
//     totalPoints += element.points
// })

// console.log(totalPoints);

// add 10 points to everyone!

users.forEach((element) => {
    element.points += 10
})
console.log(users);

const booksArray = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 234 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
    { title: '1984', author: 'George Orwell', pages: 328 },
    { title: 'The Great Gatsby', author: 'J.D. Salinger', pages: 180 },
    { title: 'Pride and Prejudice', author: 'Harper Lee', pages: 279 },
    { title: 'The Hobbit', author: 'George Orwell', pages: 310 },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.D. Salinger', pages: 309 },
    { title: 'Moby-Dick', author: 'Harper Lee', pages: 585 },
    { title: 'Brave New World', author: 'George Orwell', pages: 325 },
    { title: 'The Lord of the Rings', author: 'J.D. Salinger', pages: 1178 },
    { title: 'The Odyssey', author: 'Harper Lee', pages: 324 },
    { title: 'Fahrenheit 451', author: 'George Orwell', pages: 227 },
    { title: 'Sense and Sensibility', author: 'J.D. Salinger', pages: 352 },
    { title: 'The Fellowship of the Ring', author: 'Harper Lee', pages: 423 },
    { title: 'Harry Potter and the Chamber of Secrets', author: 'George Orwell', pages: 341 },
    { title: 'The Scarlet Letter', author: 'J.D. Salinger', pages: 238 },
    { title: 'Wuthering Heights', author: 'Harper Lee', pages: 416 },
    { title: 'Dracula', author: 'George Orwell', pages: 418 },
    { title: 'The Picture of Dorian Gray', author: 'J.D. Salinger', pages: 304 },
    { title: 'Hamlet', author: 'Harper Lee', pages: 342 }
  ];


const filterAuthorAndPages  = (author, maxPages) => {

    let arrayOfMatchedBooks = booksArray.filter((book) => {
        if (book.author === author && book.pages < maxPages) {
            return true;
        } else {
            return false
        }

        // return book.author === author && book.pages < maxPages
    })

    return arrayOfMatchedBooks;
}



let arrayOfBooks = filterAuthorAndPages("Harper Lee", 400);

console.log(arrayOfBooks);


let arrayOfBooks2 = filterAuthorAndPages("George Orwell", 700);
console.log(arrayOfBooks2);