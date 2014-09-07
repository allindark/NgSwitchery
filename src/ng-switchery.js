'use strict';

/**
 * Module to use Switchery as a directive for angular.
 * @TODO implement Switchery as a service, https://github.com/abpetkov/switchery/pull/11
 */
angular.module('NgSwitchery', [])
    .directive('uiSwitch', ['$window', '$timeout','$log', '$parse', function($window, $timeout, $log, $parse) {

        /**
         * Initializes the HTML element as a Switchery switch.
         *
         * @TODO add a way to provide options for Switchery
         * $timeout is in place as a workaround to work within angular-ui tabs.
         *
         * @param scope
         * @param elem
         * @param attrs
         * @param ngModel
         */

        function linkSwitchery(scope, elem, attrs, ngModel) {
            if(!ngModel) return false;
            var options = {};
            try {
                options = angular.fromJson(attrs.uiSwitchOptions);
            }
            catch (e) {
                options = {};
            }

            var switcher = new $window.Switchery(elem[0], options);
            var element = switcher.element;
            element.checked = scope.initValue;
            switcher.setPosition(false);
            element.addEventListener('change',function(evt) {
                scope.$apply(function() {
                    ngModel.$setViewValue(element.checked);
                })
            });
        }

        return {
            require: 'ngModel',
            restrict: 'A',
            scope : {initValue : '=ngModel'},
            link: linkSwitchery
        }
    }]);
