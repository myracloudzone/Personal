var schema = require('bookshelf').DB;
const uuidv1 = require('uuid/v1');
var moment = require('moment');
var async = require('async');
var mailer = require('../lib/Mailer.js');

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
	return controller;
}
