for ( var i=1; i<= 5; i++ ) {
	(function() {
		var j = i;
		setTimeout( function timer(){
			console.log(j);
		}, j*0);			// why doesn't the INTERVAL increase - 1*1000, 2*1000 etc?  Stays ar 1*1000? Actually it DOES.  changing ms to 0 amkes them appear simultaneously!!
	})();
}