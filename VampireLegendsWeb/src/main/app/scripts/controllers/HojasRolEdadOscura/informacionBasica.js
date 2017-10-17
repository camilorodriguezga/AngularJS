'use strict';

/**
 * @ngdoc function
 * @name vampireLegends.controller:InformacionBasicaCtrl
 * @description
 * # InformacionBasicaCtrl
 * Controller of the vampireLegends
 */
angular.module('vampireLegends')
    .controller('InformacionBasicaCtrl', ['$scope', '$q', function ($scope, $q) {

        $scope.listaGeneracion = [
            {generacion: "III", rangoMaximo: 10, reservaSangre: 0, puntosSangreTurno: 0},
            {generacion: "IV", rangoMaximo: 9, reservaSangre: 50, puntosSangreTurno: 10},
            {generacion: "V", rangoMaximo: 8, reservaSangre: 40, puntosSangreTurno: 8},
            {generacion: "VI", rangoMaximo: 7, reservaSangre: 30, puntosSangreTurno: 6},
            {generacion: "VII", rangoMaximo: 6, reservaSangre: 20, puntosSangreTurno: 5},
            {generacion: "VIII", rangoMaximo: 5, reservaSangre: 15, puntosSangreTurno: 3},
            {generacion: "IX", rangoMaximo: 5, reservaSangre: 14, puntosSangreTurno: 2},
            {generacion: "X", rangoMaximo: 5, reservaSangre: 13, puntosSangreTurno: 1},
            {generacion: "XI", rangoMaximo: 5, reservaSangre: 12, puntosSangreTurno: 1},
            {generacion: "XII", rangoMaximo: 5, reservaSangre: 11, puntosSangreTurno: 1},
            {generacion: "XIII", rangoMaximo: 5, reservaSangre: 10, puntosSangreTurno: 1}];

        $scope.listaConductas = ["ARQUITECTO",
            "ANSIOSO DE EMOCIONES",
            "AUTÓCRATA",
            "BELLACO",
            "BIZARRO",
            "BRAVUCÓN",
            "BUFÓN",
            "CELEBRANTE",
            "COMPETIDOR",
            "CONFABULADOR",
            "CONFORMISTA",
            "DIRECTOR",
            "FANÁTICO",
            "HOSCO",
            "JUEZ",
            "MÁRTIR",
            "MASOQUISTA",
            "MONSTRUO",
            "NIÑO",
            "PEDAGOGO",
            "PENITENTE",
            "PERFECCIONISTA",
            "PERVERTIDO",
            "PROTECTOR",
            "REBELDE",
            "SOLITARIO",
            "SUPERVIVIENTE",
            "TRADICIONALISTA",
            "VISIONARIO",
            "VIVIDOR"];

        $scope.listaConceptos = ["ARTISTA",
            "ANIMAL SOCIAL",
            "CRIATURA DE LA NOCHE",
            "CRIMINAL",
            "CHICO",
            "ERRANTE",
            "EXTRAÑO",
            "INTELECTUAL",
            "INVESTIGADOR",
            "OPERARIO",
            "POLÍTICO",
            "PROFESIONAL",
            "REPORTERO",
            "SOLDADO"
        ];


    }]);
