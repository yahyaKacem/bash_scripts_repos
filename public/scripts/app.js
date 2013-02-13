'use strict';
//####################################################
var app = angular.module('markdown', []);
//####################################################
//######injecting the dependencies####################
controllers.MainCtrl.$inject = ['$scope'];
//####################################################
//######assigning the controllers to the application##
app.controller(controllers);
app.directive(directives);
//####################################################
