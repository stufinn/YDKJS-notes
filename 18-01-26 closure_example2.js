function foo() {
	var a = 2;

	function bar() {
		console.log(a);
	}
	return bar;
}

foo();   // function bar(); - this is what appears in the console

var baz = foo(); //baz becomes foo EXECUTED, which is the function bar();

baz();  //2  -->this calls the inner function bar();, which has closure over foo's inner scope, therefore it has access to the value of a :)