/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = { };
animal.species = 'Cat';
animal["name"] = 'DOG';

animal.noises = [

];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 
var noises = [];
noises[0] = 'Bark';
noises.push('Meow');
noises.unshift('Chirp');
noises[noises.length] = "Moo";

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises
animal.noises.push('HEE')
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * 
 * The different ways to access a property on an object is by using dot notation or bracket notation. 
 *
 * 2. What are the different ways of accessing elements on arrays?
 * 
 * The different ways to access elements on an array is by using the index or a for loop. 
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
 
var animals = [];
animals.push(animal);
console.log(animals);

var duck = { 

species: 'duck', 
name: 'Jerome', 
noises: ['quack', 'honk', 'sneeze', 'woosh'] 

};

animals.push(duck);
console.log(animals);

var bear = { 
  species: 'bear', 
  name: 'Jamal', 
  noises: ['roar', 'roarrrrr']

};

var fish = { 
  species: 'fish', 
  name: 'Julian', 
  noises: ['silent', 'bubble']

}

animals.push(bear);
animals.push(fish);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//the data structure I would use to store a list of data would be an array because they will be easily accesible 

var friends = [];

function getRandom(animals){ 
  //created a function called getRandom that takes the previous "animals" array
  return Math.floor(Math.random() * animals.length)
   //return a random index of the input array (animals)      
}


//gets a random animal and adds its name to the empty friends array 
friends.push(animals[getRandom(animals)].name);
console.log(friends);

// Add the friends list as a property on one of the animals (using bracket notation)
animals[getRandom(animals)].friends = friends
console.log(animals);




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}