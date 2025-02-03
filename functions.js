/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(arr, string){ //function takes an array of animals and a string representing their name
    for (var i = 0; i < arr.length; i++){ //for loop iterates through the array positively 
        if(arr[i].name === string){ //if statement that says if the current animals name matches the string representing their name
            return arr[i]; //return the matching animals object 

        }
    
    }

    return null; //if not return null 

};



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){

    for(var i = 0; i < animals.length; i++){ //loop through animals array 
        if(animals[i].name === name){ //if name in animals array equals the name string
            return animals[i] = replacement //return animals object with replacement function


        }

    }


};

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){

   for(var i = 0; i < animals.length; i++){ //for loop that inerates through animals array
    if(animals[i].name === name){//if name in animals array equals the name string
        animals.splice(i, 1); //remove the animal from the array using splice method
        

    };


   }
};

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
    if(!(animal.hasOwnProperty('name') && animal.name.length > 0)){
        return;
        //if statement checks if animal doesnt have a property called name and if the array is greater than zero
    }

    if(!(animal.hasOwnProperty('species') && animal.species.length > 0)){
        return; // returns the function if both are true
        //if statement checks if animal doesnt have a property called species and if the array is greater than zero

    }

    for(var i = 0; i < animals.length; i++){ //loop through animals array 
        if(animals[i].name === animal.name){ //if name in animals array equals the name string
            return;

        }

    }

    animals.push(animal);
    //adds the animal to the array if conditions are met
};


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}