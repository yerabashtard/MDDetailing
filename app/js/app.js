'use strict';


// Declare app level module which depends on filters, and services
angular.module('MD Detailing Application', [
  'ngRoute',
  'MD Detailing Application.filters',
  'MD Detailing Application.services',
  'MD Detailing Application.directives',
  'MD Detailing Application.controllers',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomePageController'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutPageController'});
  $routeProvider.when('/testimonials', {templateUrl: 'partials/testimonials.html', controller: 'TestimonialsPageController'});
  $routeProvider.when('/gallery', {templateUrl: 'partials/gallery.html', controller: 'GalleryPageController'});
  $routeProvider.when('/contact us', {templateUrl: 'partials/contact.html', controller: 'ContactPageController'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
