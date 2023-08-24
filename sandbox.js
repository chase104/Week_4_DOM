const adventurer = {
	name: 'Timothy',
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat",
		companion: {
			name: "Tim",
			type: "Parasite",
			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
		}  
	}
}

const adventurer2 = {
	name: 'Eleanor',
	hitpoints: 15,
	belongings: ["bow", "healing herbs", "map"],
	companion: {
		name: "Aria",
		type: "Falcon",
		companion: {
			name: "Finn",
			type: "Spirit",
			belongings: ["Enchanted amulet", "sword", "ethereal cloak"]
		}  
	}
}


let checkForSword = (person) => {
    let arrayToCheck = person.companion.companion.belongings;

    // do we have that array?
    if (arrayToCheck) {

        // go through the array and check if there is 1 sword

        let hasSword = false;

        arrayToCheck.forEach((item) => {
            if (item === "sword") {
                hasSword = true;
            }
        })



        if (hasSword === false) {
            console.log("there is no sword");
        } else {
            console.log("there IS a sword!");
        }
    }
}


// checkForSword(adventurer)




// make a function that gets an adventurer and checks if the companion of the companion has a sword



const movies = [
    {
        title: "Tokyo Story",
        director: "Yasujirō Ozu",
        year: 1953,
        genre: "Drama"
    },
    {
        title: "Paul Blart: Mall Cop",
        director: "Steve Carr",
        year: 2009,
        genre: "Comedy"
    },
    {
        title: "L'Avventura",
        director: "Michelangelo Antonioni",
        year: 1960,
        genre: "Mystery"
    }
];



let returnOlderMovies = (year) => {
    // loop throug the array
    // only include movies that have an older year
    // make a NEW array and ONLY send the older movies
   let newArray = movies.map((movie)=>{
    // movie is the object with .title .director .year .genre
    // ONLY return the correct movies!
    if (movie.year < year) {
        return movie
    }
   })
}

// returnOlderMovies(1965)


const foods = [
    {
        name: "Apple",
        calories: 95,
        protein: 0.5
    },
    {
        name: "Chicken Breast",
        calories: 165,
        protein: 31
    },
    {
        name: "Spinach",
        calories: 7,
        protein: 0.9
    },
    {
        name: "Pasta",
        calories: 200,
        protein: 7
    },
    {
        name: "Salmon",
        calories: 206,
        protein: 22
    },
    {
        name: "Banana",
        calories: 105,
        protein: 1.3
    },
    {
        name: "Greek Yogurt",
        calories: 150,
        protein: 15
    }
];

const returnLowerCalories = (maxCalories) => {

    //  []
    const newArray = foods.map((foodItem) => {
        // if calories are good for this item, return it!
        if (foodItem.calories < maxCalories) {
            return foodItem
        }
    })
    console.log(newArray);
}

returnLowerCalories(170);