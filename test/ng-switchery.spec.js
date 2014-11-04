describe('just check ng-switchery simple dependability', function () {
    var $rootScope;
    var $scope;
    var $compile;
    var element;
    var target;
    var switcher;
    var compileTemplate = function() {
        element = $compile('<div><input type="checkbox" class="js-switch" ng-model="active" ui-switch /></div>')($scope);
        target = $(element).find(':checkbox').first();
        switcher = target.next('span');
        $scope.$digest();
    };

    // Load the myApp module, which contains the directive
    beforeEach(module('NgSwitchery'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $compile = _$compile_;
    }));

    it('initialize should work right when model value is true ', function () {
        $scope.active = true;
        compileTemplate();
        expect(target.prop('checked')).toBeTruthy();
    });

    it('initialize should work right when model value is false', function () {
        $scope.active = false;
        compileTemplate();
        expect(target.prop('checked')).toBeFalsy();
    });

    it('initialize should work right when model value is null ', function () {
        compileTemplate();
        expect(target.prop('checked')).toBeFalsy();
    });

    it('model state should reflect on model from false to true', function () {
        $scope.active = false;
        compileTemplate();
        expect(target.prop('checked')).toBeFalsy();
        $scope.active = true;
        $scope.$digest();
        expect(target.prop('checked')).toBeTruthy();
    });

    it('model state should reflect on model from true to false', function () {
        $scope.active = true;
        compileTemplate();
        expect(target.prop('checked')).toBeTruthy();
        $scope.active = false;
        $scope.$digest();
        expect(target.prop('checked')).toBeFalsy();
    });

    it('DOM state should reflect on model from false to true', function () {
        $scope.active = false;
        compileTemplate();
        expect($scope.active).toBeFalsy();
        target.prop('checked', true);
        target.change();
        //switcher.click();
        //$scope.$digest();
        expect($scope.active).toBeTruthy();
    });

    it('DOM state should reflect on model from true to false', function () {
        $scope.active = true;
        compileTemplate();
        expect($scope.active).toBeTruthy();
        target.prop('checked', false);
        target.change();
        //switcher.click();
        //$scope.$digest();
        expect($scope.active).toBeFalsy();
    });

    afterEach(function () {
        $rootScope = null;
        $compile = null;
    });
});
