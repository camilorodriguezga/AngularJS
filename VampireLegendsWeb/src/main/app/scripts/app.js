//'use strict';

/**
 * @ngdoc overview
 * @name vampireLegends
 * @description
 * # vampireLegends
 *
 * Main module of the application.
 */
angular
  .module('vampireLegends', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'pascalprecht.translate',
    'dndLists'
  ])
  .config(function ($routeProvider, $translateProvider, $locationProvider) {
	  $routeProvider
      	.when('/', {
      		templateUrl: 'views/main.html',
      		controller: 'MainCtrl'
      	})
      	.when('/HojaRol', {
      		templateUrl: 'views/HojasRolEdadOscura/hojaRolEdadOscura.html',
      		controller: 'HojaRolEdadOscuraCtrl'
      	})
      	.when('/Personajes', {
      		templateUrl: 'views/perfil/misPersonajes/listadoPersonajes.html',
      		controller: 'ListadoPersonajesCtrl'
      	})
      	.otherwise({
      		redirectTo: '/'
      	});
    	//Lenguajes que soporta el aplicativo
    	//default language
		$translateProvider.preferredLanguage(navigator.language.split("-")[0]);
		//fallback language if entry is not found in current language
		$translateProvider.fallbackLanguage('en');
		//load language entries from files
		$translateProvider.useStaticFilesLoader({
			prefix: 'languages/', //relative path Eg: /assets/languages/
			suffix: '.json' //file extension
		});
  }).controller("languajeCtrl", ['$scope', '$translate', function($scope, $translate) {
	  //variable to store selected language
	  $scope.selectedLanguage = $translate.use(); //default
	  $scope.changeLanguage = function () {
		  //use parameter needs to be part of a known locale Eg: en-UK, en, etc
		  $translate.use($scope.selectedLanguage);
	  };
	  $scope.translate = $translate;
  }]);
