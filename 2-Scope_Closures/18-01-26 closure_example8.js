for ( let i=1; i<=5; i++) {
	(function () {
		setTimeout( function timer() {
		console.log(i);
	}, i*1000);
	})();

};

