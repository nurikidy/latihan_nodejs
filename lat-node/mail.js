var mailerkey = "nsplxjgxlzgvwers";
var maileruser= "nuri.abidin@gmail.com";
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://nuri.abidin%40gmail.com:'+mailerkey+'@smtp.gmail.com');

function sendMail (request){
    var status = "";
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: request.from, // sender address
        to: request.to, // list of receivers
        subject: request.subject, // Subject line
        text: request.plaintext, // plaintext body
        html: request.htmltext // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return error;
            console.log("[!!!] Mail delivery: "+error);
        } else {
            console.log("Mail delivery: "+info.response);

        }
    });
}



exports.sendMail = sendMail;
