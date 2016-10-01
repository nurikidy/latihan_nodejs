/**
 * RequestHandler
 * beware of FUNCTIONS vs VARIABLES
 * eg:
 * response.end() vs response.end
 */

var queryString = require("querystring");
var fs = require('fs');
var provinsi = require('./provinsi');
var mail = require('./mail');

function start(response, data) {
    console.log("Calling req_handler start()");
    response.writeHead(200, {"Content-Type":"text/html"});
    fs.createReadStream("./template_provinsi.html").pipe(response);
    //response.write(body);
    //response.end();
}

function upload(response, data) {
    console.log("Calling req_handler upload()");
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("You've sent: "+ queryString.parse(data).toString()) ;
    response.end();
}

function find_provinsi(response, data) {
    var keyword = queryString.parse(data).keyword;          //<<====== HASIL PARSING AKAN MENJADI OBJECTS SESUAI DENGAN FORM NAME !!!!!
    var result  = provinsi.get_provinsi(keyword);

    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Search Keyword for Provinsi: "+keyword+"\n\n") ;
    if (result.provinsi === 'undefined') {
        response.write("Provinsi not found") ;
    } else {
        var body = "Search key: "+keyword+"\nProvinsi: "+result.provinsi+"\nIbu kota: "+result.ibukota+"\nPopulasi: "+result.populasi;
        response.write(body);

        var maildata = {
            "from": "nuri.abidin@gmail.com",
            "to"  : "nuri_abidin@yahoo.com, nuri.abidin@gmail.com, nuri_abidin@telkomsel.co.id",
            "subject" : "NodeJS@MozSpaceJkt "+Date.now(),
            "plaintext": body,
            "htmltext" : ""
        };

        // sending email
        mail.sendMail(maildata);
    }
    response.end();
}

exports.start = start;
exports.upload = upload;
exports.find_provinsi = find_provinsi;
