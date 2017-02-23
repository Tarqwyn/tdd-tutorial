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
        it('should not be logged on sucessfully if password incorrect', function () {
            session  = new Logon(serviceFixtureFail);
            expect(session.handleLogonRequests('steven atherton', 'gibbet')).toEqual(jasmine.objectContaining({
                sucess: false
            }));
        });
        it('should not be logged on sucessfully if not registered', function () {
            session  = new Logon(serviceFixtureFail);
            expect(session.handleLogonRequests('fred bloggs', 'flibberty')).toEqual(jasmine.objectContaining({
                sucess: false
            }));
        });

    });
});
