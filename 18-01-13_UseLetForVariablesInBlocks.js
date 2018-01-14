/* ES6 allows for finer control over variables taht are just used in certain blocks of code ie. any {..}
This allows for finer control over variables, and cleaner code that is easier to maintain over time. */

function foo() {
	var a = 1;

	if (a >= 1 ) {
		let b = 2;			// b is declared with let, and is only available within the scope of the if statement.

		while (b < 5) {
			let c = b * 2;	//c is declared with let and is only available within the scope of the if statement.
			b++;

			console.log(a + c)


		}
	}
}

foo();		// 5 7 9

a;			// 1
b;			// ReferenceError because only available in if statement block.
c;			// ReferenceError because only available in while statement block.