//Modules, page 56

function CoolModule() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something);
	}

	function doAnother(){
		console.log( another.join( " ! ") );   //LOOK UP What built-in <expr>.join(..) function does***
	}
	//returns an [unnamed?] object, passing the funcitons as values to the outside world.
	return {
		doSomething: doSomething,  //the keys can be anything, but we've decided to keep them the same as the function names
		doAnother: doAnother
	};
}

var foo = CoolModule();   //var assignment actually executes the function, which needs to happen at least once.  Now foo points to the object, which contains the inner fxns, which have closure over the inner scope of  Cool Module();

CoolModule.doSomething();


foo.doSomething(); // cool
foo.doAnother();		// 1 ! 2 ! 3 


foo 				// "Object { doSomething: doSomething(), doAnother: doAnother() }""
foo.doSomething; 	// "function doSomething()"
foo.doAnother;		// "function doAnother()"