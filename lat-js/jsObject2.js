function makan(makanan){
	this.jenisMakanan = makanan;
}

function lari(jarak){
	this.perpindahan += jarak;
}

function binatang(nama, kaki) {
	this.nama = nama;
	this.kaki = kaki;
	this.diet = makan;
	this.perpindahan = 0;
	this.lari = lari;
}

var labalaba = new binatang("laba-laba", 8);
labalaba.lari(20);
labalaba.diet("serangga");
console.log(labalaba.perpindahan);
console.log(labalaba.jenisMakanan);