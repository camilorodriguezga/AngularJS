'use strict';

/**
 * @ngdoc directive
 * @name konfirmaApp.directive:adicionaryremover
 * @description
 * # adicionaryremover
 */
angular.module('vampireLegends')
    .directive('adicionaryremover', ['$compile', function ($compile) {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                array: '=',
                texto: '=?',
                adicion: '=',
                categoria: '=?'
            },
            link: function (scope, element, attrs) {

                var templateHTML = '';
                var html = '';

                scope.pintarVista = function () {
                    //Se crea la imagen de adicionar y remover
                    var templateHTML = '<div class="row">';

                    if (scope.texto != undefined && scope.texto != null && scope.texto != "") {
                        templateHTML += '<div class="col-md-9">';
                        templateHTML += '<div class="subtitulos">{{texto}}</div>';
                        templateHTML += '</div>';
                    }

                    templateHTML += '<div class="col-md-1 remover" ng-click="remover();">';
                    templateHTML += '<div class="" ></div>';
                    templateHTML += '</div>';
                    templateHTML += '<div class="col-md-1 adicionar" ng-click="adicionar();">';
                    templateHTML += '<div class="" ></div>';
                    templateHTML += '</div>';
                    templateHTML += '</div>';


                    html = $(templateHTML);
                    element.html(html);
                    $compile(element.contents())(scope);
                }

                scope.adicionar = function () {
                    if (scope.array == undefined) {
                        scope.array = [];
                    }
                    //Se crea un objeto nuevo con la estructura de la variable y se guarda en el array
                    scope.array.push(JSON.parse(JSON.stringify(scope.adicion)));
                };

                scope.remover = function (posicion) {
                    if (scope.array.length != null && scope.array.length > 0) {
                        if (posicion != undefined && posicion != null && posicion != "") {
                            scope.removerPorCategoria(posicion);
                        } else {
                            scope.removerPorCategoria(scope.array.length - 1);
                        }

                    }
                };

                scope.removerPorCategoria = function (posicion) {
                    if (scope.array[posicion].categoria == scope.categoria) {
                        //Se elimina el ultimo elemento del array
                        scope.array.splice(posicion, 1);
                    } else {
                        posicion--;
                        scope.remover(posicion);
                    }
                };

                //crea la directiva de adicionar y remover de acuerdo a los parametros recibidos
                scope.crearAdicionarRemover = function () {
                    //pintar vista
                    scope.pintarVista();
                };

                //Se llama al metodo que crea los checkbox
                scope.crearAdicionarRemover();
            }
        };
    }]);
