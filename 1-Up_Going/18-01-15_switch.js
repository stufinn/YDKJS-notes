//the switch statement is helpful instead of if..else..if.. statements (i.e. multiple cases). Less verbose, clearer.

	var a = 0;


	switch (a) {			  //item in parenthesis is the expression to test. If case == a, then...
		case 0:
			console.log("Zero");
			break;
		case 1:
			console.log("One");
			break;
		case 2:
			console.log("Two");
			break;
		default:
			console.log("Some other number");
	}

	 // "Two"