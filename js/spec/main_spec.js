define(['main'], function (App) {

    var visit = new App();

    describe('Should initialise', function () {
        it('should start a new session', function () {
            expect(typeof visit.session === 'undefined').toBeFalsy();
        });
    });
});
