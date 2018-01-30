//"Modules are just functions, so they can recieve parameters" page 59

function CoolModule(id) {
	function identify() {
		console.log(id);
	}
	return {		//return an unnamed object with the identified "identify, which points to the fxn identify()"
		identify: identify  //key can be anything, we chose the name of the fxn, "identify"
	};
}

var foo1 = CoolModule( "foo 1");  	/*for this instance, the var foo1 is assigned the results of executing CoolModule() fxn, with "foo1 passed in as the ID variable"
									i.e. an object identify. It passes in the string "foo 1 " The outer fxn evaluates to the OBJECT identify, which is assigned to foo1. */

var foo2 = CoolModule( "foo 2");


foo1.identify();    // foo 1
foo1.identify; 		// function identify()

foo2.identify();	// foo 2
foo2.identify; 		// function identify()


