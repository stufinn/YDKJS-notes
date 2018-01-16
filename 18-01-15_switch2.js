
var age = prompt("What is your age?");

switch (true) {              //Any case that evaluates to true will be a match
	case age <= 10:
		console.log("You're a child");
		break;
	case age < 17:
		console.log("You're a teenager");
		break;
	case age <= 35:
		console.log("You're a young adult");
		break;
	default:
		console.log("Sorry, you're old.");
}