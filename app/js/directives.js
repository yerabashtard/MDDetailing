'use strict';

/* Directives */


angular.module('MD Detailing Application.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
