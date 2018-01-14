/*Exploration of concept of "hoisted" declarations, which allows variables and functions to be called
before they are actually declared.  This can happen because of the way in which JS compiles - will find
out more about this later.*/

var a = 2;

foo();					//function can be called before it is declared, below! Because of 'hoisting'

function foo() {		//function object is acutally declared here.
	a = 3;

	console.log(a);		// 3 - just this value for this scope

	var a;  // a declared to be a variable AFTER it is assigned a value and 'outputted' (term for this?) to the console.
}

console.log(a);			// 2 -was always 2 in this scope