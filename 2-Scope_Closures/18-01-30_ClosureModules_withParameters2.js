//"Slight but powerful variation, because the object that you are returning is called "publicAPI"

var foo = (function CoolModule(id) {
	function change() {
		//modifying the public API
		publicAPI.identify = identify2;
	}

	function identify1() {
		console.log( id );
	}

	function identify2() {
		console.log( id.toUpperCase() );
	}

	var publicAPI = {
		change: change,
		identify: identify1
	};

	return publicAPI;
})( "foo module" );

foo.identify();  // foo module
foo.identify;		// function identify1()

foo.change;		// function change()
foo.change();	//no ouput, just points the object reference publicApi.indentify to function identify2() instead


foo.identify(); //now this actually points to identify2() inner fxn - modifies the module instance from the inside. Can add/remove methods and properties AND change their values

foo.identify; // function identify2()