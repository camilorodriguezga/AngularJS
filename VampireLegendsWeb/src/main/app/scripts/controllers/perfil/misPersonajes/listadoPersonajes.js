'use strict';

/**
 * @ngdoc function
 * @name vampireLegends.controller:ListadoPersonajesCtrl
 * @description
 * # ListadoPersonajesCtrl
 * Controller of the VampireLegends
 */
angular.module('vampireLegends')
  .controller('ListadoPersonajesCtrl', ['$rootScope', '$scope', 'HojaVampiroEdadOscuraService', '$location', '$window',
                                        function ($rootScope, $scope, HojaVampiroEdadOscuraService, $location, $window) {
	
	  
//	  $scope.cartasPersonajes = {selected: null};
	  $scope.cartasPersonajes = {
			  "selected": null,
			  "listas": {
			    "A": [
			      {
			        "nombre": "Item A1"
			      },
			      {
			        "nombre": "Item A2"
			      },
			      {
			        "nombre": "Item A3"
			      }
			    ],
			    "B": [
			      {
			        "nombre": "Item B1"
			      },
			      {
			        "nombre": "Item B2"
			      },
			      {
			        "nombre": "Item B3"
			      }
			    ]
			  }
			};
	  $scope.card = "cardVacia";
	  $scope.otrosFiltros = {};
	  
//	  if($rootScope.usuario != undefined && $rootScope.usuario != null){
//		  //Se realiza la consulta de la informacion basica de los personajes
//		  HojaVampiroEdadOscuraService.consultarHojasRolInformacionBasica($rootScope.usuario.correo, $scope.otrosFiltros).then(function(result){
//			  $scope.cartasPersonajes.listas = result;
//		  });
//	  }
	  
	  $scope.verPersonaje = function(personaje){
		  $rootScope.nombrePersonaje = personaje;
	  };
  }]);
