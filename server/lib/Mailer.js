var nodeMailer = require("nodemailer");
var fs = require('fs');
var handlebars = require('handlebars');
var config = require('../scripts/config.json');
var systemVariable = require(config.outputFolder+'/variable.json');
var moment = require('moment');
const path = require('path');
// Send Grid Email

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var sendEmailToClientUsingSendGrid = function(to, subject, body) {
    const msg = {
        to : to,
        from: 'info@grownixindia.com',
        subject: subject,
        text: body,
        html: body,
    };
    sgMail.send(msg);
}

module.exports = {
    sendMail : function(to, subject, body, callback) {
        sendEmailToClientUsingSendGrid(to, subject, body);
        callback();
    }
}   

