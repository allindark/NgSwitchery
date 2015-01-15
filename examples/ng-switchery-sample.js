angular.module('NgSwitcherySample', ['NgSwitchery'])
	.controller('NgSwitcheryCtrl', ['$scope',
		function($scope) {
			$scope.active = true;
			$scope.program = false;
			$scope.switcheryDisabled = true;
		}
	]);