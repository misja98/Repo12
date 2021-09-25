// Only change code below this line
var myPetsArray = [
{animalType: "Dog",
name:"Pujdo"
},
{animalType: "Cat",
name:"Maca"
},
{animalType: "Bird",
name:"Tweety"
}
];
function myPetsFunction(pets){
   var pets = myPetsArray[1].name
return pets

} 
// Only change code above this line

console.log(myPetsFunction(myPetsArray[1])); 
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;

