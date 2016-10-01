var menu = [
    {
        nama: "nasi goreng",
        harga: 17000,
        pesan: false
    },
    {
        nama: "rawon",
        harga: 20000,
        pesan: false
    },
    {
        nama: "sate padang",
        harga: 15000,
        pesan: false
    }
];

var totalHarga = 0;



function jumlahHarga(namaMakanan, status) {
    var hargaMakanan;

    // cara 1
    for (let i = 0; i < menu.length; i++) {
        if (menu[i]["nama"] === namaMakanan) {
            hargaMakanan = menu[i]["harga"];
        }
    }

    // cara 2
  /*
    menu.forEach(function(item, index){
        if (item.nama === namaMakanan) {
            hargaMakanan = item.harga;
        }
    });
  */

    if (status == "+") {
        return totalHarga += hargaMakanan;
    } else {
        return totalHarga -= hargaMakanan;    
    }
} 



function pesan(namaMenu, status, callback) {
    callback(namaMenu, status);
    if (status == "+")
        console.log("Anda memesan %s, total harga adalah Rp. %d ", namaMenu, totalHarga);
    else
        console.log("Anda membatalkan pesanan %s, total harga adalah Rp. %d ", namaMenu, totalHarga);
    //console.log("total harga adalah " + totalHarga);
}


pesan("rawon", "+", jumlahHarga);
pesan("rawon", "+", jumlahHarga);
pesan("rawon", "-", jumlahHarga);

// buat fungsi untuk hapus pesanan