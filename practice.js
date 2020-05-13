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

//to call the function in the object above (which is a method) add ()

console.log(dog.saysHi());



//Advanced Array Methods 
//Any function called as an argument is called a "higher-order function"
//aka... A... callback! cause you're calling it back. get it??
//Callbacks
const functionFeeder = function(callback) {
	callback('Hello from inside the function feeder!');
};

functionFeeder((string) => { 
//invoking the function
//functionFeeder becomes a higher-order function
//or callback function 
// it can take a function as a parameter and execute a function when claled with a function sa the argument
console.log(string);

});


function sayHello(name){
	console.log(`Hello, ${name}`)

};

function callSayHelloWithLars(callback){
	const innerName = 'Lars';
	callback(innerName);
}
//callback becomes the saayHellofunction when you invoke it like this:

callSayHelloWithLars(sayHello);

//Callbacks are a way to 
//make sure certain code doesn’t execute until other code has already finished execution.



function doHomework(subject, callback){
	console.log(`Starting my ${subject} homework`);
	callback();
}

doHomework('math', function(){
	console.log('Finished my homework!');
});

//callbacks don't always have to be defined in our function.
//they can be defined elsewhere in our code like this:

function alertFinished(){
	console.log('Finished my homework!');
}

doHomework('math', alertFinished);
//in the way above, we've passed alertFinished function 
//as an argument during the doHomework call



const items = ['feathers', ' coupon', 'dead turkey', 'ancient stones from greece'];

for(let i = 0; i < items.length; i++){
	console.log(items[i]);
}

items.forEach(item => console.log(item));

const elements = ['earth', 'wind', 'fire', 'water'];

function showFirst(array, callback){
	callback(array[0])
};

//it's like injecting a function into another function


// showFirst(elements, (firstItem) => {
// 	console.log(firstItem);
// })

// showFirst(elements, (arrayLength))





//Higher Order Functions & callbacks 
//https://www.youtube.com/watch?v=Je3w0IFX5WQ&feature=youtu.be


//We can pass functions into other functions as parameters
//callback functions are the functions that are passed into 
//oher functions as arguments

//callback functons are passed in (into other functions as arguments)
//higher order functions receive (other functions)


//name of paraameter doesn't matter but the order does, the 
//callback comes last
function h0f(num1, num2, cb){
	return cb(num1, num2);
	//add(2,3)
	//if we pass..
	//subtract(3,3)
	//divide(3,4)
	//multiply(3,5)
}

const add = (num1, num2) => {
	return num1 + num2;
}

const subtract = (num1, num2) => {
	return num1 - num2;
}

const multiply = (num1, num2) => {
	return num1 * num2;
}

const divide = (num1, num2) => {
	return num1 / num2;
}


console.log(add(2,3));

//when we invoke higher-order functions, we're 
//passing it 3 arguments, 2 numbers, and another function as an argument
// the function we pass it is called the caallback function
//the function that it's passed into is called the higher order function
//when it's passed this, is it returns the callback 
console.log(h0f(2,3,add));


//to invoke each of these functions using the higher order function...
console.log(h0f(3,3, subtract));
console.log(h0f(3,4, divide));
console.log(h0f(3,5, multiply));




//Advanced Array methods
// forEach() -- did he read the documentation? #keith lol

//forEach must iterate through each item int he array without stopping
//forEach doesn't return a new array
//return statement is optional
//cna be super memory intensive (for loops may be better as you can make conditions.)

const cityData = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

//forEach is a higher-order function--
//the anonymous function is the callback, being passed in
//it accepts this anonymous function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


//item, below, the first parameter, is the item inside of the array.
//so we can use dot notation an object
//index is optional
//like in excel, the order of parameters matters (read the documentation!)
cityData.forEach(function(item, index){

	console.log(item.city);
	console.log(item.state);
	console.log(index);

});

//======= Challenge - Use .forEach() ======

// the event director needs both the last name 
//and tshirt size of each runner to send to the designer so that they can 
//design custumize race shirts for them. 
// combine both the last names and tshirt size and popular
// a new array called shirtorder
// create a new array

let shirtOrder = [];

//one way - for loop
//for this, use the forEach method

const people = [
{name: 'Becky', size: 's'},
{name: 'Tom', size: 'l'},
{name: 'Fred', size: 'xl'},
{name: 'Sarah', size: 'm'},
]
//UNLIKE MAP (below), forEach DOES NOT creaate a new array, unless we were to 
//create a new array and PUSH something to it!
//and the return is optional, unlike .map which requires a return statement

//for each loops through the entire array without stopping
people.forEach(function(shirt){
	//shirt is the "current value" (as in the DOCUMENTATION"
	//(parameter shirt could be called anything.. you're just calling it as the "current item" (in the array- AS PER THE DOCUMENTATION))
	shirtOrder.push(shirt.name + ' ' + shirt.size);
});

console.log(shirtOrder);



//you can sudo code (write in english steps needed to solve the problem)

//.map()
//returns a new array
//does not manipulate the original 
// this makes it an immutable
//good for converting data
// if you're thinking about looping, forEach is more appropriate

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const newCityData = cityData.map(function(item){
	//we already know it starts a new array, so we can just assign it the mapped original array
	//how do we take the states and change them to lowercase?
	//you're using a MAP method-- so you're not needing to push into it.
	//just got ahead and return it, it will go into the array alreadt
	//WHY?! DONT WE NEED cityData.push??? Because we have already declared above
	//that this is a new function using cityData
	return item.state.toLowerCase();
});

