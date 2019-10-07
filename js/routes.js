const mysql = require('mysql');
const connection = mysql.createConnection({
    host        :'localhost',
    user        :'root',
    password    : null,
    database    :'csia'
})

connection.connect(function(err){
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
})



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
    .when("/result", {templateUrl:"./result/result.html"
    })
    .when("/save", {templateUrl : "./save/save.html"})
});

var ipL, ipTigeo, ippmiInitial,wGeometry,caTipology,ceTipology,iParameters;

app.controller('main',function($scope, $location){
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
      }
});
app.controller('wellGeometry', function($scope, $window) {
    var OH,L,OBG,FTG,Biot,Pp,Pminitial,rd,yFormation,eFormation,kForm,aForm,oTect,rc,tiGeo,oZ,oHmin,oHmax;
    
  
    
    
   $scope.calculateWell = function(){
        // let query = 'SELECT * FROM wellgeometry'
        //     connection.query(query, function(err, rows, fields){
        //         if(err){
        //             console.log('Hubo un Error al realizar la consulta');
        //             console.log(err.message);
        //             return
        //         }
            
        //         let row = rows[0]
        //         console.log(row.OHD)
        //     $scope.ohDiameter = row.OHD; 
        //     connection.end(function(){

        //     });

        // })
    
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
    
   
    // tiGeo = $scope.wfTemperature;
    // oZ = $scope.vStress;
    // oHmin = $scope.mihStress;
    // oHmax = $scope.mahStress;
    wellNext = function(){

        wGeometry = {
            ohDiameter:Number(OH),
            hvDepht: Number(L),
            opGradient: Number(OBG),
            ftGradient: Number(FTG),
            bpConstant: Number(Biot),
            pPressure: Number(Pp),
            imDensity: Number(Pminitial),
            fffRadius: Number(rd),
            fpRatio: Number(yFormation),
            ymFormation: Number(eFormation),
            thcFormation: Number(kForm),
            cleFormation: Number(aForm),
            tStress:Number(oTect),
            ohRadius: rc,
            wfTemperature: tiGeo,
            vStress: oZ,
            mihStress: oHmin,
            mahStress: oHmax
        }
        


        console.log(wGeometry)



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
        
        caTipology = {
            cDiameter: Number(ODcasing),
            cWeight: Number(Wcasing),
            ciDiameter: Number(IDcasing),
            cpRatio: Number(Ysteel),
            ymCasing: Number(Esteel),
            tcCasing: Number(Ksteel),
            cleCasing: Number(Asteel),
            icRadius: ra,
            ecRadius: rb,
            cThickness: THcasing
        }
   
        console.log(wGeometry)
        console.log(caTipology)


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

        ceTipology = {
            cDensity: Number(Pcement),
            ucStrength: Number(UCS),
            tStrength: Number(To),
            cpRatio: Number(ycement),
            ymCement: Number(Ecement),
            tcCement: Number(Kcement),
            cleCement: Number(Acement),
            cCement: Number(C),
            aiFriction: Number(O)
        }

       console.log(ceTipology)

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
        calculate = function(){
            iParameters = {
                fiPressure: Number(Pifinal),
                fiTemperature: Number(Tfinal),
                iiPressure: Pinitial,
                ipChange: Pi,
                iiTemperature: ipTigeo,
                itChange: T1

            }
            console.log(wGeometry)
            console.log(caTipology)
            console.log(ceTipology)
            console.log(iParameters)

            if(confirm("¿Desea guardar los resultados y proceder?") === true){
                $window.location.href = "#!save";
            }
            
        }    
        inputPrev = function(){
            $window.location.href = "#!cementTipology";
        }
});

app.controller('saveData', function($scope,$window) {
    back = function(){
        $window.location.href ="#!inputParameters"
    }
    save = function(){
        var nameRegister = $scope.name;
        if(nameRegister === undefined){
            


        }else{
            if(confirm("¿Está seguro de guardar los datos?") === true){
                $window.location.href = "#!result";
            }
            
        }
        
    }
});

app.controller('result', function($scope, $window, $timeout) {

    
    $timeout( function(){
        $scope.hideSpinner = "true"
    }, 3000 );
    $timeout( function(){
        $scope.procesando = "false"
    }, 3000 );
    $timeout( function(){
        $scope.procesando2 = "true"
    }, 6000);
    $timeout( function(){
        $scope.showContent = "false"
    }, 6000);
    back = function(){
        $window.location.href ="#!save"
    }
});