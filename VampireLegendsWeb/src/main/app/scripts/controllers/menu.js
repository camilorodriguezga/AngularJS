'use strict';

/**
 * @ngdoc function
 * @name vampireLegends.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the vampireLegends
 */
angular.module('vampireLegends')
    .controller('MenuCtrl', ['$rootScope', '$cookies', '$scope', "$location", '$modal', '$route',
        function ($rootScope, $cookies, $scope, $location, $modal, $route) {

            $scope.mostrarIngresoUsuario = true;
            $scope.informacion = ['item1', 'item2', 'item3'];

            $scope.$watch('usuario', function () {
                if ($rootScope.usuario != undefined) {
                    $scope.mostrarIngresoUsuario = false;
                } else {
                    $rootScope.usuario = $cookies.getObject('usuario');
                }
            });

            $scope.open = function () {
                var modalInstance = $modal.open({
                    templateUrl: 'views/ingresoUsuario.html',
                    controller: 'IngresoUsuarioCtrl',
                    resolve: {
                        informacion: function () {
                            return $scope.informacion;
                        }
                    }
                });
            };

            $scope.guardarEdad = function (edad) {
                $rootScope.edad = edad;
                $scope.cargarPagina();
            };

            $scope.cargarPagina = function () {
                $location.path("/HojaRol");
                $route.reload();
            };

            $scope.cerrarSesion = function () {
                //cerrando session
                $rootScope.usuario = undefined;
                // Removing a cookie
                $cookies.remove('usuario');
                $scope.mostrarIngresoUsuario = true;
            };

        }]);
