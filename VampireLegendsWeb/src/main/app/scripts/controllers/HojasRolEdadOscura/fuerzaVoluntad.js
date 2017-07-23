'use strict';

/**
 * @ngdoc function
 * @name vampireLegends.controller:FuerzaVoluntadCtrl
 * @description
 * # FuerzaVoluntadCtrl
 * Controller of the vampireLegends
 */
angular.module('vampireLegends')
  .controller('FuerzaVoluntadCtrl', ['$scope', '$q', function ($scope, $q) {
	
	  if($scope.hojaRolEdadOscura != undefined && $scope.hojaRolEdadOscura != null &&
			  $scope.hojaRolEdadOscura.fuerzaVoluntad != undefined && $scope.hojaRolEdadOscura.fuerzaVoluntad != null){
		  $scope.puntosVoluntad = $scope.hojaRolEdadOscura.fuerzaVoluntad.puntos;
	  }
  }]);
