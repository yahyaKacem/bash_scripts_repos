'use strict';
//####################################################
var app = angular.module('angularjs-starter', []);
//####################################################
//######injecting the dependencies####################
var dependencies = ['$scope', '$http'];
for(var i in controllers){
  controllers[i].$inject = dependencies;
}
//####################################################
//######assigning the controllers to the application##
app.controller(controllers);
app.directive(directives);
//####################################################
