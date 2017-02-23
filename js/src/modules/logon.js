define(['jquery'], function ($) {

    var Logon = function (service) {
        var form = $('#app-logon');
        var feedback = $('#app-response');
        var self = this; // scope

        this.service = service;

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
            var responseObject = {
                user: 'steven atherton',
                sucess: true
            };
            return responseObject;
        },
    };

    return Logon;
});