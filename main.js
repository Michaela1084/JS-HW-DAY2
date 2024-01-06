let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFood(person) {
    for (let category in person) {
        console.log(`${category.charAt(0).toUpperCase() + category.slice(1)}:`);

        if (Array.isArray(person[category])) {
            person[category].forEach(item => {
                console.log(`${item}`);
            });
        } else if (typeof person[category] === 'object') {
            for (let brand in person[category][0]) {
                console.log(`${brand}: ${person[category][0][brand]}`);
            }
        } else {
            console.log(`${person[category]}`);
        }
    }
}


favFood(person3)





class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    addAge(years) {
        this.age += years;
    }
}




let person1 = new Person("Jazmine", 26);
let person2 = new Person("Michael", 28);

person1.addAge(3);
person2.addAge(1)


person1.printInfo();
person2.printInfo();



function checkLength(sent) {
    return new Promise((long, short) => {
        if (sent.length > 10) {
            long("Big word");
        } else {
            short("Small word");
        }
    });
}

checkLength("Theres a snake in my boot")
    .then(good => {
        console.log(good)
    })
    .catch(bad => {
        console.log(bad)
    })