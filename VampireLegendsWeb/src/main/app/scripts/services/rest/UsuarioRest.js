/**
 *
 */
'use strict';
angular.module('vampireLegends')
    .factory('UsuarioRest', ['$http', function ($http) {
        return {

            crearUsuario: function (data) {
                return $http({
                    method: 'PUT',
                    url: 'rest/usuario/crearUsuario',
                    data: data,
                    headers: {'Content-Type': 'application/json'}
                });
            },

            consultarUsuario: function (data) {
                return $http({
                    method: 'POST',
                    url: 'rest/usuario/consultarUsuario',
                    data: data,
                    headers: {'Content-Type': 'application/json'}
                });
            }
        }
    }]);
