function one() {
	//this variable 'a' only belongs to the 'one' fxn
	var a = 1;
	console.log(a);
}

function two() {
	//this variable 'a' only belongs to the 'two' fxn
	var b = 2;
	console.log(b);
}

one();	//1
two();	//2