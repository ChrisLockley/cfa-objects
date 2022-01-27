// create an object fruits with at least 5 fruits that have the name 
// of the fruit as the key and the value being the color of the fruit
let fruits = {
    banana: "yellow",
    kiwi: "green",
    apple: "red",
    blackberry: "black",
    orange: "orange"
};
// print out each value in that object manually
var apple = "apple";
console.log(fruits.banana);
console.log(fruits["kiwi"]);
console.log(fruits[apple]);
console.log(fruits.blackberry);
console.log(fruits["orange"]);
//then print out each value using a for loop
for (let fruit in fruits) {
    console.log(fruits[fruit]);
} 
//reassign one of the keys in the object to have a different value
fruits.orange = "blue";
// delete one of the properties in the object
delete fruits.kiwi;
// write a function that takes in an object and key and returns 
// that value at that key in the object
let objFunc = function(obj, key) {
    return obj[key];
}
console.log(objFunc(fruits, "banana"));

// this is sample JSON

let animals = {
    dog: {
      legs: 4,
      fur: true,
      sound: function() {
        return 'woof';
      },
      type: [
        {
          breed: 'Australian Shepherd',
          colors: 'brown black white',
          tail: false
        },
        {
          breed: 'German Shepherd',
          colors: 'black brown',
          tail: true
        },
        {
          breed: 'Golden Retriever',
          colors: 'yellow',
          tail: true,
        }
      ]
    },
    cat: {
      legs: 4,
      fur: true,
      tail: true,
      sound: function() {
        return 'meow';
      },
      type: []
    },
    lizard: {
      legs: 4,
      fur: false,
      tail: true,
      sound: function() {
        return '??????';
      },
      type: []
    }
};
  
// console.log(animals.dog.type.map((breed) => {return breed.breed}));
// console.log(animals.lizard.fur);
  
let animalFunc = (breed) => {
if (breed === 'Australian Shepherd') {
    return 'Saria';
}
return 'WoofBarkDog';
}

let { type } = animals.dog;

for (let breed of type) {
console.log(animalFunc(breed.breed));
}

// JSON and parsed

let animalString = JSON.stringify(animals);
console.log(animalString);

let animal = '{"dog":{"legs":4,"fur":true,"type":[{"breed":"Australian Shepherd","colors":"brown black white","tail":false},{"breed":"German Shepherd","colors":"black brown","tail":true},{"breed":"Golden Retriever","colors":"yellow","tail":true}]},"cat":{"legs":4,"fur":true,"tail":true,"type":[]},"lizard":{"legs":4,"fur":false,"tail":true,"type":[]}}'

let parsed = JSON.parse(animal);
console.log(parsed)

let array = [
    {

    },
    {

    },
    {

    }
]

console.log(array)

let stringArr = JSON.stringify();
console.log(stringArr)

// console log a stringarr

let student = {
    name: 'Chris',
    age: 12345,
    email: "takemeat911@email.com"
};

console.log(JSON.stringify(student));

// try, catch and finally

const a = 5;

try {
    console.log(b);
}
catch (err) {
    console.log("it borked, b aint real");
    //throw 'it did u grimey, cuhs';
}
finally {
    console.log(a);
}

// unless error inside catch
console.log("this will still be executed"); 

let funct = function(stringBruh) {
    try {
        if (typeof stringBruh === 'string') {
            throw "must be number"
        }
        else if (stringBruh < 5) {
            throw "too short"
        }
        else if (stringBruh > 12) {
            throw "too long"
        }
        return "valid"
    }
    catch (err) {
        console.log(err)
    }
}
console.log(funct(12))
console.log("lol")