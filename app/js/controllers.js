'use strict';

/* Controllers */

angular.module('MD Detailing Application.controllers', [])
  .controller('GalleryPageController', ['$scope', function($scope) {

      // Set of Photos
    $scope.photos = [
        {src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg', desc: 'Image 01'},
        {src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg', desc: 'Image 02'},
        {src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg', desc: 'Image 03'},
        {src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg', desc: 'Image 04'},
        {src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg', desc: 'Image 05'},
        {src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg', desc: 'Image 06'}
    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };

  }])
  .controller('CollapseNavCtrl', ['$scope', function($scope) {

  	$scope.isCollapsed = true;

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

    $scope.contentListIndex = 0;

    $scope.updateIndex = function(index) {
      $scope.contentListIndex = index;
    }

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
  .controller('TestimonialsPageController', ['$scope', function($scope) {
    
  }])
  .controller('HomePageController', [function() {

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