console.log(newCityData);

//why do you need the return?

//console.log is just a preview of code,
//a return statement actually asks it to return the thing you're asking it to do
//return specifies a value.
//the return asks the function to do what we want it to do

//return makes it DO something vs console.log, it doesn't DO anything other than showing in the console.

//.filter()
//also returns a new array
//does not manipulate the original
// (so it's an immutable )
//it filters out results into a new array 

//read the documentation! 
//it takes a callbcak function (an anonymous function)

const newCityFilter = cityData.filter(function(item){
	//true or false.
	//true is included
	//false is excluded
	return item.population >= 500000;
});

console.log(newCityFilter);

puppiesForDays = [
{name: 'Erik', year: 2012},
{name: 'Phil', year: 2013},
{name: 'A dog', year: 2006},

]

const puppers = puppiesForDays.filter(function(pup){
	return pup.year >= 2010;
});

console.log(puppers);


const newCityFilter2 = cityData.filter(function(item){
	return item.state === 'NY'
});


console.log(newCityFilter2);


//use reduce to get total land area


const totalLandArea = cityData.reduce(function(accumulator, item){
	return accumulator + item.land_area;
}, 0);

console.log(totalLandArea);



//THIS: 
//array1.forEach(element => console.log(element.city));

//Is the same as this: 
// cityData.forEach(function(item){
// 	console.log(item.city);
// })


//breakdown of reduce method 
//arr.reduce(callback(accumulator, currentValue){
	//with array methods think of it as you're using someone else's code
	//so read the c=documentation to see how it works. 
	//callback is the aononymous function. -- It takes those two arguments. 

	//here the order matters for the arguments

	//(item = currentElement being processed in the array, becaause you're going through an entire array)
//}, initialValue)



//Using forEach- take the state names and return them in a new array in lowercasae

const newCoolCityData = [];

cityData.forEach(function(item){
	newCoolCityData.push(item.state.toLowerCase());
});

console.log(newCoolCityData);


/*
  Callbacks functions are used everywhere in JavaScript.
  Remember that a callback is simply a function that is passed into another function.
  That function is then invoked inside the outer function and does some action.
  Take the following example
*/
  function sayHello(name) {
    console.log(`Hello, ${name}`);
  }

  function callSayHelloWithName(callback) {
    const innerName = 'Lars';
    callback(innerName);
  }

  callSayHelloWithName(sayHello);
    


/*
  Problem 1: Greet
  Create a function called `greet` that takes in a 'name' parameter
  simply use that function to alert the name provided;
  Next, create a function called `greetCaller` that takes a callback parameter
  our greetCaller function should declare a name variable and pass it to the callback.
  Invoke greetCaller with greet passed into it.
*/
// Higher order function-- this will receive the callback below


function propose(doesntSuck, name, callback){

	//tldr, you're calling the function inside of this one instead of outside...
	//it's that simple... instead of letting it run wild, you control it in here
	//the only difference is it gets called with the variables in here instead instead of the function
	//being called in the outside world

		//put the variables in here! 
		//you can't just call sayYes or SayNo without telling the function 
		//what the heck it needs to know
	return callback(doesntSuck, name);

}

//Callback function (Part one of the question above)
//put at the bottom for now so as to not confuse yourself
//take all the variables in here for these self-made ones
//think, only the girl(or receiver / guy) knows if they suck
// the propose is just spitting out the ask

function respond(doesntSuck, name){
	if (doesntSuck === true){
	console.log(`omfgosh, ${name} I do! Xoxo, Alice`)
	} else {
	console.log(`lol ${name} No way! Xoxo, Alice`)}
};

console.log(propose(false, 'Some guy', respond));

//console.log(greet('Betty'));
//Instead of doing the thing above, you're only going to call the higher-order function
//the higher order function is the only one getting called,
//the callback just hangs out in space til it's ready for it...
//this is weird but like a traditional marriage engagement-- woman waiting for a man to give them a ring.
//they've been ready with the lines but they have to wait around for the higher-order function to 
//run and call them. 
//AND NOW... the man is ready.. the woman has been ready this whole time...


/*
  Problem 2: forEach
  use .forEach to loop over the simpsons list and alert each name passed back to your anonymous callback to the console. 
*/

const simpsons = ['Marge', 'Lisa', 'Homer', 'Bart', 'Maggie'];

simpsons.forEach(function(item){
	console.log(item)
})
/*
  Problem 3: every
  create a function called `every` that takes in an array and a callback as it's parameters
  loop over every single item (using a native for loop) and pass each item to the callback
  When you're done, make sure 
  that you finish the code inside of `every` and ensure it works the way it's supposed to
*/

//THIS WAY YOU CAN DO ANYTHING 
//eg: say it only found names that start with N
//callbacks let you have customizable behavior

function every(array, callback){
	for (const item of array){
		//no return for a for loop
		//instead of this: console.log(item)
		//tell it to look at this:
		callback(item);
	}

}

function printElement(element){
	
	console.log(element);
}

function alertElement(element){
	
	alert(element);
}

every(simpsons, printElement);




//when it's done, what should I do? 



// every(simpsons, (/* don't forget your items */) => {
//   // fill this in.
//   // log ieach item that comes back to the console.
// });












