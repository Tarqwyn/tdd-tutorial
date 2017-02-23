define(['jquery'], function ($) {

    var Logon = function (service) {
        var form = $('#app-logon');
        var feedback = $('#app-response');
        var self = this; // scope

        this.service = service;

        form.submit(function (ev) {
            var response = self.captureLogonRequest(ev);
            if (response.sucess) {
                feedback.html('Hello ' + response.user);
            }
            else {
                feedback.html('User name or password were not recognised');
            }
        });
    };

    Logon.prototype = {

        captureLogonRequest: function (submit) {
            submit.preventDefault();
            var formData = {
                user: $('#app-logon-name').val(),
                password: $('#app-logon-password').val()
            };

            return this.handleLogonRequests(formData.user, formData.password);
        },
        handleLogonRequests: function (user, pass) {
            var registeredUser;
            var responseObject = {};
            responseObject.user = user;
            responseObject.sucess = this.service.request(user, pass);

            return responseObject;
        },
    };

    return Logon;
});