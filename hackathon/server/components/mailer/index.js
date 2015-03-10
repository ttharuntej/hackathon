var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
module.exports.smtpTransport = nodemailer.createTransport({
    host: "atom.corp.ebay.com", // hostname
   // host:"mx.vip.eva.ebay.com",
    port: 25 // port for secure SMTP
});