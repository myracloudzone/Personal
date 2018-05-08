module.exports = function (app) {
    var ctrl = app.controllers.CommonCtrl;
    app.post('/common/sendEmail', ctrl.sendEmail);
};