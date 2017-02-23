define(['jquery', 'logon', 'service'], function ($, Logon, Service) {
    
    var App = function () {
        this.session = new Logon(new Service());
    };

    App.prototype = {

    };

    return App;
});
