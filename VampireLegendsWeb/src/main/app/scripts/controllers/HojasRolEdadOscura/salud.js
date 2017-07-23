'use strict';

/**
 * @ngdoc function
 * @name vampireLegends.controller:DebilidadCtrl
 * @description
 * # DebilidadCtrl
 * Controller of the vampireLegends
 */
angular.module('vampireLegends')
  .controller('SaludCtrl', ['$scope', '$q', function ($scope, $q) {
	  
	  //Se actualiza los niveles de salud si no existen
	  $scope.$watch('hojaRolEdadOscura', function (newVal, oldVal) {
		  if(newVal != undefined && newVal != oldVal){
			  if($scope.hojaRolEdadOscura.salud == undefined 
					  || $scope.hojaRolEdadOscura.salud == null || $scope.hojaRolEdadOscura.salud == ""){
				  $scope.hojaRolEdadOscura.salud = [	{nombre:"magullado", estado:"sano", penalizacion:0},
				                                		{nombre:"lastimado", estado:"sano", penalizacion:-1},
				                                		{nombre:"lesionado", estado:"sano", penalizacion:-1},
				                                		{nombre:"herido", estado:"sano", penalizacion:-2},
				                                		{nombre:"malherido", estado:"sano", penalizacion:-2},
				                                		{nombre:"tullido", estado:"sano", penalizacion:-5},
				                                		{nombre:"incapacitado", estado:"sano"}
				                                	];

			  }
		  }
	  });
	  
  }]);
