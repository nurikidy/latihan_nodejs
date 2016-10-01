// membuat object dgn initializer

var hewan = {
	nama : "kucing",
	kaki : 4,
	warna : "putih",
	tipe : "karnivora",
	makan : function() {
		console.log("%s sedang makan", hewan.nama);
	}
};

hewan.makan();



// create object dengan prototype
// 'this.' digunakan karena bentuknya adalah pure function tanpa di-assign ke veriabel
function Hewan(_nama, _kaki, _warna, _tipe) {
	this.nama = _nama;
	this.kaki = _kaki;
	this.warna = _warna;
	this.tipe = _tipe;
}

var sapi = new Hewan("sapi", 4, "coklat", "herbivora");
var singa = new Hewan("singa", 2, "kuning", "karnivora");
var bebek = new Hewan("bebek", 2, "coklat", "herbivora");

console.log(bebek);
console.log(bebek.kaki);     // accessing object in normal way
console.log(bebek['warna']); // accessing object in array style

// create object dengan prototype + assigned to a var
var binatang = function Hewan(a,b,c) {
	Hewan.nama = a;
	Hewan.kaki = b;
	Hewan.makanan = c;
};

binatang('merpati', 2, 'biji-bijian');
console.log(binatang.kaki);