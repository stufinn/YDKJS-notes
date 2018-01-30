foo();

function foo() {
	console.log(1);
	
}

var foo = function() {
	console.log(2);		//duplicate variable declaration / therefore ignored.
};

function foo() {
	console.log(3); //3 - hoisted to top, and overrides previous function declaration
}