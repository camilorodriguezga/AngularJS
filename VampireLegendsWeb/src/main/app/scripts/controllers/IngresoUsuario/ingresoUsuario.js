'use strict';

/**
 * @ngdoc function
 * @name vampireLegends.controller:IngresoUsuarioCtrl
 * @description
 * # IngresoUsuarioCtrl
 * Controller of the vampireLegends
 */
angular.module('vampireLegends')
    .controller('IngresoUsuarioCtrl', ['$rootScope', '$cookies', '$scope', '$modalInstance', 'UsuarioService', 'informacion', function ($rootScope, $cookies, $scope, $modalInstance, UsuarioService, informacion) {

        //$scope.informacion = informacion[0];
        $scope.alertaIngresoUsuario = false;

        $scope.ingresar = function () {
            $scope.alertaIngresoUsuario = false;
            UsuarioService.consultarUsuario($scope.usuario).then(function (result) {
                if (result != "") {
                    $rootScope.usuario = result;
                    // Put cookie usuario
                    $cookies.putObject('usuario', result);
                    $modalInstance.close();
                    //$modalInstance.close($scope.informacion);
                } else {
                    $scope.alertaIngresoUsuario = true;
                }
            });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);