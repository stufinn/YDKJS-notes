var x = 5;

(function testfunction(realfunction) {
	realfunction( window );			//calls the function

})(function realfunction( global ){ //defines the functions actions
	var x = 2000;
	console.log(x); //2000
	console.log( global.x ); //5  //references the global var x, which is automatically a property of 'window' object, which is passed in as 'global'

}); 