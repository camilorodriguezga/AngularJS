'use strict';

/**
 * @ngdoc service
 * @name vampireLegends.UsuarioService
 * @description
 * # UsuarioService
 * Service in the vampireLegends.
 */
angular.module('vampireLegends')
  .service('UsuarioService',['$q', 'UsuarioRest', function ($q, UsuarioRest) {

		this.crearUsuario = function(usuario){
			var promise = $q.defer();
//			UsuarioRest.crearUsuario(usuario).success(function(result){
				promise.resolve("");
//			}).error(function(error){
//				promise.reject(error);
//			});
			return promise.promise;
		};
		
		this.consultarUsuario = function(usuario){
			var promise = $q.defer();
			UsuarioRest.consultarUsuario(usuario).success(function(result){
				promise.resolve(result);
			}).error(function(error){
				promise.reject(error);
			});
			return promise.promise;
		};
  }]);
