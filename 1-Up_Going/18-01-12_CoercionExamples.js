//Examples of explicit and implicit conversion from YDKJS U&G p.36


//EXPLICIT CONVERSION

var a = "42";

var b =  Number(a);

console.log(a);		// "42"	String!
console.log(b);		// 42	Number!

//IMPLICIT CONVERSION

var a = "42";

var b = a * 2;	// JS converts automagically, without my intervention.

console.log(a);		// "42"  String!
console.log(b);		//	84	Number!