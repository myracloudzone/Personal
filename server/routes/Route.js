module.exports = function (app) {
    var ctrl = app.controllers.CommonCtrl;
    app.post('/common/sendEmail', ctrl.sendEmail);
    //app.post('/common/processImageRequest', ctrl.processImageRequest);
    app.get('/common/uploadImage', ctrl.uploadImage)
};