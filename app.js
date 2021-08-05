let nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'login@gmail.com', //your login
    pass: 'password' //your password
  }
});

let mailOptions = {
  from: 'Spammer',
  to: 'some@gmail.com', //login of spammer
  subject: 'You are spammed successfully',
  text: 'Hello user'
}

transporter.sendMail(mailOptions, function(error, info) {
  if(error) {
    console.log(error);
  }else {
    console.log('Email sent:' + info.response)
  }
})