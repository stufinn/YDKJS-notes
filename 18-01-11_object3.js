function foo() {
	return 42; 	// need semicolon here
}   			// no semicolon here!

foo.bar = "hello world";   //assigning the function a property "Typically not done"
foo.you = "hiya!"			//assigning the function a property "Typically not done"


typeof foo;			// "function" - implies that it's a full type, but it's actually a an object subtype 

typeof foo();		// "number"

typeof foo.bar;		// "string"

foo.you;