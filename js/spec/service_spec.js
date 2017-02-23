define(['service'], function (Service) {

    var service = new Service();

    describe('Should lookup a user', function () {
        it('return true if registered and password matchs', function () {
            expect(service.request('steven atherton', 'flibberty')).toBeTruthy();
        });
        it('return false if registered and password DOES NOT matchs', function () {
            expect(service.request('steven atherton', 'xxx')).toBeFalsy();
        });
        it('return false if NOT registered', function () {
            expect(service.request('xxx', 'xxx')).toBeFalsy();
        });
    });
});
