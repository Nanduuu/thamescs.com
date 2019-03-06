var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var jsonParser  = bodyParser.json();
var urlencodedparser = bodyParser.urlencoded({extended:true});
var formidable = require('formidable');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'srikanthbaburao@yahoo.com',
    pass: 'password@123'
  }
});

var mailOptions = {
  from: 'srikanthbaburao@yahoo.com',
  to: 'nandakumarvn01@gmail.com,',
  subject: 'Notification',
  
}; 


router.post('/',urlencodedparser,function(req,res){

  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {

    console.log(files);
    console.log(fields);

      mailOptions.html = '<h4>' + "First Name :" + fields.Fname + '<h4>' +
            '<h4>' + "Last Name :" + fields.Lname + '<h4>' +
            '<h4>' + "Contact Number :" + fields.contactNumber + '<h4>' +
            '<h4>' + "Highest Qualification :" + fields.highestQualification + '<h4>' +
            '<h4>' + "Email ID :" + fields.email + '<h4>' +
            '<h4>' + "Experience :" + fields.experience + '<h4>' +
            '<h4>' + "Job Title :" + fields.jobTitle ;

      mailOptions.attachments = [{
        filename: files.resume.name,
        path:files.resume.path,
      }];

  transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            res.send( {msg:"Something issue at system. Please try after sometime"});
          console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          
            res.send( {msg:"Email received and will get back to you soon"});
      }
    }); 




  })




	
})



module.exports = router; 