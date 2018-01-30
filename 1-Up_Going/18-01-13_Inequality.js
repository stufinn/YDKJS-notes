//Comparing string values

var a = 41;
var b = "42";
var c = "43";

a < b;  //true b/c if one or more of the values isn't a string, it coerces to #'s
b < c; //true because actually compares them alphabetically b/c both strings!  NOT coerced into #'s for this one. 