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
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
  	
  	$scope.navClass = function (page) {
    	var currentRoute = $location.path().substring(1) || 'home';
    	return page === currentRoute ? 'active' : '';
  	};
  
  	$scope.loadHome = function () {
        $location.url('/home');
    };
    
    $scope.loadAbout = function () {
        $location.url('/about');
    };
    
    $scope.loadTestimonial = function () {
        $location.url('/testimonials');
    };

    $scope.loadGallery = function () {
        $location.url('/gallery');
    };
    
    $scope.loadContact = function () {
        $location.url('/contact us');
    };
    
  }])
  .controller('AboutPageController', ['$scope', function($scope) {

	$scope.contentList = [
	{
		id: 0,
		blurb: "1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
		image: "img/Mark1.jpg",
	},
	{
		id: 1,
		blurb: "2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
		image: "img/MarkFamily1.jpg",
	},
	{
		id: 2,
		blurb: "3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
		image: "img/MarkFamily2.jpg",
	}];

  }])
  .controller('TestimonialsPageController', [function() {

  }])
  .controller('GalleryPageController', [function() {

  }])
  .controller('ContactPageController', [function() {

  }])
  .controller('ContactFormControllerRadio', ['$scope', function($scope) {
  	$scope.otherValue = true;
  	$scope.showInput = function() {
  		$scope.otherValue = false;
	}
	$scope.hideInput = function() {
  		$scope.otherValue = true;
	}
  }]);
