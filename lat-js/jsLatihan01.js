function tambah(a, b) {
	return a+b;
}

function kali(a, b) {
	return a*b;
}

function bagi(a, b) {
	return a/b;
}

function kurangi(a, b) {
	return a-b;
}


// anon func menguji selisih a + b > 5
function hitung(a, b, dstCallback) {
	var hasil = dstCallback(a,b);
	console.log("Input->(%d, %d) Output->%d", a, b, hasil)
}


hitung(10, 10, tambah);
console.log("\n");
hitung(10, 20, function(a,b){	
	var c =0;
	if ( Math.abs((a-b)) > 5 ) {
		if (a > b ) {
			c = kurangi(a, b);
		} else {
			console.log("[!!!] %d LEBIH KECIL dari %d",a,b);	
		}
	} else {
		console.log("[!!!] Selisih %d dan %d kurang dari 5",a,b);
	}
	return c;
});