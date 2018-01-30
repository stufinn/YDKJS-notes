for ( var i=1; i<= 5; i++ ) {
	(function() {
		var j = i;
		setTimeout( function timer(){
			console.log(j);
		}, j*0);			// why doesn't the INTERVAL increase - 1*1000, 2*1000 etc?  Stays ar 1*1000? Actually it DOES.  changing ms to 0 amkes them appear simultaneously!!
	})();
}

//this works now!  var j is assigned the value of i for each iteration of the for loop.
//EVEN better and simpler would be to use: "let i=1" in the for loop declaration, which will create a scope for each loop.