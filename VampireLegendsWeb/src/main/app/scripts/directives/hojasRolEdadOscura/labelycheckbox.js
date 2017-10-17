'use strict';

/**
 * @ngdoc directive
 * @name konfirmaApp.directive:labelycheckbox
 * @description
 * # labelycheckbox
 */
angular.module('vampireLegends')
    .directive('labelycheckbox', ['$compile', function ($compile) {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                puntos: '=',
                generacion: '=',
                nombre: '=',
                lista: '=?',
                tipo: '='
            },
            link: function (scope, element, attrs) {

                var templateHTML = '';
                var html = '';

                scope.pintarVista = function () {
                    //Se crea la lista de checkbox
                    var templateHTML = '';

                    if (scope.tipo == "autocompletar") {
                        templateHTML += '<div class="col-md-7">'
                            + '<input type="text" class="inputHoja"'
                            + 'ng-model="nombre"'
                            + 'typeahead="transfondo.nombre as transfondo.nombre for transfondo in lista | filter:$viewValue | limitTo:20"/>'
                            + '</div>';
                    } else if (scope.tipo == "seleccionar") {
                        templateHTML += '<div class="col-md-7">'
                            + '<select name="" '
                            + 'ng-options="elemento for elemento in lista" '
                            + 'ng-model="nombre" '
                            + 'class="form-control selectHoja">'
                            + '</select>'
                            + '</div>';
                    } else if (scope.tipo == "labeleditable") {
                        templateHTML += '<div class="col-md-7">'
                            + '<div class="subtitulos" ng-model="nombre" title="{{descripcion}}" contenteditable="true">{{nombre}}</div>'
                            + '</div>';
                    } else {
                        templateHTML += '<div class="col-md-7">'
                            + '<div class="subtitulos" ng-model="nombre" title="{{descripcion}}">{{nombre}}</div>'
                            + '</div>';
                    }

                    templateHTML += '<div class="col-md-5">'
                        + '<checkbox nombre="nombre"  puntos="puntos" generacion="generacion"></checkbox>'
                        + '</div>'

                    html = $(templateHTML);
                    element.html(html);
                    $compile(element.contents())(scope);
                }


                //crea la directiva de checkbox de acuerdo a los parametros recibidos
                scope.crearSelectCheckbox = function () {
                    //pintar vista
                    scope.pintarVista();
                }

                scope.setearNombre = function (posicion) {
                    scope.nombre = nombre;
                    console.log(scope.lista[posicion]);
                };

                //Se llama al metodo que crea los checkbox
                scope.crearSelectCheckbox();
            }
        };
    }]);
