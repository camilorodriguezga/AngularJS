'use strict';

/**
 * @ngdoc function
 * @name vampireLegends.controller:OtrosRasgosCtrl
 * @description
 * # OtrosRasgosCtrl
 * Controller of the vampireLegends
 */
angular.module('vampireLegends')
    .controller('MeritoDefectoCtrl', ['$scope', '$q', function ($scope, $q) {

        $scope.textoMeritoDefecto = "Añadir mérito ó defecto";
        $scope.meritoDefecto = {nombre: "", descripcion: "", puntos: 1, tipo: "autocompletar"};

        $scope.listaMeritosDefectos = [{
            nombre: "Ambidiestro",
            descripcion: "Tienes una gran destreza con la \"mano mala\" y puedes realizar acciones con " +
            "ella sin penalización. Seguirás teniendo que emplear las reglas para acciones múltiples, pero no sufrirás una penalización adicional si," +
            "por ejemplo, empleas dos armas o te ves obligado a emplear la mala.",
            puntos: 1,
            tipo: "autocompletar"
        },
            {
                nombre: "Comer Comida",
                descripcion: "Tienes la capacidad de ingerir comida e incluso saborearla. Aunque no obtienes alimento " +
                "alguno de ella, esta habilidad te sirve para mantener la Mascarada. Por supuesto, no eres capaz de diregir lo que comes, " +
                "así que en algún momento de la noche te verás obligado a vomitarlo.",
                puntos: 1,
                tipo: "autocompletar"
            }
        ]

    }]);
