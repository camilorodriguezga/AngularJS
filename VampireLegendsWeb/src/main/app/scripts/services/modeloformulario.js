'use strict';

/**
 * @ngdoc service
 * @name proyecto1App.modeloFormulario
 * @description
 * # modeloFormulario
 * Factory in the proyecto1App.
 */
angular.module('vampireLegends')
    .factory('modeloFormulario', function () {

        return function (id) {
            this.id = id;
            this.field = [];
        }
    });