var schema = require('bookshelf').DB;
const uuidv1 = require('uuid/v1');
var moment = require('moment');
var async = require('async');
var mailer = require('../lib/Mailer.js');
var FormData = require('form-data');
const fse = require('fs-extra');
const Screenshot = require('url-to-screenshot')

var fs = require("fs");
var  connectCount = 1;

module.exports = function (app) {
	var controller = {};
	controller.sendEmail = function(req, res, next) {
		var data = "<b>Name</b> : "+req.body.name;
		data = data + "<br><b>Email</b> : "+req.body.email;
		data = data + "<br><b>Mobile</b> : "+req.body.mobile;
		data = data + "<br><b>Subject</b> : "+req.body.subject;
		data = data + "<br><b>Message</b> : <p>"+req.body.message+"</p>";
		mailer.sendMail(req.body.to, req.body.subject, data, function() {
			res.send("Sent Successfully.");
		});
	}
	
	controller.processImageRequest = function(req, ress, next) {
		try {
		if (!req.files) {
			console.log("Erroorr")
            return res.status(400).send('No files were uploaded.');
		}
		connectCount++;
		if(connectCount > 2) {
			return res.status(400).send('You are not allowed to more than 2 request due to non-payment');
		}
		console.log(req.files)
		let testFile = req.files.attachment;
		let fileName = (new Date()).getTime()+testFile.originalFilename;
        let filePath = fileName;
        let actualPath = './' + filePath;
        fse.copy(testFile.path, actualPath, err => {
			var form = new FormData();
			form.append('localfile', fs.createReadStream(filePath));
			form.append('filetype', 'PDF');
			form.append('type1', '5');
			form.append('source', 'WEENYSOFT');
			console.log("--------BB------")
			form.submit('http://s5.pdfconvertonline.com/convert/tools.php', function(err, res) {
				console.log("----------_Error----------")
				console.log(err);
				console.log(res.headers.location);
				var url = res.headers.location+"";
				url = url.substring(url.indexOf('?'), url.indexOf('&'));
				url = url.split("=");
				url = url[1]+"";
				url = "http://s5.pdfconvertonline.com/convert/p3r68-cdx67/"+url;
				console.log(url);
				var t = moment().valueOf();
				new Screenshot(url)
				  .width(1520)
				  .height(720)
				  .clip()
				  .capture()
				  .then(img => {
					fs.writeFileSync('/myraAPP/tmp/' + '/'+t+'.png', img)
						ress.send("https://grownixindia.com/media/tmp/"+t+'.png');
				  })
					
			});
		})
		} catch(e) {
			console.log(e);
		}
    }
	return controller;
}
