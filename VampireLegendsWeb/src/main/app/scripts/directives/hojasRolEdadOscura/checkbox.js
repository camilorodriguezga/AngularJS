'use strict';

/**
 * @ngdoc directive
 * @name konfirmaApp.directive:obtenerdirectiva
 * @description
 * # checkboxiteracion
 * valor : numero de checkbox seleccionados
 * generacion.rangoMaximo : numero de checkbox a mostrar
 * nombre : nombre del checkbox
 */
angular.module('vampireLegends')
    .directive('checkbox', ['$compile', '$rootScope', function ($compile, $rootScope) {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                puntos: '=',
                generacion: '=',
                nombre: '@'
            },
            link: function (scope, element, attrs) {

                var templateHTML = '';
                var html = '';


                //Se llena la lista de checkbox 
                scope.cambiarValor = function (posicion) {
                    for (var i in scope.datoscheckbox) {
                        if (i == posicion && !scope.datoscheckbox[i].respuesta) {
                            scope.datoscheckbox[i].respuesta = false;
                        } else if (i <= posicion) {
                            scope.datoscheckbox[i].respuesta = true;
                        } else {
                            scope.datoscheckbox[i].respuesta = false;
                        }
                    }
                };

                //Se guarda en el objeto el numero de puntos seleccionados
                scope.guardarPuntos = function (posicion) {
                    scope.puntos = posicion + 1;
                }

                //Se crea el html con checkbox de la hoja de rol
                scope.crearArrayCheckbox = function () {
                    scope.datoscheckbox = [];
                    //Se realiza la precarga del checkbox
                    for (var key = 0; key < scope.generacion; key++) {
                        scope.datoscheckbox[key] = {}
                        scope.datoscheckbox[key].nombre = scope.nombre + key;

                        if (key < scope.puntos) {
                            scope.datoscheckbox[key].respuesta = true;
                        } else {
                            scope.datoscheckbox[key].respuesta = false;
                        }
                    }

                }


                scope.pintarVista = function () {
                    //Se crea la lista de checkbox
                    var templateHTML = '<div class="form-group" id="{{nombre}}">'
                        + '<input type="checkbox" ng-repeat="dato in datoscheckbox track by $index" name="{{nombre}}{{$index}}"'
                        + '  ng-model="dato.respuesta" ng-change="cambiarValor($index); guardarPuntos($index);">'
                        + '</div>';

                    html = $(templateHTML);
                    element.html(html);
                    $compile(element.contents())(scope);
                }

                //Se actualiza los checkbox de la hoja
                scope.$watch('generacion', function (newVal, oldVal) {
                    if (newVal != undefined && newVal != oldVal) {
                        scope.crearArrayCheckbox();
                    }
                });

                //Se actualiza los checkbox de la hoja
                scope.$watch('puntos', function (newVal, oldVal) {
                    if (newVal != undefined && newVal != oldVal) {
                        if (scope.nombre == "camino" || scope.nombre == "fuerzaVoluntad" || scope.nombre == "fuerzaVoluntadGastada") {
                            scope.crearArrayCheckbox();
                        }
                    }
                });

                //crea la directiva de checkbox de acuerdo a los parametros recibidos
                scope.crearCheckbox = function () {
                    //crear el array con la nueva cantidad de checkbox
                    scope.crearArrayCheckbox();
                    //pintar vista
                    scope.pintarVista();
                }

                //Se llama al metodo que crea los checkbox
                scope.crearCheckbox();

            }
        };
    }]);
