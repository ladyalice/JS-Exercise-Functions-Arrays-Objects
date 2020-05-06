//Array + Object pratice (cause I'm stuck on easy stuff in the challenge area)


let studentNames = ["anna", "betty", "Suzie", "Jay"];
console.log(studentNames);
//Mutable array methods
//change the array
studentNames.splice(1,3)
// index you start at, # of items you want to remove

console.log(studentNames);



//Immutable array Methods (v push / pop / shift)
//slice creates a brand new array,
let otherStudents = ["anna", "betty", "Suzie", "Jay"];


console.log(otherStudents);

//slice is inclusive- so it INCLUDES the items in index 1. 
//and will not include items at index 2 (exclusive)
otherStudents.slice(1,2);
//(index you start at,  index you end at)
console.log(otherStudents);

//take all elements in another array and create a new array

let anotheraaray = [...otherStudents];
anotheraaray.pop();
console.log(studentNames);
console.log(anotheraaray);

//Objects
let dog = {
	name: 'Puppy',
	friends: [],
	//if there is no function name, then it's an anonymous function
	
	//a function as a value on an object is a method
	//console.log is a method... legnth is a property
	//we call methods with the dot 
	saysHi: function(){
		return "Sunny says hi"
	},

}

//to call the function add ()

console.log(dog.saysHi())