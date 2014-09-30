angular.module('NgSwitcherySample', ['NgSwitchery'])
	.controller('NgSwitcheryCtrl', ['$scope', '$interval', '$log',
		function($scope, $interval, $log) {
			$scope.active = false;
			$scope.program = false;
			$interval(function() {
				$log.info($scope.active);
				$scope.program = $scope.program ? false : true;
			}, 1000, 3);
		}
	]);