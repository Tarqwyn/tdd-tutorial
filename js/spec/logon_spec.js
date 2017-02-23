define(['logon'], function (Logon) {

    var serviceFixturePass = {
        request: function (user, password) {
            return true;
        }
    };

    var serviceFixtureFail = {
        request: function (user, password) {
            return false;
        }
    };

    var session;

    describe('Users', function () {
        it('should be logged on sucessfully if registered', function () {
            session  = new Logon(serviceFixturePass);
            expect(session.handleLogonRequests('steven atherton', 'flibberty')).toEqual(jasmine.objectContaining({
                sucess: true
            }));
        });
    });
});
