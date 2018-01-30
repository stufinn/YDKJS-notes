function coolModule() {
	var something = "cool";
	var another = [1 ,2 ,3 ];

	function doSomething() {
		console.log( something );  //something variabvle not explicitly passed in, but the function has lexical scope over it.
	}

	function doAnother() {
		console.log( another.join( "!" ) );
	}

	return {
		One: doSomething,   //One and Two can be named anything, even the same thing as the functions!!
		Two: doAnother 
	};
}

var foo = coolModule();

foo.One();  //cool
foo.Two();	// 1 ! 2 ! 3 !


