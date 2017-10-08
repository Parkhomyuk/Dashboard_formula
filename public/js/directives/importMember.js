(function(){
    angular.module('formula')
        /*.directive('importmember', ['Transactions','$http',  function ( Transactions){
         return{
             restrict:'E',
             templateUrl:'templates/import.html',
             link:function(scope, ement,attrs){
                 scope.newMember={
                     add_inf:'',
                     profile:'',
                     pref_profile:'',
                     pref_profile2:'',
                     them_profile:'',
                     experience:'',
                     results:'',
                     teacher_recomend:'',
                     past_participation:'',
                     RF_subject:1,
                     city:'',
                     street:'',
                     building:'',
                     corpus:'',
                     appart:'',
                     postcode:'',
                     school:2,
                     class:'',
                     hobby:'',
                     activity:'',
                     surname:'',
                     name:'',
                     middle_name:'',
                     birthday:0,
                     full_years:0,
                     phone_number:'',
                     parent_surname:'',
                     parent_name:'',
                     parent_middle_name:'',
                     parent_phone:'',
                     parent_email:'',
                     english_level:null,
                     health:'',
                     category:'',
                     t_shirt:11,
                     status:1,
                     contract:'',
                     summ:0,
                     date:0

                 }

                 scope.title='Import members from table Excel';
                 scope.addMemberFrom=function(member){
                     console.log(JSON.stringify(member));

                     var str= JSON.stringify(member)
                         .replace('Дата заполнения заявления','date')
                         .replace('Фамилия родителя (законного представителя)','parent_surname')
                         .replace('Имя родителя (законного представителя)','parent_name')
                         .replace('Отчество родителя (законного представителя)','parent_middle_name')
                         .replace('Фамилия претендента','surname')
                         .replace('Имя претендента','name')
                         .replace('Отчество претендента','middle_name')
                         .replace('Статус','status')
                         .replace('№ договора','contract_number')
                         .replace('Зачислен на профиль','profile')
                         .replace('Дата рождения претендента','birthday')
                         .replace('Полных лет претендента к моменту смены','full_years')
                         .replace('Субъект РФ','RF_subject')
                         .replace('Населенный пункт','city')
                         .replace('Улица','street');

                     var m=JSON.parse(str);
                     console.log(JSON.stringify(m));

                 }
                 scope.impMember=[];


                scope.add = function() {
                     var f = document.getElementById('file').files[0];
                         r = new FileReader();
                     console.log(document.getElementById('file').files[0]);
                     console.log();
                     r.onloadend = function(e) {
                         var data = e.target.result;
                         //send your binary data via $http or $resource or do anything else with it
                         var workbook = XLSX.read(data, {type:'binary'});
                         console.log(workbook );
                         var first_sheet_name = workbook.SheetNames[0];
                         var address_of_cell = 'A1';

                         /!* Get worksheet *!/
                         var worksheet = workbook.Sheets[first_sheet_name];
                         console.log( XLSX.utils.sheet_to_json(worksheet));
                         scope.impMember=XLSX.utils.sheet_to_json(worksheet);
                     }


                      r.readAsBinaryString(f);

                 }

                 scope.$watch('scope.impMember', function() {

                     console.log('  changed '+ scope.impMember);

                 });

                  /!*scope.$watch(angular.bind(this,function(){ return scope.impMember;} ), function(newVal, oldVal){

                     scope.impMember =newVal;

                 },true);*!/

                /!*var url = "FE_Mezhdunarodnaya_2017.xlsx";

                 var oReq = new XMLHttpRequest();
                 oReq.open("GET", url, true);
                 oReq.responseType = "arraybuffer";

                 oReq.onload = function(e) {

                     var arraybuffer = oReq.response;
                     console.log(oReq.response);
                     /!* convert data to binary string *!/
                     var data = new Uint8Array(arraybuffer);

                     var arr = new Array();
                     for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
                     var bstr = arr.join("");

                     /!* Call XLSX *!/
                     var workbook = XLSX.read(bstr, {type:"binary"});

                     /!* DO SOMETHING WITH workbook HERE *!/
                     var first_sheet_name = workbook.SheetNames[0];
                     var address_of_cell = 'A1';

                     /!* Get worksheet *!/
                     var worksheet = workbook.Sheets[first_sheet_name];
                     console.log( XLSX.utils.sheet_to_json(worksheet));
                     scope.impMember=XLSX.utils.sheet_to_json(worksheet);




                 }

                 oReq.send();*!/
             }

         }


        }]);*/
        .directive("importmember", [function() {
            return {
                restrict:'E',
               scope: { },
                templateUrl:'templates/import.html',
                link: function (scope, $elm, $attrs) {
                    $elm.on('change', function (changeEvent) {
                        var reader = new FileReader();

                        reader.onload = function (e) {
                            /* read workbook */
                            var bstr = e.target.result;
                            var workbook = XLSX.read(bstr, {type:'binary'});

                            console.log(workbook );
                            var first_sheet_name = workbook.SheetNames[0];
                            var address_of_cell = 'A1';


                            var worksheet = workbook.Sheets[first_sheet_name];
                            console.log( XLSX.utils.sheet_to_json(worksheet));
                            scope.impMember=XLSX.utils.sheet_to_json(worksheet);
                        };

                        reader.readAsBinaryString(changeEvent.target.files[0]);
                    });

                    scope.newMember={
                        add_inf:'',
                        profile:'',
                        pref_profile:'',
                        pref_profile2:'',
                        them_profile:'',
                        experience:'',
                        results:'',
                        teacher_recomend:'',
                        past_participation:'',
                        RF_subject:1,
                        city:'',
                        street:'',
                        building:'',
                        corpus:'',
                        appart:'',
                        postcode:'',
                        school:2,
                        class:'',
                        hobby:'',
                        activity:'',
                        surname:'',
                        name:'',
                        middle_name:'',
                        birthday:0,
                        full_years:0,
                        phone_number:'',
                        parent_surname:'',
                        parent_name:'',
                        parent_middle_name:'',
                        parent_phone:'',
                        parent_email:'',
                        english_level:null,
                        health:'',
                        category:'',
                        t_shirt:11,
                        status:1,
                        contract:'',
                        summ:0,
                        date:0

                    }

                    scope.title='Import members from table Excel';
                    scope.addMemberFrom=function(member){
                        console.log(JSON.stringify(member));

                        var str= JSON.stringify(member)
                            .replace('Дата заполнения заявления','date')
                            .replace('Фамилия родителя (законного представителя)','parent_surname')
                            .replace('Имя родителя (законного представителя)','parent_name')
                            .replace('Отчество родителя (законного представителя)','parent_middle_name')
                            .replace('Фамилия претендента','surname')
                            .replace('Имя претендента','name')
                            .replace('Отчество претендента','middle_name')
                            .replace('Статус','status')
                            .replace('№ договора','contract_number')
                            .replace('Зачислен на профиль','profile')
                            .replace('Дата рождения претендента','birthday')
                            .replace('Полных лет претендента к моменту смены','full_years')
                            .replace('Субъект РФ','RF_subject')
                            .replace('Населенный пункт','city')
                            .replace('Улица','street');

                        var m=JSON.parse(str);
                        console.log(JSON.stringify(m));

                    }


                }
            };
        }]);

   /* var SheetJSImportDirective = function() {
        return {
            restrict:'E',
            scope: { },
            templateUrl:'templates/import.html',
            link: function ($scope, $elm, $attrs) {
                $elm.on('change', function (changeEvent) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        /!* read workbook *!/
                        var bstr = e.target.result;
                        var workbook = XLSX.read(bstr, {type:'binary'});

                        console.log(workbook );
                        var first_sheet_name = workbook.SheetNames[0];
                        var address_of_cell = 'A1';


                        var worksheet = workbook.Sheets[first_sheet_name];
                        console.log( XLSX.utils.sheet_to_json(worksheet));
                        scope.impMember=XLSX.utils.sheet_to_json(worksheet);
                    };

                    reader.readAsBinaryString(changeEvent.target.files[0]);
                });

                scope.newMember={
                    add_inf:'',
                    profile:'',
                    pref_profile:'',
                    pref_profile2:'',
                    them_profile:'',
                    experience:'',
                    results:'',
                    teacher_recomend:'',
                    past_participation:'',
                    RF_subject:1,
                    city:'',
                    street:'',
                    building:'',
                    corpus:'',
                    appart:'',
                    postcode:'',
                    school:2,
                    class:'',
                    hobby:'',
                    activity:'',
                    surname:'',
                    name:'',
                    middle_name:'',
                    birthday:0,
                    full_years:0,
                    phone_number:'',
                    parent_surname:'',
                    parent_name:'',
                    parent_middle_name:'',
                    parent_phone:'',
                    parent_email:'',
                    english_level:null,
                    health:'',
                    category:'',
                    t_shirt:11,
                    status:1,
                    contract:'',
                    summ:0,
                    date:0

                }

                scope.title='Import members from table Excel';
                scope.addMemberFrom=function(member){
                    console.log(JSON.stringify(member));

                    var str= JSON.stringify(member)
                        .replace('Дата заполнения заявления','date')
                        .replace('Фамилия родителя (законного представителя)','parent_surname')
                        .replace('Имя родителя (законного представителя)','parent_name')
                        .replace('Отчество родителя (законного представителя)','parent_middle_name')
                        .replace('Фамилия претендента','surname')
                        .replace('Имя претендента','name')
                        .replace('Отчество претендента','middle_name')
                        .replace('Статус','status')
                        .replace('№ договора','contract_number')
                        .replace('Зачислен на профиль','profile')
                        .replace('Дата рождения претендента','birthday')
                        .replace('Полных лет претендента к моменту смены','full_years')
                        .replace('Субъект РФ','RF_subject')
                        .replace('Населенный пункт','city')
                        .replace('Улица','street');

                    var m=JSON.parse(str);
                    console.log(JSON.stringify(m));

                }


            }
        };
    };*/
})()