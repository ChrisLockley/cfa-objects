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
