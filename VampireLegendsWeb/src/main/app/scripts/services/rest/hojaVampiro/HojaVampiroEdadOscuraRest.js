/**
 *
 */
'use strict';
angular.module('vampireLegends')
    .factory('HojaVampiroEdadOscuraRest', ['$http', function ($http) {
        return {

            consultarHojaRol: function (params) {
                return $http({
                    method: 'GET',
                    url: 'rest/hojaVampiroEdadOscura/consultarHojaRol',
                    params: params
                });
            },

            consultarHojasRol: function (data) {
                return $http({
                    method: 'POST',
                    url: 'rest/hojaVampiroEdadOscura/consultarHojasRol',
                    headers: {'Content-Type': undefined, 'Accept': 'application/json'},
                    data: data,
                    transformRequest: angular.identity
                });
            },

            consultarHojasRolInformacionBasica: function (data) {
                return $http({
                    method: 'POST',
                    url: 'rest/hojaVampiroEdadOscura/consultarHojasRolInformacionBasica',
                    headers: {'Content-Type': undefined, 'Accept': 'application/json'},
                    data: data,
                    transformRequest: angular.identity
                });
            },

            guardarHojaRol: function (data) {
                return $http({
                    method: 'POST',
                    url: 'rest/hojaVampiroEdadOscura/guardarHojaRol',
                    data: data,
                    headers: {'Content-Type': 'application/json'}
                });
            }
        }
    }]);
