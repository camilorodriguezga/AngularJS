'use strict';

/**
 * @ngdoc directive
 * @name konfirmaApp.directive:saludEstado
 * @description
 * # saludEstado
 */
angular.module('vampireLegends')
  .directive('saludestado', ['$compile', function ($compile) {
	  return {
		  restrict: 'EA',
		  replace: true,
          scope: {
              nivelsalud: '='
          },
          link: function(scope, element, attrs) {

        	  var templateHTML = '';
        	  var html = '';
        	  scope.listaEstadosSalud = ["sano", "contundente", "letal", "agravado"];
        	  
	    	  scope.pintarVista = function(){
	    		  
	    		  //Se crea la imagen de adicionar y remover
	        	  var templateHTML = 	'<div class="row">';
	        		  
        		  
    			  templateHTML += 	'<div class="col-md-8">';
		          templateHTML +=	'<div class="subtitulos">{{nivelsalud.nombre}}</div>';
		          templateHTML +=	'</div>';
				  
		          templateHTML += 	'<div class="col-md-2">';
		          templateHTML +=	'<div class="subtitulos">{{nivelsalud.penalizacion}}</div>';
		          templateHTML +=	'</div>';
	        	  
	        	  templateHTML += 	'<div class="col-md-2">';
	        	  templateHTML +=	'<div ng-class="nivelsalud.estado" ng-click="cambiarEstadoSalud();"></div>';
	        	  templateHTML +=	'</div>';
	        	  
	        	  templateHTML +=	'</div>';
	        	  
	        	  
	         	  html = $(templateHTML);
	         	  element.html(html);
	         	  $compile(element.contents())(scope);
	    	  }
	    	  
	    	  //Actualiza el daño del personaje
	    	  scope.cambiarEstadoSalud = function(){
	    		  for (var i = 0; i < scope.listaEstadosSalud.length; i++) {
	    			  if(scope.nivelsalud.estado == scope.listaEstadosSalud[i]){
	    				  if(i+1 == scope.listaEstadosSalud.length){
	    					  scope.nivelsalud.estado = scope.listaEstadosSalud[0];
	    				  }else{
	    					  scope.nivelsalud.estado = scope.listaEstadosSalud[i+1];
	    				  }
	    				  break;
	    			  }
	    		  }
	    	  }
	    	  
	    	  scope.$watch('nivelsalud', function (newVal, oldVal) {
	    		  if(newVal != undefined && newVal != oldVal){
	    			  //pintar vista
		        	  scope.pintarVista();
	    		  }
	    	  });
	    	  
	    	  //crea la directiva de adicionar y remover de acuerdo a los parametros recibidos
	    	  scope.crearSaludPersonaje = function(){
	    		  //pintar vista
	        	  scope.pintarVista();
	    	  }
	    	  
	    	  //Se llama al metodo que crea los checkbox
	    	  scope.crearSaludPersonaje();
          }
      };
  }]);
