//A succinct way to execute a single if..else statement

function conditOperat() {

var a = 22;

var b = (a > 41) ? ("hello"):("world");  //essentially says: if a > 41 THEN b = "hello", else b = "world"

console.log(b);

}

conditOperat();  //calls function


console.log(b); //reference error because b is only available in the above block
