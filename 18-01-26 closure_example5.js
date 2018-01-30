for (var i = 1; i<=5; i++) {
	(function (){
		setTimeout(function timer(){
			console.log(i);
		}, i*1000);
	})();
}

//there is now an inner scope in the for loop, but i is not assigned in the loop - still refers to the global variable