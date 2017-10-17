'use strict';

/**
 * @ngdoc function
 * @name vampireLegends.controller:HojaRolEdadOscuraCtrl
 * @description
 * # HojaRolEdadOscuraCtrl
 * Controller of the vampireLegends
 */
angular.module('vampireLegends')
    .controller('HojaRolEdadOscuraCtrl', ['$rootScope', '$scope', '$route', 'HojaVampiroEdadOscuraService',
        function ($rootScope, $scope, $route, HojaVampiroEdadOscuraService) {

            $scope.hojaRolEdadOscura = {};
            $scope.hojaRolEdadOscura.edad = ($rootScope.edad != undefined && $rootScope.edad != null) ? $rootScope.edad : undefined;
            $scope.hojaRolEdadOscura.correo = ($rootScope.usuario != undefined && $rootScope.usuario != null) ? $rootScope.usuario.correo : undefined;
            $scope.hojaRolEdadOscura.nombre = ($rootScope.nombrePersonaje != undefined && $rootScope.nombrePersonaje != null) ? $rootScope.nombrePersonaje : "";

            $rootScope.nombrePersonaje = null;
            $scope.mensajeAlertaHojaRol = false;

            $scope.consultarHojaRol = function () {
                if ($scope.hojaRolEdadOscura.nombre != undefined && $scope.hojaRolEdadOscura.nombre != null
                    && $rootScope.usuario != null && $rootScope.usuario.correo != null) {
                    HojaVampiroEdadOscuraService.consultarHojaRol($rootScope.usuario.correo, $scope.hojaRolEdadOscura.nombre).then(function (result) {
                        if (result != null && result != "") {
                            $scope.hojaRolEdadOscura = result;
                            $scope.actualizarListaDisciplinas();
                        }
                    });
                }
            };

            $scope.guardarHojaRolVampiroEdadOscura = function () {
                $scope.mensajeAlertaHojaRol = false;
                HojaVampiroEdadOscuraService.guardarHojaRol($scope.hojaRolEdadOscura).then(function (result) {
                    if (result) {
                        $scope.guardarHojaRol = "alert_hojaRolEdadOscura_guardarHoja";
                        $scope.tipoMensaje = "alert alert-success";

                    } else {
                        $scope.guardarHojaRol = "alert_hojaRolEdadOscura_errorHoja";
                        $scope.tipoMensaje = "alert alert-danger";
                    }
                    $scope.mensajeAlertaHojaRol = true;

                });
            };

            $scope.limpiarHojaRolVampiroEdadOscura = function () {
                $route.reload();
                $rootScope.edad = ($scope.hojaRolEdadOscura.edad != null && $scope.hojaRolEdadOscura.edad != undefined && $scope.hojaRolEdadOscura.edad != "") ? $scope.hojaRolEdadOscura.edad : 'OSCURA';
            };

            $scope.listaClanesEdadOscura = [{
                clan: "Brujah",
                imagen: "images/clanBrujah.png",
                disciplinas: [{
                    disciplina: "Celeridad",
                    puntos: 1,
                    tipo: "label",
                    categoria: ""
                }, {disciplina: "Potencia", puntos: 1, tipo: "label", categoria: ""}, {
                    disciplina: "Presencia",
                    puntos: 1,
                    tipo: "label",
                    categoria: ""
                }],
                debilidad: "Suma 2 a la dificultad de las tiradas para resistir en frenesí"
            },
                {
                    clan: "Gangrel",
                    imagen: "images/clanGangrel.png",
                    disciplinas: [{
                        disciplina: "Animalismo",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }, {disciplina: "Fortaleza", puntos: 1, tipo: "label", categoria: ""}, {
                        disciplina: "Protean",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }],
                    debilidad: "Cada vez que el Gangrel entra en frenesí, adquiere un rasgo animal. Cada cinco de estos rasgos restan 1 a los atributos sociales del Gangrel."
                },
                {
                    clan: "Malkavian",
                    imagen: "images/clanMalkavian.png",
                    disciplinas: [{
                        disciplina: "Auspex",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }, {disciplina: "Dementación", puntos: 1, tipo: "label", categoria: ""}, {
                        disciplina: "Ofuscación",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }],
                    debilidad: "Tienen al menos un transtorno mental."
                },
                {
                    clan: "Nosferatu",
                    imagen: "images/clanNosferatu.png",
                    disciplinas: [{
                        disciplina: "Animalismo",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }, {disciplina: "Ofuscación", puntos: 1, tipo: "label", categoria: ""}, {
                        disciplina: "Potencia",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }],
                    debilidad: "Apariencia 0, ademas no puede usar puntos de experiencia para mejorar esta puntuación."
                },
                {
                    clan: "Toreador",
                    imagen: "images/clanToreador.png",
                    disciplinas: [{
                        disciplina: "Auspex",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }, {disciplina: "Celeridad", puntos: 1, tipo: "label", categoria: ""}, {
                        disciplina: "Presencia",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }],
                    debilidad: "Cuando un Toreador ve, siente o incluso huelealgo verdaderamente hermoso, debe pasar una tirada de autocontrol (dificultad 6) para no caer embelesado por la sensación."
                },

                {
                    clan: "Tremere",
                    imagen: "images/clanTremere.png",
                    disciplinas: [
                        {disciplina: "Auspex", puntos: 1, tipo: "label", categoria: ""},
                        {disciplina: "Dominación", puntos: 1, tipo: "label", categoria: ""},
                        {disciplina: "Taumaturgia", puntos: 1, tipo: "label", categoria: ""},
                        {disciplina: "La Senda de la Sangre", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "Contramagia Taumatúrgica", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "Control Atmosférico", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "Dominio Elemental", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "El Encanto de las Llamas", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "Manos de Destrucción", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "Movimiento Mental", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "Poderío de Neptuno", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "La Senda de la Conjuración", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "La Senda de la Corrupción", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "La Senda de Marte", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "La Senda de la Tecnomancia", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "La Senda de la Venganza del Padre", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "La Senda de la Tecnomancia", puntos: 0, tipo: "label", categoria: "senda"},
                        {disciplina: "La Senda Verde", puntos: 0, tipo: "label", categoria: "senda"}
                    ],
                    debilidad: "Todos los Brujos están al menos un paso más cerca de quedar vinculados con sus antiguos y por lo tanto suelen mostrar una gran lealtad... para evitar que dicha lealtad le sea impuesta. Los Tremere lo tienen difícil para resistirse a la voluntad de sus mayores; resta 1 a la dificultad de los intentos de Dominación por parte de un superior del clan."
                },

                {
                    clan: "Ventrue",
                    imagen: "images/clanVentrue.png",
                    disciplinas: [{
                        disciplina: "Dominación",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }, {disciplina: "Fortaleza", puntos: 1, tipo: "label", categoria: ""}, {
                        disciplina: "Presencia",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }],
                    debilidad: "El gusto de los Ventrue está enrarecido hasta el extremo de la exclusividad: pueden ingerir sólo un tipo concreto de sangre."
                },
                {
                    clan: "Lasombra",
                    imagen: "images/clanLasombra.png",
                    disciplinas: [{
                        disciplina: "Dominación",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }, {disciplina: "Obtenebración", puntos: 1, tipo: "label", categoria: ""}, {
                        disciplina: "Potencia",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }],
                    debilidad: "Los vampiros Lasombra carecen de reflejo. Ademas, data su afinidad con las tinieblas, los Lasombra sufren un nivel adicional de daño por la Luz del sol."
                },
                {
                    clan: "Tzimisce",
                    imagen: "images/clanTzimisce.png",
                    disciplinas: [{
                        disciplina: "Animalismo",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }, {disciplina: "Auspex", puntos: 1, tipo: "label", categoria: ""}, {
                        disciplina: "Vicisitud",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }],
                    debilidad: "Donde duerma un Tzimisce , debe rodearse con al menos dos puñados de tierra de un lugar importante para él en su vida mortal."
                },
                {
                    clan: "Assamita",
                    imagen: "images/clanAssamita.png",
                    disciplinas: [{
                        disciplina: "Celeridad",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }, {disciplina: "Extinción", puntos: 1, tipo: "label", categoria: ""}, {
                        disciplina: "Ofuscación",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }],
                    debilidad: "Cada vez que un Assamita beba o incluso pruebe la sangre de otro vampiro, deberá pasar una tirada de Autocontrol (dificultad equivalente al número de puntos de sangre ingeridos + 3). Si falla se convierte en un adicto, y debe hacer otra tirada de Autocontrol la próxima  vez que este en contacto con sangre de vampiro."
                },
                {
                    clan: "Giovanni",
                    imagen: "images/clanGiovanni.png",
                    disciplinas: [{
                        disciplina: "Dominación",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }, {disciplina: "Nigromancia", puntos: 1, tipo: "label", categoria: ""}, {
                        disciplina: "Potencia",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }],
                    debilidad: "Los Nigromantes hacen el doble de daño  que cualquier otro vampiro a los mortales (y sólo a los mortales) que reciben su Beso."
                },
                {
                    clan: "Ravnos",
                    imagen: "images/clanRavnos.png",
                    disciplinas: [{
                        disciplina: "Animalismo",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }, {disciplina: "Fortaleza", puntos: 1, tipo: "label", categoria: ""}, {
                        disciplina: "Quimerismo",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }],
                    debilidad: "Cada Ravnos tiene alguna debilidad por algún tipo de truco, engallo o fullería. Cuando se presenta la oprtunidad, el Ravnos debe pasar una tirada de autocontrol a dificultad 6 para no caer en la tentación."
                },
                {
                    clan: "Seguidores de Set",
                    imagen: "images/clanSeguidoresSet.png",
                    disciplinas: [{
                        disciplina: "Ofuscación",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }, {disciplina: "Presencia", puntos: 1, tipo: "label", categoria: ""}, {
                        disciplina: "Serpentis",
                        puntos: 1,
                        tipo: "label",
                        categoria: ""
                    }],
                    debilidad: "Suma dos niveles a cualquier daño sufrido por la exposición al sol. Además, los Setitas restan un dado a todas las tiradas efectuadas bajo una luz brillante."
                }];

            $scope.listaDisciplinasCompleta = [
                "Animalismo",
                "Auspex",
                "Celeridad",
                "Dementación",
                "Dominación",
                "Extinción",
                "Fortaleza",
                "Nigromancia",
                "Ofuscación",
                "Obtenebración",
                "Potencia",
                "Presencia",
                "Protean",
                "Quimerismo",
                "Serpentis",
                "Taumaturgia",
                "Vicisitud"
            ];

            $scope.listaDisciplinasUnicasCLan = [];
            $scope.listaDisciplinasUnicasCLan['Tremere'] = ["La Senda de la Sangre",
                "Contramagia Taumatúrgica",
                "Control Atmosférico",
                "Dominio Elemental",
                "El Encanto de las Llamas",
                "Manos de Destrucción",
                "Movimiento Mental",
                "Poderío de Neptuno",
                "La Senda de la Conjuración",
                "La Senda de la Corrupción",
                "La Senda de Marte",
                "La Senda de la Tecnomancia",
                "La Senda de la Venganza del Padre",
                "La Senda de la Tecnomancia",
                "La Senda Verde"
            ];

            //Se elimina las disciplinas que ya se han elegido por el clan
            $scope.actualizarListaDisciplinas = function () {
                $scope.listaDisciplinas = JSON.parse(JSON.stringify($scope.listaDisciplinasCompleta));
            };

            $scope.consultarHojaRol();
        }]);
