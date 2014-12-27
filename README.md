NGSwitchery
===========
![Build Status](https://img.shields.io/travis/bornkiller/NgSwitchery/master.svg?style=flat)
![Coverage Report](http://img.shields.io/coveralls/bornkiller/NgSwitchery.svg?style=flat)
![Package Dependency](https://david-dm.org/bornkiller/NgSwitchery.svg?style=flat)
![Package DevDependency](https://david-dm.org/bornkiller/NgSwitchery/dev-status.svg?style=flat)

An AngularJS Directive for [Switchery](http://abpetkov.github.io/switchery/).

##Usage

1. Include `switchery/dist/switchery[.min].css` from your vendors/components folder in your links.
2. Include `switchery/dist/switchery[.min].js` from your vendors/components folder in your scripts.
3. Include `ng-switchery.js` in your scripts
4. Declare a dependency on the NgSwitchery module
5. Add the `ui-switch` attribute to a checkbox, add optional `ui-switch-options` attribute to config
   switchery.

##Example

Declare a dependency on the module
```javascript
angular.module('myModule', ['NgSwitchery']);
```

Insert checkbox html
```html
<input type="checkbox" class="js-switch" ui-switch checked />
```

Setting Options
```html
<input type="checkbox" id="active" class="js-switch" ng-model="active" ui-switch
  ui-switch-options='{"color": "rgb(255, 119, 145)"}'/>
```

Disabled Options
```html
<input type="checkbox" id="manualDisabled" class="js-switch" ng-model="manualDisabled"  ng-disabled="switcheryDisabled"  ui-switch />
```

Bower install
```
bower install bornkiller/NgSwitchery
```

##Alternative
You may also wish to look at how to achieve this with [pure CSS](https://github.com/abpetkov/switchery/issues/13).

##Notice on Version
This project reach milestone version, while not bundled with nice unit test, because of CI with phantomjs and some other reasons.

On the other hand, till now, it has supported data bidirectional binding and ng-disable directive. I write one example to check correctness and it is production ready.
