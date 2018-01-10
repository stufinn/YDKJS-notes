//program to purchase as many phones as possible within buget, and with each purchase also get an accessory if I have not passed a mental threshold.

//constants:
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 200;

//variables:
var bank_balance = 303.91;
var amount = 0;
var number_of_accessories = 0;
var number_of_phones = 0;


function calculateTax(amount) {
	//calculate the tax (but don't add it)
	return (amount * TAX_RATE);
}

function formatAmount(amount) {
	//format amount to be "$_____"
	return (amount = "$" + amount.toFixed(2));
}

while (amount < bank_balance) {
	//Purchase a phone!
	amount += PHONE_PRICE;
	number_of_phones += 1;

	if (amount < SPENDING_THRESHOLD) {
		//Purchase an accessory!
		amount += ACCESSORY_PRICE;
		number_of_accessories += 1;
	}

	else {
		console.log("You can't purchase another accessory!");
	}
}

//Add tax
amount = amount + calculateTax(amount);
//Print total number of phones to purchase
console.log(number_of_phones);
//print total number of accessories to purchase
console.log(number_of_accessories);

//print the total price
console.log( "your purchase:" + formatAmount(amount) );

//Can I afford the final amount?
if  (amount > bank_balance) {
	console.log("You cannot afford this purchase!");
}

