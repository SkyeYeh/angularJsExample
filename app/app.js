'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.angular-expressions',
    'myApp.angular-modules',
    'myApp.angular-directives',
    'myApp.angular-model',
    'myApp.angular-controllers',
    'myApp.angular-scopes',
    'myApp.angular-filters',
    'myApp.angular-services',
    'myApp.angular-http',
    'myApp.angular-tables',
    'myApp.angular-select',
    'myApp.angular-sql',
    'myApp.angular-htmldom',
    'myApp.angular-events',
    'myApp.angular-forms',
    'myApp.angular-validation',
    'myApp.angular-api',
    'myApp.angular-includes',
    'myApp.angular-animations',
    'myApp.angular-application',
    'myApp.version'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
