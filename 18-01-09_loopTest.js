//loop test

const ACCESSORY_PRICE = 9.99;

var bank_balance = 100.00
var amount = 99.99;

//can we afford the cost plus the accessory price?

if ((amount + ACCESSORY_PRICE) < bank_balance) {
	console.log( "I'll take the accessory!");
	amount = amount + ACCESSORY_PRICE;
	console.log( "Total owing: " + amount.toFixed(2) );
	bank_balance = bank_balance - amount;
	console.log( "Bank balance: " + bank_balance.toFixed(2) );

}
//otherwise
else {
	alert( "No thanks, I can't afford that right now. ");
}
