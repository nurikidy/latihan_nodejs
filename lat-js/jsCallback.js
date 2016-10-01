function buatAngka(x, z) {
	var y = x + 1 + z;
	console.log("%d + 1 = %d", x, y);
}

function testAngka(x, y, targetCallbackFunction) {
	targetCallbackFunction(x, y);
}

testAngka(10, 20, buatAngka);


// using a function as argument of .......... a function

function testAngka(x, y, callback) {
	callback(x,y);
}

testAngka(10,20, function(a,b) {
	var c = a*b;
	console.log("%d * %d = %d",a, b, c);

});

