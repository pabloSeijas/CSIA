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

var ipL, ipTigeo, ippmiInitial;

app.controller('main',function($scope, $location){
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
      }
});
app.controller('wellGeometry', function($scope, $window) {
    var OH,L,OBG,FTG,Biot,Pp,Pminitial,rd,yFormation,eFormation,kForm,aForm,oTect,rc,tiGeo,oZ,oHmin,oHmax;
    
  
    
    
   $scope.calculateWell = function(){
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
      // <----Calculated---->
        rc = OH/2;
        tiGeo = FTG * L;
        oZ = OBG * L;
        oHmin = (yFormation/(1-yFormation) * oZ-(Biot*Pp));
        oHmax = Number(oHmin) + Number(oTect);
        $scope.ohRadius = rc;
        $scope.wfTemperature = tiGeo;
        $scope.vStress = oZ;
        $scope.mihStress = oHmin;
        $scope.mahStress = oHmax;
        ipL = L;
        ipTigeo = tiGeo;
        ippmiInitial = Pminitial;

    }
    
   
    tiGeo = $scope.wfTemperature;
    oZ = $scope.vStress;
    oHmin = $scope.mihStress;
    oHmax = $scope.mahStress;
    wellNext = function(){
        
        

        

       






        $window.location.href = "#!casingTipology";
       
    }
    
    


});

app.controller('casingTipology', function($scope,$window) {
    var ODcasing, Wcasing, IDcasing, Ysteel, Esteel, Ksteel, Asteel, ra, rb, THcasing;
    
    $scope.calculateCasing = function(){

    ODcasing = $scope.cDiameter;
    Wcasing = $scope.cWeight;
    IDcasing = $scope.ciDiameter;
    Ysteel = $scope.cpRatio;
    Esteel = $scope.ymCasing;
    Ksteel = $scope.tcCasing;
    Asteel = $scope.cleCasing;
    // <---Calculated--->
    ra = IDcasing/2;
    rb = ODcasing/2;
    var odidCasing = ODcasing - IDcasing;
    THcasing = (ODcasing - IDcasing)/2
    $scope.icRadius = ra;
    $scope.ecRadius = rb;
    $scope.cThickness = THcasing
    
    }

    
    ra = $scope.icRadius;
    rb = $scope.ecRadius;
    THcasing = $scope.cThickness;
    
    
    casingNext = function(){
       
        


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

       

        $window.location.href ="#!inputParameters"
    }
    cementPrev = function(){
        $window.location.href = "#!casingTipology";
    }
});
cementNext = function(){

}
app.controller('inputParameters', function($scope,$window) {
var Pinitial, Pifinal, Pi, Tinitial, Tfinal, T1;
    $scope.calculateiParameters = function(){
        Pifinal = $scope.fiPressure;
        Tfinal = $scope.fiTemperature;
        
        Pinitial = ippmiInitial * ipL;
        $scope.iiPressure = Pinitial;

        Pi = Pifinal - Pinitial;
        $scope.ipChange = Pi;

        Tinitial = ipTigeo ;
        $scope.iiTemperature = Tinitial;

        T1 = Tfinal - Tinitial;
        $scope.itChange = T1 ;

    }
        
    inputPrev = function(){
        $window.location.href = "#!cementTipology";
    }
});
