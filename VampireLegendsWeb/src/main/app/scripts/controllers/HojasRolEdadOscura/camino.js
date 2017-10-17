'use strict';

/**
 * @ngdoc function
 * @name vampireLegends.controller:CaminoCtrl
 * @description
 * # CaminoCtrl
 * Controller of the vampireLegends
 */
angular.module('vampireLegends')
    .controller('CaminoCtrl', ['$scope', '$q', function ($scope, $q) {

        $scope.nivelHumanidad = "10";

        $scope.listaCamino = [{nombre: "Humanidad", descripcion: "", puntos: "0", puntosCamino: "10"},
            {
                nombre: "La Senda de la Sangre",
                descripcion: "Saluda la llamada de haqim y di su mensaje. " +
                "La sangre del kafir corre por nuestras venas; es nuestro derecho, nuestra obligación tomarla. " +
                "Las reservas no tienen lugar en el corazón del asesino. -Las Parábolas de las Sangre",
                puntos: "0",
                puntosCamino: "10"
            },
            {
                nombre: "La Senda de los Huesos",
                descripcion: "El cuerpo es un cascarón; la mente es una celda. " +
                "El alma no es más que paja. La muerte, inevitable, es el objetivo. -Alessandre Giovanni Thanatopsis IV.",
                puntos: "0",
                puntosCamino: "10"
            },
            {
                nombre: "La Senda de la Noche",
                descripcion: "La única blasfemia que se puede cometer es no lograr reconocer las " +
                "propias pasiones oscuras. La no-vida es una maldición, sí, aunque su propósito es dominar la maldad interior " +
                "... y entregársela al mundo. -Alexei Guylaine, Sabbat Templario.",
                puntos: "0",
                puntosCamino: "10"
            },
            {
                nombre: "La Senda de la Metamorfosis",
                descripcion: "Nunca llegaremos al fin hasta que la crisálida nos tome. " +
                "-Laika, koldun Tzimisce",
                puntos: "0",
                puntosCamino: "10"
            },
            {
                nombre: "La Senda de la Paradoja",
                descripcion: "Estamos atrapados fuera del ciclo, pero no renunciamos a él. -Raj, Diarios " +
                "Sangrientos",
                puntos: "0",
                puntosCamino: "10"
            },
            {
                nombre: "La Senda del Tifón",
                descripcion: "Son los secretos que retuercen nuestras almas, estos mismos enigmas los que señalan " +
                "con el veneno del maestro. -Khamala Bey, Las Mil Noches de Sutekh",
                puntos: "0",
                puntosCamino: "10"
            }
        ];

    }]);
