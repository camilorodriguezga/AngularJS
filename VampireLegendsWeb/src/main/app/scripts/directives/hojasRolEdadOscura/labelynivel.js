'use strict';

/**
 * @ngdoc directive
 * @name konfirmaApp.directive:labelycheckbox
 * @description
 * # labelycheckbox
 */
angular.module('vampireLegends')
  .directive('labelynivel', ['$compile', function ($compile) {
	  return {
		  restrict: 'EA',
		  replace: true,
          scope: {
              puntos: '=',
              generacion: '=',
              nombre: '=',
              lista: '=?',	
              tipo:	'='
          },
          link: function(scope, element, attrs) {

        	  var templateHTML = '';
        	  var html = '';
        	  
	    	  scope.pintarVista = function(){
	    		  //Se crea la lista de checkbox
	        	  var templateHTML =  '<div class="row">';
	        	  
	        	  if(scope.tipo == "autocompletar"){
	        		  templateHTML +=   '<div class="col-md-6">'
  			  		    			+	'<input type="text" class="form-control inputHoja"'
	  	                        	+	'ng-model="nombre"'
	  	                        	+	'typeahead="transfondo.nombre as transfondo.nombre for transfondo in lista | filter:$viewValue | limitTo:20"/>'
	  	                        	+	'</div>';
	        	  }else if(scope.tipo == "seleccionar"){
	        		  templateHTML += 	'<div class="col-md-6">'
	        			  		    + 	'<select name="" '
	        			  		    + 	'ng-options="elemento for elemento in lista" '
	        			  		    + 	'ng-model="nombre" '
	        			  		    + 	'class="form-control selectHoja">'
	        			  		    + 	'</select>'
	        		  				+	'</div>';
	        	  }else if(scope.tipo == "labeleditable"){
	        		  templateHTML += 	'<div class="col-md-6">'
			  						+	'<div class="subtitulos" ng-model="nombre" title="{{descripcion}}" contenteditable="true">{{nombre}}</div>'
			  						+	'</div>';
	        	  }else {
	        		  templateHTML += 	'<div class="col-md-6">'
			  						+	'<div class="subtitulos" ng-model="nombre" title="{{descripcion}}">{{nombre}}</div>'
			  						+	'</div>';
	        	  }
	        	  
	        	  templateHTML	+= '<div class="col-md-2 col-md-offset-1">'
		   						 + '<div nombre="nombre" class="subtitulos">{{puntos}}</div>'
		   						 + '</div>';
				
				  templateHTML  += '<div class="col-md-1" ng-click="restarPuntos();">'
					        	+  '<div class="remover24"></div>'
					        	+  '</div>'
					        	+  '<div class="col-md-1" ng-click="sumarPuntos();">'
					        	+  '<div class="adicionar24"></div>'
					        	+  '</div>'
					        	+  '</div>';
	        	  
	         	  html = $(templateHTML);
	         	  element.html(html);
	         	  $compile(element.contents())(scope);
	    	  }
	    	  
	    	  scope.sumarPuntos = function(){
	    		  if(scope.puntos<5){
	    			  scope.puntos += 1;
	    		  }
	    	  }
	    	  scope.restarPuntos = function(){
	    		  if(scope.puntos>0){
	    			  scope.puntos -= 1;
	    		  }
	    	  }
	    	  
	    	  //crea la directiva de checkbox de acuerdo a los parametros recibidos
	    	  scope.crearSelectCheckbox = function(){
	    		  //pintar vista
	        	  scope.pintarVista();
	    	  }
	    	  
	    	  //Se llama al metodo que crea los checkbox
	    	  scope.crearSelectCheckbox();
          }
      };
  }]);
