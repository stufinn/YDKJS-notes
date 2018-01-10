function outer() {
	var a = 1;

	function inner() {
		var b = 2;

		//we can access both var's 'a' & 'b from the inner scope
		console.log( a + b );  //3
	}

	inner();

	console.log( a );			//1
	console.log( a + b );	// 0 -> can't access var 'b' from the inner scope. b resolves to (-1)
	console.log( b )
}

outer();

//page 25 of YDKJS Up & Going