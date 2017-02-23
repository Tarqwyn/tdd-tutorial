define(['jquery'], function ($) {
    var Services = function () {
        this.userDBRequest = { users: {
                'steven atherton': {
                    pass: 'flibberty'
                },
                'fred blogs': {
                    pass: 'gibbet'
                }
            }
        };

    };

    Services.prototype = {
        request: function (user, password) {
            return true;
        }
    };

    return Services;
});