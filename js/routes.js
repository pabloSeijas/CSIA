var app = angular.module("CSIA-app", ["ngRoute"]);

app.config(function($routeProvider) {$routeProvider
    .when("/", {templateUrl : "./wellGeometry/wellGeometry.html"
    })
    .when("/casingTipology", {templateUrl : "./casingTipology/casingTipology.html"
    })
    .when("/wellGeometry", {templateUrl : "./wellGeometry/wellGeometry.html"
    })
    .when("/imputParameters", {templateUrl : "./inputParameters/inputParameters.html"
    })
    .when("/cementTipology", {templateUrl: "./cementTipology/cementTipology.html"
    })
});
app.controller('wellGeometry', function($scope) {
    var OH,L,OBG,FTG,Biot,Pp,Pminitial,rd,yFormation,eFormation,kForm,aForm,oTect,rc,tiGeo,oZ,oHmin,oHmax;
    OH = $scope.holeDiameter;
    L = $scope.verticalDepht;
    OBG = $scope.overburrenPressure;
    FTG = $scope.formationTemp;
    Biot = $scope.biot;
    

});