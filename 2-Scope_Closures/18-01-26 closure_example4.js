for (var i=1;i<=5;i++) {
	setTimeout( function timer(){
		console.log( i );
	}, i*1000 );
}

//Doesn't work properly because the i in timer() refers to the global scope in which i resides, which evaluates to the value at the end of the for loop.
//in order for this to work, need to create an inner scope in which i gets assigned the new value of i for each loop iteration