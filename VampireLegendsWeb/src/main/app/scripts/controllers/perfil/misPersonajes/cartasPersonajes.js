'use strict';

/**
 * @ngdoc function
 * @name vampireLegends.controller:CartasPersonajesCtrl
 * @description
 * # CartasPersonajesCtrl
 * Controller of the VampireLegends
 */
angular.module('vampireLegends')
  .controller('CartasPersonajesCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
	  
	  	$scope.ruta = "/HojaRol";
	  	
//	    $scope.verPersonaje = function(personaje){
//	    	$rootScope.nombrePersonaje = personaje;
//	    	$location.path($scope.ruta);
//	    };
	    
//	    $scope.guardarEdad = function(personaje, listName){
//	    	
//	    	for ( var edad in $scope.cartasPersonajes.listas) {
//	    		if(listName != edad){
//	    			for (var i = 0; i < $scope.cartasPersonajes.listas[edad].length; i++) {
//	    				if($scope.cartasPersonajes.listas[edad][i].nombre == personaje.nombre){
//	    					//actualizar edad
//							$scope.cartasPersonajes.listas[edad][i].edad = edad;
//							personaje.edad = edad;
//							
//							//Se actualiza la edad en la hoja del personaje
//							//TODO
//							break;
//	    				}
//					}
//	    		}
//			}
//	    };
	  
  }]);
