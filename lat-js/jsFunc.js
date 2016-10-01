function tambah() {
	var x = 19;
	var y = 11;
	var hasil = x + y;
	console.log(hasil)
}

tambah();


buatAngka(); // function can be called before the function block it self
function buatAngka(x=20) {
	var y = x + 1;
	console.log("%d ditambah 1 sama dengan %d", x, y);
}


// anonymous functions

var x = function(x, y) { return x + y} // variable can be a function, and it dont even have a function name
var z = x (3,7);
console.log(z);
