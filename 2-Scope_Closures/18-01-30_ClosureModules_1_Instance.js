//alternate approach to executing the outer function is to make it an IIEF.  Do this when you only care to have one instance (don't want to run again and again)

var foo = (function CoolModule() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log( something );
	}

	function doAnother() {
		console.log( another.join( " ! ") );
	}

	return {
		doSomething: doSomething,  //the keys can be anything, but we've decided to keep them the same as the function names
		doAnother: doAnother
	};

})();

foo.doSomething(); // cool
foo.doAnother();	// 1 ! 2 ! 3