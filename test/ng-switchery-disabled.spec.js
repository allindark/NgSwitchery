/**
 * Created by Administrator on 2014/11/4.
 */
describe('just check ng-switchery with disabled option', function () {
    var $rootScope;
    var $scope;
    var $compile;
    var element;
    var target;
    var switcher;

    // Load the myApp module, which contains the directive
    beforeEach(module('NgSwitchery'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $compile = _$compile_;
    }));

    it('model state should not reflect on views when disabled', function () {
        $scope.manualDisabled = true;
        $scope.active = true;
        element = $compile('<div><input type="checkbox" class="js-switch" ng-model="active" ng-disabled="manualDisabled" ui-switch /></div>')($scope);
        target = $(element).find(':checkbox').first();
        switcher = target.next('span');
        $scope.$digest();
        expect(target.prop('checked')).toBeTruthy();
        $scope.active = false;
        $scope.$digest();
        expect(target.prop('checked')).toBeTruthy();
    });

    it('model state should reflect on views when not disabled', function () {
        $scope.manualDisabled = false;
        $scope.active = true;
        element = $compile('<div><input type="checkbox" class="js-switch" ng-model="active" ng-disabled="manualDisabled" ui-switch /></div>')($scope);
        target = $(element).find(':checkbox').first();
        switcher = target.next('span');
        $scope.$digest();
        expect(target.prop('checked')).toBeTruthy();
        $scope.active = false;
        $scope.$digest();
        expect(target.prop('checked')).toBeFalsy();
    });

    //it('DOM state should not reflect on model when disabled', function () {
    //    $scope.manualDisabled = true;
    //    $scope.active = true;
    //    element = $compile('<div><input type="checkbox" class="js-switch" ng-model="active" ng-disabled="manualDisabled" ui-switch /></div>')($scope);
    //    target = $(element).find(':checkbox').first();
    //    switcher = target.next('span');
    //    $scope.$digest();
    //    expect(target.prop('checked')).toBeTruthy();
    //    switcher.click();
    //    $scope.$digest();
    //    expect(target.prop('checked')).toBeTruthy();
    //});

    afterEach(function () {
        $rootScope = null;
        $compile = null;
    });
});
