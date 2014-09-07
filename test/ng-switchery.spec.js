it('just check ng-switchery dependability', function () {
    var $rootScope;
    var $compile;

    // Load the myApp module, which contains the directive
    beforeEach(module('NgSwitchery'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    it('just check right', function () {
        expect(true).toBeTruthy();
    });

    afterEach(function () {
        $rootScope = null;
        $compile = null;
    });
});