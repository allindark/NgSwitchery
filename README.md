NGSwitchery
===========
[![Build Status](https://travis-ci.org/bornkiller/NgSwitchery.svg)](https://travis-ci.org/bornkiller/NgSwitchery)

An AngularJS Directive for [Switchery](http://abpetkov.github.io/switchery/).

##Usage##

1. Include `switchery/dist/switchery[.min].css` from your vendors/components folder in your links.
2. Include `switchery/dist/switchery[.min].js` from your vendors/components folder in your scripts.
3. Include `ng-switchery.js` in your scripts
4. Declare a dependency on the NgSwitchery module
5. Add the `ui-switch` attribute to a checkbox, add optional 'ui-switch-options' attribute to config
   switchery.

##Example##

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


Bower install
```
bower install bornkiller/NgSwitchery
```

##Alternative##
You may also wish to look at how to achieve this with [pure CSS](https://github.com/abpetkov/switchery/issues/13).

##Notice on Version##
This project is still in its develop stages and not bundled with nice unit test, so be careful considering production.

At this time, I am working on unit test. Till now, it has supported data bidirectional binding, but not support disable
and ng-disable. New releases will resolve problems mentioned above, and it is production ready.
