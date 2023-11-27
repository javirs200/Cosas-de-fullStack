const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "af116663c66e9e",
    pass: "86c88801fc9f9e"
  }
});

module.exports = transporter;