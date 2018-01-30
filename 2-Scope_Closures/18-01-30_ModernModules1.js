//Modern Modules, page 61, Scope and Closure
//I DON'T UNDERSTAND THIS AS OF JANUARY 30TH, 2018 - NEED TO RETURN HERE LATER TO REVIEW.

var MyModules = (function Manager() {
	var modules = {};

	function define(name, deps, impl) {
		for (var i = 0; i < deps.length; i++ ) {
			deps[i] = modules[deps[i]]
		}
		modules[name] = impl.apply(impl,deps);
	}
	function get(name) {
		return modules[name];
	}
	return {
		define: define,
		get: get
	};
})();

/*key part of this code is "modules[name] = impl.apply(impl,deps).  This is invoking the wrapper function for a module 
(passing in any dependencies), and storing the return value, the modules API, into an internal list of modules tracked by name.*/

//"And here's how I might use it to defin some modules:"

MyModules.define( "bar", [], function() {
	function hello(who) {
		return "Let me introduce: " + who;
	}

	return {
		hello: hello
	};
} );

MyModules.define( "foo", ["bar"], function(bar){
	var hungry = "hippo";

	function awesome() {
		console.log( bar.hello( hungry ).toUpperCase() );
	}

	return {
		awesome: awesome
	};
} );

var bar = MyModules.get( "bar" );
var foo = MyModules.get ("foo" );

console.log(
	bar.hello
); //Let me introduce: hippo

foo.awesome(); //LET ME INTRODUCE: HIPPO
