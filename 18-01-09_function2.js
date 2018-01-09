//18-01-09_function2.js

const TAX_RATE = 0.13;

function calcFinalPurchPrice(amt) {
//figure out what the final purchase price is going to be
	amt = amt + (amt * TAX_RATE);
	return amt
}

var amount = 99.99
amount = calcFinalPurchPrice(amount);

console.log( amount.toFixed(2) );

//purpose of excercise: fxn only used once, but it is useful for organizing the code