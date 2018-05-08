var schema = require('bookshelf').DB;
const uuidv1 = require('uuid/v1');
var moment = require('moment');
var async = require('async');
var mailer = require('../lib/Mailer.js');

module.exports = function (app) {
	var controller = {};
	controller.sendEmail = function(req, res, next) {
		mailer.sendMail(req.body.to, req.body.subject, req.body.message, function() {
			res.send("Sent Successfully.");
		});
    }
	return controller;
}
