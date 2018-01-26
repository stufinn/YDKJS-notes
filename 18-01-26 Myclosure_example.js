function secretPassword() {
	var password = prompt();

	function printPswd() {
		console.log(password);
	}
	outsideFunction( printPswd );
}

function outsideFunction( pP ) {
	pP();
}

outsideFunction(); //prints out password in the console.  In reality, this just demonstrate that that vairable password is alive and well because of printPswd's closure over secretPassword's inner scope