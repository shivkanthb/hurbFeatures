angular.module('app',['ngResource','ngRoute',
	'ui.bootstrap']);

angular.module('app').config(function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
		//.when('/t',{templateUrl:'/partials/main/main',controller:'mvMainCtr'})
			
		// .when('/',{ templateUrl: '/partials/main',controller:'mainCtrl'});
		.when('/',{ templateUrl: '/views/1.html',controller:'mainCtrl'});
});

angular.module('app').controller('mainCtrl',function($scope,$window){
	console.log('Scopee');
    console.log("mainController",$scope);
	$scope.test = "Hiii";
	$scope.jobs = [{title:'ventas',desc:"persona que vende"},
	{title:'compras',desc:"persona que fuma"}];
	// retrieve the jquery window element
	var w = angular.element($window);
	// bind a function to the window element
	w.bind('resize',function(){
		$scope.imagenFondo.height = window.innerHeight+'px';
		$scope.$apply();
	});

	$scope.imagenFondo =
	{
		'background-image': "url(img/Nevado_de_Toluca.jpg)",
		'height': window.innerHeight+'px'
	};
	

});


angular.module('app').directive('userInfoCard',function(){
  return {
    templateUrl: "directives/userCardInfo.html",
    restrict: "E",
    controller: function($scope){
		console.log("directive",$scope);
		$scope.collapsed = false;
		$scope.knightMe = function(job){
			job.rank = "heroe";
		};
		$scope.collapse = function(){
			$scope.collapsed=!$scope.collapsed;
		};
	},
	//scope: true, // private scope with parent
    scope: {
		jobs:'=', // private scope with parent
	}
  };
});


angular.module('app').directive('draggable',function(){
	return {
		controller: function($scope){

		},

		template: "<div ng-transclude class ='draggable'></div>",
		transclude: true,
		link: function postLink(scope, iElement, iAttrs, controller){
			// use jquery UI to make the element draggable :)
			
			var img = iElement.find('img');
			//iElement.offset({ top: 80, left: 50});
			img.height(256);

			// img.height(5);
			iElement.draggable();

			console.log(iElement);
		}
	};


});

angular.module('app').directive('hurbBgImg',function(){
  return {
    // templateUrl: "directives/userCardInfo.html",
    //restrict: "A",
    controller: function($scope,$window){
		/*
		console.log("directive",$scope);
		$scope.collapsed = false;
		$scope.knightMe = function(job){
			job.rank = "heroe";
		};
		$scope.collapse = function(){
			$scope.collapsed=!$scope.collapsed;
		};
		*/
		var w = angular.element($window);
		// bind a function to the window element
		w.bind('resize',function(){
			$scope.imagenFondo.height = window.innerHeight+'px';
			$scope.$apply();
		});

		// fix-attachment
		console.log('scopeFix',$scope.fix);
		$scope.imagenFondo =
		{
			'background-image': "url("+$scope.src+")",
			'height': window.innerHeight+'px'
		};
		// $scope.miau = $scope.fix=='fix';
		/*
		if($scope.fix){
			$scope.imagenFondo.
		}*/
		// $sscope.$apply();
	
	},
	templateUrl: "directives/hurbBgImg.html",
	transclude: true,
	scope:{
		src:'@src',
		fix:'@fix',
	}
  };
});