'use strict';

/**
 * Module to use Switchery as a directive for angular.
 * @TODO implement Switchery as a service, https://github.com/abpetkov/switchery/pull/11
 */
angular.module('NgSwitchery', [])
    .directive('uiSwitch', ['$window', '$timeout','$log', function($window, $timeout,$log) {

        /**
         * Initializes the HTML element as a Switchery switch.
         *
         * @TODO add a way to provide options for Switchery
         * $timeout is in place as a workaround to work within angular-ui tabs.
         *
         * @param scope
         * @param elem
         * @param attrs
         */
        return {
            require: 'ngModel', 
            restrict: 'AE',
            scope : {initValue : '=ngModel'},
            link: function(scope, elem, attrs,ngModel) {
                if(!ngModel) return false;
                var switcher  = new $window.Switchery(elem[0]);
                var element = switcher.element;
                element.checked = scope.initValue;
                switcher.setPosition(false);
                element.addEventListener('change',function(evt){
                    scope.$apply(function(){
                        ngModel.$setViewValue(element.checked);
                    })
                })

            }
        }
    }])