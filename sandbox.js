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


checkForSword(adventurer2)




// make a function that gets an adventurer and checks if the companion of the companion has a sword