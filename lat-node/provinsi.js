var provinsi = [
        {"provinsi":"Aceh","ibukota":"Banda Aceh","}":"219.659"},
        {"provinsi":"Sumatera Utara","ibukota":"Medan","populasi":"2.029.797"},
        {"provinsi":"Sumatera Barat","ibukota":"Padang","populasi":"787.740"},
        {"provinsi":"Riau","ibukota":"Pekanbaru","populasi":"799.312"},
        {"provinsi":"Jambi","ibukota":"Jambi","populasi":"460.427"},
        {"provinsi":"Sumatera Selatan","ibukota":"Palembang","populasi":"1.323.169"},
        {"provinsi":"Bengkulu","ibukota":"Bengkulu","populasi":"279.573"},
        {"provinsi":"Lampung","ibukota":"Bandar Lampung","populasi":"790.057"},
        {"provinsi":"Kepulauan Bangka Belitung","ibukota":"Pangkal Pinang","populasi":"146.161"},
        {"provinsi":"Kepulauan Riau","ibukota":"Tanjung Pinang","populasi":"192.493"},
        {"provinsi":"Jakarta","ibukota":"Jakarta","populasi":"8.839.247"},
        {"provinsi":"Yogyakarta","ibukota":"Yogyakarta","populasi":"511.744"},
        {"provinsi":"Jawa Barat","ibukota":"Bandung","populasi":"2.288.570"},
        {"provinsi":"Jawa Tengah","ibukota":"Semarang","populasi":"1.352.869"},
        {"provinsi":"Jawa Timur","ibukota":"Surabaya","populasi":"2.611.506"},
        {"provinsi":"Banten","ibukota":"Serang","populasi":"501.562"},
        {"provinsi":"Bali","ibukota":"Denpasar","populasi":"491,500"},
        {"provinsi":"Nusa Tenggara Timur","ibukota":"Kupang","populasi":"269,680"},
        {"provinsi":"Nusa Tenggara Barat","ibukota":"Mataram","populasi":"356.141"},
        {"provinsi":"Kalimantan Barat","ibukota":"Pontianak","populasi":"516.737"},
        {"provinsi":"Kalimantan Tengah","ibukota":"Palangka Raya","populasi":"168.449"},
        {"provinsi":"Kalimantan Selatan","ibukota":"Banjarmasin","populasi":"627.245"},
        {"provinsi":"Kalimantan Timur","ibukota":"Samarinda","populasi":"593.853"},
        {"provinsi":"Sulawesi Utara","ibukota":"Manado","populasi":"417.586"},
        {"provinsi":"Sulawesi Tengah","ibukota":"Palu","populasi":"268.664"},
        {"provinsi":"Sulawesi Selatan","ibukota":"Makassar","populasi":"1.168.258"},
        {"provinsi":"Sulawesi Tenggara","ibukota":"Kendari","populasi":"226.056"},
        {"provinsi":"Sulawesi Barat","ibukota":"Mamuju","populasi":"unfefined"},
        {"provinsi":"Gorontalo","ibukota":"Gorontalo","populasi":"138.354"},
        {"provinsi":"Maluku","ibukota":"Ambon","populasi":"428.585"},
        {"provinsi":"Maluku Utara","ibukota":"Sofifi","populasi":"163.467"},
        {"provinsi":"Papua","ibukota":"Jayapura","populasi":"197,396"},
        {"provinsi":"Papua Barat","ibukota":"Manokwari", "populasi":"undefined"}
    ];


function get_provinsi(keyword) {
    console.log("Searching for "+keyword);
    var result = {"provinsi":"not found","ibukota":"undefined", "populasi":"undefined"};
    for (let i = 0; i < provinsi.length; i++) {
        if ( provinsi[i].provinsi.toString().toLowerCase() === keyword.toString().toLowerCase() ) {
            result = provinsi[i];
        }
    }
    return result;
}


exports.get_provinsi = get_provinsi;
