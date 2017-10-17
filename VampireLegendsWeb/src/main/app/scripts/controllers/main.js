'use strict';

/**
 * @ngdoc function
 * @name vampireLegends.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vampireLegends
 */
angular.module('vampireLegends')
    .controller('MainCtrl', ['$scope', 'UsuarioService', 'modalpopup', function ($scope, UsuarioService, modalpopup) {

        $scope.usuario = {};
        $scope.registroUsuario = "";
        $scope.tipoMensaje = "";
        $scope.mensajeAlertaRegistroUsuario = false;
        $scope.mostrarSonido = false;
        $scope.volumen = false;
        $scope.sonido = "music/AloneIBreak";

        $scope.volumenAudio = function () {
            var audio = document.querySelector("#audio");
            if ($scope.volumen) {
                audio.play();
            } else {
                audio.pause();
            }
            $scope.volumen = !$scope.volumen;
        }

        $scope.crearUsuario = function () {
            modalpopup.mostarCargando();
            $scope.mensajeAlertaRegistroUsuario = false;
            //Crear usuario registrado
            UsuarioService.crearUsuario($scope.usuario).then(function (result) {
                modalpopup.ocultarCargando();
                modalpopup.modalInstanceLoading.dismiss('cancel');
//			  if(result){
//				  $scope.registroUsuario = "alert_main_usuario_creado";
//				  $scope.tipoMensaje = "alert alert-success";
//			  }else{
//				  $scope.registroUsuario = "alert_main_usuario_existe";
//				  $scope.tipoMensaje = "alert alert-warning";
//			  }
//			  $scope.mensajeAlertaRegistroUsuario = true;
            });
        }

    }]);
