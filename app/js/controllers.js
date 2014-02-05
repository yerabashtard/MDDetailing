'use strict';

/* Controllers */

angular.module('MD Detailing Application.controllers', [])
.controller('HomePageController', ['$scope', function($scope) {

		  $scope.myInterval = 5000;
		  $scope.slides = [
		  {
		  	image: 'img/MarkFamily1.jpg',
		  	text: 'Pic 1',
		  },
		  {
		  	image: 'img/MarkFamily2.jpg',
		  	text: 'Pic 2Pic 2',
		  },
		  {
		  	image: 'img/MarkZipline.jpg',
		  	text: 'Pic 3Pic 3Pic 3',
		  }];

  }])
  .controller('AboutPageController', [function() {

  }])
  .controller('TestimonialsPageController', [function() {

  }])
  .controller('GalleryPageController', [function() {

  }])
  .controller('ContactPageController', [function() {

  }]);