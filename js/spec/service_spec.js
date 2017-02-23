define(['service'], function (Service) {

    var service = new Service();

    describe('Should lookup a user', function () {
        it('return true if registered and password matchs', function () {
            expect(service.request('steven atherton', 'flibberty')).toBeTruthy();
        });
    });
});
