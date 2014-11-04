angular.module('NgSwitcherySample', ['NgSwitchery'])
	.controller('NgSwitcheryCtrl', ['$scope', '$interval', '$log',
		function($scope, $interval, $log) {
			$scope.active = true;
			$scope.program = false;
			$scope.switcheryDisabled = true;
			$interval(function() {
				$log.info('active value' + $scope.active.toString());
				$log.info('program value' + $scope.active.toString());
				$log.info('manualDisabled value' + $scope.manualDisabled.toString());
				$scope.active = $scope.active ? false : true;
				$scope.program = $scope.program ? false : true;
				$scope.switcheryDisabled = $scope.switcheryDisabled ? false : true;
			}, 1000, 3);
		}
	]);