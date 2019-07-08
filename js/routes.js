var app = angular.module("CSIA-app", ["ngRoute"]);

app.config(function($routeProvider) {$routeProvider
    .when("/", {templateUrl : "./wellGeometry/wellGeometry.html"
    })
    .when("/casingTipology", {templateUrl : "./casingTipology/casingTipology.html"
    })
    .when("/wellGeometry", {templateUrl : "./wellGeometry/wellGeometry.html"
    })
    .when("/inputParameters", {templateUrl : "./inputParameters/inputParameters.html"
    })
    .when("/cementTipology", {templateUrl: "./cementTipology/cementTipology.html"
    })
});
app.controller('wellGeometry', function($scope, $window) {
    var OH,L,OBG,FTG,Biot,Pp,Pminitial,rd,yFormation,eFormation,kForm,aForm,oTect,rc,tiGeo,oZ,oHmin,oHmax;
    wellNext = function(){
        
        OH = $scope.ohDiameter;
        L = $scope.hvDepht;
        OBG = $scope.opGradient;
        FTG = $scope.ftGradient;
        Biot = $scope.bpConstant;
        Pp = $scope.pPressure;
        Pminitial = $scope.imDensity;
        rd = $scope.fffRadius;
        yFormation = $scope.fpRatio;
        eFormation = $scope.ymFormation;
        kForm = $scope.thcFormation;
        aForm = $scope.cleFormation;
        oTect = $scope.tStress;
        rc = $scope.ohRadius;
        tiGeo = $scope.wfTemperature;
        oZ = $scope.vStress;
        oHmin = $scope.mihStress;
        oHmax = $scope.mahStress;

       






        $window.location.href = "#!casingTipology";
       
    }
    
    


});

app.controller('casingTipology', function($scope,$window) {
    var ODcasing, Wcasing, IDcasing, Ysteel, Esteel, Ksteel, Asteel, ra, rb, THcasing;
    casingNext = function(){
        ODcasing = $scope.cDiameter;
        Wcasing = $scope.cWeight;
        IDcasing = $scope.ciDiameter;
        Ysteel = $scope.cpRatio;
        Esteel = $scope.ymCasing;
        Ksteel = $scope.tcCasing;
        Asteel = $scope.cleCasing;
        ra = $scope.icRadius;
        rb = $scope.ecRadius;
        THcasing = $scope.cThickness;
        


        $window.location.href = "#!cementTipology";
    }
    casingPrev = function(){
        $window.location.href = "#!wellGeometry";
    }
});

app.controller('cementTipology', function($scope,$window) {
    var Pcement, UCS, To, ycement, Ecement,Kcement, Acement, C, O; 

    cementNext = function(){
        Pcement = $scope.cDensity;
        UCS = $scope.ucStrength;
        To = $scope.tStrength;
        ycement = $scope.cpRatio;
        Ecement = $scope. ymCement;
        Kcement = $scope.tcCement;
        Acement = $scope.cleCement;
        C = $scope.cCement;
        O = $scope.aiFriction;

        console.log(Pcement, UCS, To, ycement, Ecement,Kcement, Acement, C, O);

        $window.location.href ="#!inputParameters"
    }
    cementPrev = function(){
        $window.location.href = "#!casingTipology";
    }
});
cementNext = function(){

}
app.controller('inputParameters', function($scope,$window) {
var Pinitial, Pfinal, Pi, Tinitial, Tfinal, T1;
    calculate = function(){
        Pinitial = $scope.iiPressure;
        Pfinal = $scope.fiPressure;
        Pi = $scope.ipChange;
        Tinitial = $scope.iiTemperature;
        Tfinal = $scope.fiTemperature;
        T1 = $scope.itChange;
        console.log(Pinitial, Pfinal, Pi, Tinitial, Tfinal, T1);
    }

    inputPrev = function(){
        $window.location.href = "#!cementTipology";
    }
});
