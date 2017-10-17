'use strict';

/**
 * @ngdoc service
 * @name vampireLegends.HojaVampiroEdadOscuraService
 * @description
 * # HojaVampiroEdadOscuraService
 * Service in the vampireLegends.
 */
angular.module('vampireLegends')
    .service('HojaVampiroEdadOscuraService', ['$q', 'HojaVampiroEdadOscuraRest', function ($q, HojaVampiroEdadOscuraRest) {

        this.consultarHojaRol = function (correo, nombre) {
            var promise = $q.defer();
            HojaVampiroEdadOscuraRest.consultarHojaRol({"correo": correo, "nombre": nombre}).success(function (result) {
                promise.resolve(result);
            }).error(function (error) {
                promise.reject(error);
            });
            return promise.promise;
        };

        this.consultarHojasRol = function (correo, otrosFiltros) {
            var promise = $q.defer();
            var fd = new FormData();
            fd.append("correo", JSON.stringify(correo));
            fd.append("otrosFiltros", JSON.stringify(otrosFiltros));
            HojaVampiroEdadOscuraRest.consultarHojasRol(fd).success(function (result) {
                promise.resolve(result);
            }).error(function (error) {
                promise.reject(error);
            });
            return promise.promise;
        };

        this.consultarHojasRolInformacionBasica = function (correo, otrosFiltros) {
            var promise = $q.defer();
            var fd = new FormData();
            fd.append("correo", JSON.stringify(correo));
            fd.append("otrosFiltros", JSON.stringify(otrosFiltros));
            HojaVampiroEdadOscuraRest.consultarHojasRolInformacionBasica(fd).success(function (result) {
                promise.resolve(result);
            }).error(function (error) {
                promise.reject(error);
            });
            return promise.promise;
        };

        this.guardarHojaRol = function (hojaVampiroEdadOscura) {
            var promise = $q.defer();
            HojaVampiroEdadOscuraRest.guardarHojaRol(hojaVampiroEdadOscura).success(function (result) {
                promise.resolve(result);
            }).error(function (error) {
                promise.reject(error);
            });
            return promise.promise;
        };
    }]);
