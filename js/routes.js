var app = angular.module("CSIA-app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./wellGeometry/wellGeometry.html"
    })
    .when("/casingTipology", {
        templateUrl : "./casingTipology/casingTipology.html"
    })
    .when("/wellGeometry", {
        templateUrl : "./wellGeometry/wellGeometry.html"
    })
    .when("/stressData", {
        templateUrl : "./stressData/stressData.html"
    })
    .when("/cementTipology", {
        templateUrl: "./cementTipology/cementTipology.html"
    })
    .when("/formationTipology", {
        templateUrl: "./formationTipology/formationTipology.html"
    });
});