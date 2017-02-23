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
            if (user in this.userDBRequest.users) {
                if (this.userDBRequest.users[user].pass === password) {
                    return true;
                }
            }
            return false;
        }
    };

    return Services;
});