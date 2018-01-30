/* if a variable is  assigned without formally declaring, even with a scope, JS will automatically assign the 
variable to the global scope, which is a very bad idea and not good practice at all*/

//eg.

function foo() {
//	var a;		//this is what should be here
	a = 1;
}

foo(); //calls function, which assigns the value 1 to a.

a;		/* This should return ReferenceError because the var was assigned a value in the scope of foo fxn,
		but becausethe var wasn't formally defined, it becomes global and therefore available outside of the scope.
		NOT good practice or a good idea. */

