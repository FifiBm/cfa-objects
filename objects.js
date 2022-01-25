// create an object fruits with at least 5 fruits that have the name of the fruit as the key and the value being the color of the fruit
// print out each value in that object manually

let fruits = {
    banana: 'yellow',
    mango: 'orange',
    apple: 'white',
    orange: 'orange',
    lemon: 'green',
};
console.log(fruits['banana']);
console.log(fruits['mango']);
console.log(fruits['apple']);
console.log(fruits['orange']);
console.log(fruits['lemon']);

//then print out each value using a for loop

for (let fruit in fruits) {
    console.log(fruits[fruit]);     
}

//reassign one of the keys in the object to have a different value
fruits.lemon = 'yellow';

console.log(fruits.lemon);

// delete one of the properties in the object

delete fruits.lemon;

// write a function that takes in an object and key and returns that value at that key in the object

let strObj = function(object, key) {
   return object[key];
}
    console.log(strObj(fruits, 'mango'));
