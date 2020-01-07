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
    .when("/", {templateUrl : "./save/save.html"
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
    .when("/save", {templateUrl : "./save/save.html"
    })
});

var ipL, ipTigeo, ippmiInitial,wGeometry,caTipology,ceTipology,iParameters,PiG,EsteelG,e_formG,ecementG,PiFG,raG,rcG,ycementG,yFormG,rbG,T1G,T2G,AsteelG,YsteelG,aFormG,aCementG,rdG;

app.controller('main',function($scope, $location){
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'active' : '';
      }
});
app.controller('wellGeometry', function($scope, $window) {
    var OH,L,OBG,FTG,Biot,Pp,Pminitial,rd,yFormation,eFormation,kForm,aForm,oTect,rc,tiGeo,oZ,oHmin,oHmax;
    
  
    
    
   $scope.calculateWell = function(){
        // let query = "INSERT INTO `wellgeometry`(SYSTEM_ID`, `OHD`, `HVD`, `OPG`, `FTG`, `BPC`, `PP`, `IMD`, `FFFR`, `FPR`, `YMF`, `TCF`, `CLEF`, `TS`, `OOH`, `WFT`, `VS`, `MNHS`, `MXHS`) VALUES ('"+ OH +"', '"+ L +"', '"+OBG+"', '"+FTG+"', '"+Biot+"', '"+Pp+"', '"+Pminitial+"', '"+rd+"', '"+yFormation+"', '"+eFormation+"', '"+kForm+"', '"+aForm+"', '"+oTect+"', '"+rc+"', '"+tiGeo+"', '"+oZ+"', '"+oHmin+"', '"+oHmax+")"
        //     connection.query(query, function(err, rows, fields){
        //         if(err){
        //             console.log('Hubo un Error al realizar la consulta');
        //             console.log(err.message);
        //             return
        //         }
            
              
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
        // Globals 
        ipL = L;
        ipTigeo = tiGeo;
        ippmiInitial = Pminitial;
        rcG = rc;
        aFormG= aForm;
        yFormG = yFormation;
        rdG = rd;
        e_formG = eFormation;

    }
    
   
    tiGeo = $scope.wfTemperature;
    oZ = $scope.vStress;
    oHmin = $scope.mihStress;
    oHmax = $scope.mahStress;
    wellNext = function(){
        var registros = [OH,L,OBG,FTG,Biot,Pp,Pminitial,rd,yFormation,eFormation,kForm,aForm,oTect,rc,tiGeo,oZ,oHmin,oHmax];
        console.log(registros.indexOf(isNaN()))
        if(registros.indexOf(undefined) != -1){
            alert("ningún campo puede permanecer vacío");
            
        }else{
            var sql = "INSERT INTO `wellgeometry`(`SYSTEM_ID`, `OHD`, `HVD`, `OPG`, `FTG`, `BPC`, `PP`, `IMD`, `FFFR`, `FPR`, `YMF`, `TCF`, `CLEF`, `TS`, `OOH`, `WFT`, `VS`, `MNHS`, `MXHS`) VALUES ('"+ 1 +"','"+ OH +"', '"+ L +"', '"+OBG+"', '"+FTG+"', '"+Biot+"', '"+Pp+"', '"+Pminitial+"', '"+rd+"', '"+yFormation+"', '"+eFormation+"', '"+kForm+"', '"+aForm+"', '"+oTect+"', '"+rc+"', '"+tiGeo+"', '"+oZ+"', '"+oHmin+"', '"+oHmax+"')";
            connection.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
            });
           
            $window.location.href = "#!casingTipology";
        }
        // wGeometry = {
        //     ohDiameter:Number(OH),
        //     hvDepht: Number(L),
        //     opGradient: Number(OBG),
        //     ftGradient: Number(FTG),
        //     bpConstant: Number(Biot),
        //     pPressure: Number(Pp),
        //     imDensity: Number(Pminitial),
        //     fffRadius: Number(rd),
        //     fpRatio: Number(yFormation),
        //     ymFormation: Number(eFormation),
        //     thcFormation: Number(kForm),
        //     cleFormation: Number(aForm),
        //     tStress:Number(oTect),
        //     ohRadius: rc,
        //     wfTemperature: tiGeo,
        //     vStress: oZ,
        //     mihStress: oHmin,
        //     mahStress: oHmax
        // }
        


        // console.log(wGeometry)



       
       
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
    // Globals 
    rbG = rb;
    AsteelG = Asteel;
    YsteelG = Ysteel;
    raG = ra;
    EsteelG = Esteel;
    
    }

    
    ra = $scope.icRadius;
    rb = $scope.ecRadius;
    THcasing = $scope.cThickness;
    
    
    casingNext = function(){
        
        // caTipology = {
        //     cDiameter: Number(ODcasing),
        //     cWeight: Number(Wcasing),
        //     ciDiameter: Number(IDcasing),
        //     cpRatio: Number(Ysteel),
        //     ymCasing: Number(Esteel),
        //     tcCasing: Number(Ksteel),
        //     cleCasing: Number(Asteel),
        //     icRadius: ra,
        //     ecRadius: rb,
        //     cThickness: THcasing
        // }
   
        // console.log(wGeometry)
        // console.log(caTipology)
       var casingArr = [ODcasing, Wcasing, IDcasing, Ysteel, Esteel, Ksteel, Asteel, ra, rb, THcasing]
       if(casingArr.indexOf(undefined) != -1){
        alert("ningún campo puede permanecer vacío");
        
        }else{
            var sql = "INSERT INTO `casingtipology`(`SYSTEM_ID`, `STEEL`, `CD`, `CW`, `CID`, `CPR`, `YMC`, `TCC`, `CLEC`, `ICR`, `ECR`, `CT`) VALUES ('"+1+"','"+2+"','"+ODcasing+"','"+Wcasing+"','"+IDcasing+"','"+Ysteel+"','"+Esteel+"','"+Ksteel+"','"+Asteel+"','"+ra+"','"+rb+"','"+THcasing+"')";
            connection.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
            });
             $window.location.href = "#!cementTipology";
        }
       
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
        ycementG = ycement;
        aCementG = Acement;
        ecementG = Ecement;
    

    //     ceTipology = {
    //         cDensity: Number(Pcement),
    //         ucStrength: Number(UCS),
    //         tStrength: Number(To),
    //         cpRatio: Number(ycement),
    //         ymCement: Number(Ecement),
    //         tcCement: Number(Kcement),
    //         cleCement: Number(Acement),
    //         cCement: Number(C),
    //         aiFriction: Number(O)
    //     }

    //    console.log(ceTipology)
    var cementArr = [Pcement, UCS, To, ycement, Ecement,Kcement, Acement, C, O]

        if(cementArr.indexOf(undefined) != -1){
            alert("ningún campo puede permanecer vacío");
            
        }else{
            var sql = "INSERT INTO `cementtipology`(`SYSTEM_ID`, `CEMENT`, `CD`, `UCS`, `TS`, `CPR`, `YMC`, `TCC`, `CLEC`, `CTC`, `AIF`) VALUES ('"+ 1 +"','"+ 1 +"','"+ Pcement +"','"+ UCS +"','"+To+"','"+ycement+"','"+Ecement+"','"+Kcement+"','"+Acement+"','"+C+"','"+O+"')";
            connection.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
            });
            $window.location.href ="#!inputParameters"
        }
        
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
            T1G = T1;
            PiG = Pi;
            PiFG = Pifinal; 

        }
        calculate = function(){
            // iParameters = {
            //     fiPressure: Number(Pifinal),
            //     fiTemperature: Number(Tfinal),
            //     iiPressure: Pinitial,
            //     ipChange: Pi,
            //     iiTemperature: ipTigeo,
            //     itChange: T1

            // }
            // console.log(wGeometry)
            // console.log(caTipology)
            // console.log(ceTipology)
            // console.log(iParameters)
            var inpParamsArr = [Pinitial, Pifinal, Pi, Tinitial, Tfinal, T1]
            if(inpParamsArr.indexOf(undefined) != -1){
                alert("ningún campo puede permanecer vacío");
                
            }
            else{
                (confirm("¿Desea guardar los resultados y proceder?") === true)
                var sql = "INSERT INTO `inputparameters`(`SYSTEM_ID`, `IIP`, `FIP`, `IPC`, `IIT`, `FIT`, `ITC`) VALUES ('"+ 1 +"','"+ Pinitial +"','"+ Pifinal +"','"+ Pi +"', '"+ Tinitial +"','"+ Tfinal +"','"+ T1 +"')";
                connection.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted");
                });
                $window.location.href = "#!result";
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
        var currDate = new Date();
        if(nameRegister === undefined){
            


        }else{
            if(confirm("¿Está seguro de guardar el registro con este nombre?") === true){
               var sql =  "INSERT INTO `system`(`NAME`, `createby`) VALUES ('"+ nameRegister +"', 'TestUser')"
                
                connection.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                });
                  
                $window.location.href = "#!wellGeometry";
               
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
    // YcementG elevado al cuadrado
    var ycementexp = Math.pow(ycementG, 2);
    // rbG elevado al cuadrado
    var rbexp = Math.pow(rbG,2);
    // rc elevado al cuadrado
    var rcexp = Math.pow(rcG,2);
    // ySteel elevado al cuadrado
    var Ysteelexp = Math.pow(YsteelG,2);
    // raG elevado al cuadrado
    var raexp = Math.pow(raG, 2);
    // yForm elevado al cuadrado
    var yFormexp = Math.pow(yFormG,2);
    // rd elevado al cuadrado
    var rdexp = Math.pow(rdG, 2);

    var T1_Steel = AsteelG * T1G * (YsteelG);
    // var T2_Steel = AsteelG * T2G * (YsteelG); incompleta por AlphaT2
    var T1_cem = aCementG * T1G * (ycementG);

    var A_cem = (ycementexp - 1)*(((rbexp)/(rbexp-rcexp))+((rcexp)/(rbexp-rcexp)));
    var A_Steel = (Ysteelexp - 1)*(((raexp)/(raexp - rbexp))+((rbexp)/(raexp - rbexp)));
    var A_Form = (yFormexp - 1)*((rcexp)/(rcexp - rdexp)) + ((rdexp)/(rcexp - rdexp));
    var B_1 = ((2 * PiG * raexp * rbG * (Ysteelexp - 1)) / (EsteelG * (raexp - rbexp)));
    var B_2 = ((2 * PiFG * rcG * rdexp * (yFormexp - 1)) / (e_formG * (rcexp - rdexp)));
    var UCS = 0.0354 * Math.pow(ecementG * Math.pow(10,-9)) + 3.1509 * (ecementG * Math.pow(10,-9)) + 4.0642;
    var T0 = UCS * Math.pow(10,6/10);

    /**
     * Formulara para calcular LOGARITMOS NATURALES
     */
    //  let logaritmo1 = Math.pow(-10,7)*Mat.log((rd/rc)/Math.pow(-10,7))
    //  let logaritmo2 = Math.pow(-10,7)*Mat.log((rc/rb)/Math.pow(-10,7))


    // var T2 =  (T1 * logaritmo1 * Kcement) / (logaritmo1 * Kcement) + (logaritmo2 * kForm)

    
});

