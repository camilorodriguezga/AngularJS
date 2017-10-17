'use strict';

/**
 * @ngdoc service
 * @name proyecto1App.modeloDatos
 * @description
 * # modeloDatos
 * Factory in the proyecto1App.
 */
angular.module('vampireLegends')
    .factory('usuarioLogueado', function () {

        return function (id, label, properties) {
            this.id = id;
            this.label = label;
            this.properties = properties;

        }
    });
