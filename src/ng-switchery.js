'use strict';

/**
 * Module to use Switchery as a directive for angular.
 * @TODO implement Switchery as a service, https://github.com/abpetkov/switchery/pull/11
 */
angular.module('NgSwitchery', [])
    .directive('uiSwitch', ['$window', '$log', '$parse', function($window, $log, $parse) {

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
            var options = {};
            try {
                options = angular.fromJson(attrs.uiSwitchOptions);
            }
            catch (e) {
                options = {};
            }

            ngModel.$formatters.push(function(modelValue) {
                return angular.equals(modelValue, true);
            });

            ngModel.$render = function() {
                element.checked = ngModel.$modelValue;
                switcher.setPosition(false);
            };

            var switcher = new $window.Switchery(elem[0], options);
            var element = switcher.element;
            element.checked = scope.initValue;
            switcher.setPosition(false);
            ngModel.$setViewValue(element.checked);
            elem.on('change',function(evt) {
                scope.$apply(function() {
                    ngModel.$setViewValue(element.checked);
                })
            });
        }

        return {
            require: 'ngModel',
            restrict: 'A',
            priority: 1,
            scope : {initValue : '=ngModel'},
            link: linkSwitchery
        }
    }]);