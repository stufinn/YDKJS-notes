//indirect

var fn;  //globally scoped variable

function foo() {
	var a = 2;

	function baz() {
		console.log(a);
	}

	fn = baz; //assign baz to global variable fn
}

function bar() {
	fn();   //execute fn, which now references the inner fxn bar ==> so bar is globally accessible, which means that a is accessible anywhere
}

foo(); //assigns bar to fn

//fn(); //2

bar(); //2