'use strict';

var sampleApp = angular.module('NgSwitcherySample', ['NgSwitchery'])
   .controller('NgSwitcheryCtrl', ['$scope', function($scope){
   	    $scope.active = false;
   }]);