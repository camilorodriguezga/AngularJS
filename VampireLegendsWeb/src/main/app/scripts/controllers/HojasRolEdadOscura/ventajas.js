'use strict';

/**
 * @ngdoc function
 * @name vampireLegends.controller:VentajasCtrl
 * @description
 * # VentajasCtrl
 * Controller of the vampireLegends
 */
angular.module('vampireLegends')
  .controller('VentajasCtrl', ['$scope', '$q', function ($scope, $q) {

	  $scope.textoDisciplina="Añadir disciplina";
	  $scope.textoDisciplinaSenda ="Añadir senda";
	  $scope.textoTrasfondo="Añadir trasfondo";
	  $scope.disciplinaAdicionar = {disciplina: "", puntos:1 , tipo:"seleccionar", categoria:""};
	  $scope.disciplinaAdicionarSenda = {disciplina: "", puntos:0 , tipo:"seleccionar", categoria:"senda"};
	  
	  $scope.transfondoAdicionar = {nombre : "", descripcion: "", puntos:0, tipo:"autocompletar"}
	  
	  $scope.trasfondos = [{nombre : "Aliados", descripcion: "Confederados humanos, normalmente familiares y amigos.", puntos:0, tipo:"autocompletar"},
	                            {nombre : "Contactos", descripcion: "las fuentes de la información que posee el personaje.", puntos:0, tipo:"autocompletar"},
	  							{nombre : "Criados", descripcion: "seguidores, guardias y sirvientes.", puntos:0, tipo:"autocompletar"},
	  							{nombre : "Fama", descripcion: "lo conocido que es el personaje entre la sociedad de los mortales.", puntos:0, tipo:"autocompletar"},
	  							{nombre : "Generación", descripcion: "lo alejado que está el personaje de Caín.", puntos:0, tipo:"autocompletar"},
	  							{nombre : "Influencia", descripcion: "el poder político del personaje en la sociedad mortal.", puntos:0, tipo:"autocompletar"},
	  							{nombre : "Mentor", descripcion: "el patrón vampirico que aconseja y apoya al personaje.", puntos:0, tipo:"autocompletar"},
	  							{nombre : "Posición", descripcion: "la condición del personaje en la sociedad vampírica.", puntos:0, tipo:"autocompletar"},
	  							{nombre : "Rebaño", descripcion: "los recipientes a los que el personaje tiene acceso franco y seguro.", puntos:0, tipo:"autocompletar"},
	  							{nombre : "Recursos", descripcion: "riquezas, pertenencias e  ingresos mensuales del personaje.", puntos:0, tipo:"autocompletar"}
	  						   ];
	  
	  $scope.listaTrasfondos = ["Aliados",
	                            "Contactos",
	  							"Criados",
	  							"Fama",
	  							"Generación",
	  							"Influencia",
	  							"Mentor",
	  							"Posición",
	  							"Rebaño",
	  							"Recursos",
	  						   ];
	  
  }]);
