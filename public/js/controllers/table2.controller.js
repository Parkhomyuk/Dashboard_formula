(function(){

    function table2Controller( Transactions,$http,$scope){
        var vn=this;
        vn.settings = {
            title:{title:"Members Table"},
            count:{number:"col-md-1"},
            columns: {
                id: {
                    title: 'ID',
                    db_name:'id',
                    mod_name:'',
                    type: 'number',
                    class: 'first',
                    order:1,
                    search: true,
                    display:true,
                    placeholder:'id',
                    width: 'width: 2%'
                },
                date: {
                    title: 'Date',
                    db_name:'date',
                    mod_name:'',
                    type: 'Date',
                    class: 'second',
                    order:2,
                    search: false,
                    display:true,
                    placeholder:'Date',
                    width: 'width: 2%'
                },
                parent_surname: {
                    title: 'parent surname',
                    db_name:'parent_surname',
                    mod_name:'',
                    type: 'string',
                    class: 'third',
                    order:3,
                    search: true,
                    display:true,
                    placeholder:'parent surname',
                    width: 'width: 2%'
                },
                parent_name: {
                    title: 'parent  name',
                    db_name:'parent_name',
                    mod_name:'',
                    type: 'string',
                    class: 'third',
                    order:4,
                    search: true,
                    display:true,
                    placeholder:'parent surname',
                    width: 'width: 2%'
                },
                parent_middle_name: {
                    title: 'parent   middle name',
                    db_name:'parent_middle_name',
                    mod_name:'',
                    type: 'string',
                    class: 'third',
                    order:5,
                    search: true,
                    display:true,
                    placeholder:'parent middle name',
                    width: 'width: 2%'
                },
                surname: {
                    title: 'surname',
                    db_name:'surname',
                    mod_name:'',
                    type: 'string',
                    class: 'third',
                    order:6,
                    search: true,
                    display:true,
                    placeholder:'member surname',
                    width: 'width: 2%'
                },
                name: {
                    title: 'name',
                    db_name:'name',
                    mod_name:'',
                    type: 'string',
                    class: 'third',
                    order:7,
                    search: true,
                    display:true,
                    placeholder:'member name',
                    width: 'width: 2%'
                },
                middle_name: {
                    title: 'middle name',
                    db_name:'middle_name',
                    mod_name:'',
                    type: 'string',
                    class: 'third',
                    order:8,
                    search: true,
                    display:true,
                    placeholder:'member middle name',
                    width: 'width: 2%'
                },
                status: {
                    title: 'status',
                    db_name:'members.status',
                    mod_name:'',
                    type: 'string',
                    class: 'third',
                    order:9,
                    search: false,
                    display:true,
                    placeholder:'status',
                    width: 'width: 2%'
                },
                contract_number: {
                    title: 'contract number',
                    db_name:'contract_number',
                    mod_name:'',
                    type: 'string',
                    class: 'third',
                    order:10,
                    search: true,
                    display:true,
                    placeholder:'contract number',
                    width: 'width: 2%'
                },
                profile: {
                    title: 'profile',
                    db_name:'members.profile',
                    mod_name:'',
                    type: 'string',
                    class: 'third',
                    order:11,
                    search: true,
                    display:true,
                    placeholder:'first profile',
                    width: 'width: 2%'
                },
                birthday: {
                    title: 'birthday',
                    db_name:'birthday',
                    mod_name:'',
                    type: 'Date',
                    class: 'eighth',
                    order:12,
                    search: false,
                    display:true,
                    placeholder:'birthday',
                    width: 'width: 3%'
                },
                full_years: {
                    title: 'full years',
                    db_name:'full_years',
                    mod_name:'',
                    type: 'number',
                    class: 'eighth',
                    order:13,
                    search: true,
                    display:true,
                    placeholder:'full years',
                    width: 'width: 3%'
                },
                RF_subject: {
                    title: 'subject RF',
                    db_name:'members.RF_subject',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:14,
                    search: true,
                    display:true,
                    placeholder:'subject RF',
                    width: 'width: 3%'
                },
                city: {
                    title: 'City',
                    db_name:'city',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:15,
                    search: true,
                    display:true,
                    placeholder:'city',
                    width: 'width: 3%'
                },
                street: {
                    title: 'Street',
                    db_name:'street',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:16,
                    search: true,
                    display:true,
                    placeholder:'street',
                    width: 'width: 3%'
                },
                building: {
                    title: 'Building',
                    db_name:'street',
                    mod_name:'',
                    type: 'Date',
                    class: 'eighth',
                    order:17,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                corpus: {
                    title: 'Corpus',
                    db_name:'corpus',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:18,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                appart: {
                    title: 'Appart',
                    db_name:'appart',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:19,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                parent_email: {
                    title: 'Parent email',
                    db_name:'parent_email',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:20,
                    search: true,
                    display:true,
                    placeholder:'email',
                    width: 'width: 3%'
                },
                parent_phone: {
                    title: 'Parent phone',
                    db_name:'parent_phone',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:21,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                school: {
                    title: 'School',
                    db_name:'members.school',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:22,
                    search: true,
                    display:true,
                    placeholder:'school',
                    width: 'width: 3%'
                },
                class: {
                    title: 'Class',
                    db_name:'classl',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:23,
                    search: true,
                    display:true,
                    placeholder:'school',
                    width: 'width: 3%'
                },
                pref_profile: {
                    title: 'Prefe profile',
                    db_name:'members.pref_profile',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:24,
                    search: true,
                    display:true,
                    placeholder:'pref prof',
                    width: 'width: 3%'
                },
                pref_profile2: {
                    title: 'Prefe profile #2',
                    db_name:'members.pref_profile2',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:25,
                    search: true,
                    display:true,
                    placeholder:'pref prof',
                    width: 'width: 3%'
                },
                them_profile: {
                    title: 'Theme profile',
                    db_name:'them_profile',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:26,
                    search: true,
                    display:true,
                    placeholder:'theme',
                    width: 'width: 3%'
                },
                experience: {
                    title: 'Experience',
                    db_name:'experience',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:27,
                    search: true,
                    display:true,
                    placeholder:'exper',
                    width: 'width: 3%'
                },
                past_paricipation: {
                    title: 'Past paricipation',
                    db_name:'members.past_paricipation',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:27,
                    search: true,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                results: {
                    title: 'Resuls',
                    db_name:'members.results',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:28,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                teacher_recomend: {
                    title: 'Teacher',
                    db_name:'teacher_recomend',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:29,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                english_level: {
                    title: 'English level',
                    db_name:'members.english_level',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:30,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                hobby: {
                    title: 'Hobby',
                    db_name:'hobby',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:31,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                activity: {
                    title: 'Activity',
                    db_name:'activity',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:32,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                was_part: {
                    title: 'Past Part',
                    db_name:'was_part',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:33,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                health:{
                    title: 'Health',
                    db_name:'health',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:34,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                category:{
                    title: 'Special categ',
                    db_name:'members.category',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:35,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                t_shirt:{
                    title: 'size T shirt',
                    db_name:'members.t_shirt',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:36,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                add_inf:{
                    title: 'Add inf',
                    db_name:'add_inf',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:37,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                known:{
                    title: 'Information',
                    db_name:'members.known',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:38,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                got_acquent:{
                    title: 'Got acquainted',
                    db_name:'got_acquent',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:39,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                summ:{
                    title: 'Summ',
                    db_name:'summ',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:40,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
                contract_res:{
                    title: 'Contract',
                    db_name:'contract_res',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:41,
                    search: false,
                    display:true,
                    placeholder:'',
                    width: 'width: 3%'
                },
            }
        };


        //localStorage - start

        //localStorage - end
        //Add members
        vn.newMember={
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
        // sql query
        var table='members';
        //english
        vn.selectedEnglish='';
        vn.selectedEnglishId;
        //Subject of Russia
        vn.selectedRFSubject;
        vn.selectedRFSubjectId;
        //T-Shirt
        vn.getTShirtArr;
        vn.selectedTShirt;
        vn.selectedTShirtId;
        //Status of member
        vn.getStatus;
        vn.selectedStatus;
        vn.selectedStatusId
        //School
        vn.selectedSchool;
        vn.selectedSchoolId
        //Category
        vn.selectedCategory;
        vn.selectedCategoryId
        //choosingMember
        vn.choosingMemberById=vn.newMember;
        vn.selectedOption={};
        //pagination varibale//
        vn.numberRows= 10;

        $scope.numberRows= vn.numberRows;
        Transactions.pageRowCount=vn.numberRows;
        vn.pageNumber = $scope.pagerItem||0;
        vn.pageNumberView = 1;
        vn.pageNumberInRow = 10;
        vn.chooseCountNumber = [10,25, 50, 100];
        //members varibelse
        vn.items;

        vn.str = '';
        vn.strSort = '';
        vn.param = '';
        //Modal window
        vn.itemId;

        vn.showPopUpMsg = {visible:false};
        Transactions.countMembers().then(function(count){

            console.log(JSON.stringify(count.data)+' count');
            for(var i in count.data[0]){
                $scope.itemsCount=count.data[0][i];
                vn.countMembersnumb=count.data[0][i];
            }
            console.log('vmn.countM=count.data[0][i]=>'+$scope.itemsCount);
        });

        vn.openPopUp = function( item ) {
            vn.popText=item.surname+' '+item.name;
            vn.showPopUpMsg = {visible:true};
            vn.itemId=item.id;

        }
        vn.count= 102;
        vn.closePopup=function(){
            vn.showPopUpMsg = {visible:false};
        }

        //End modal window
        //Modal window update

        vn.showUpdateModal = {visible:false};

        vn.openUpdateModal = function( item,prop ) {
            vn.updateText= item.surname+' '+item.name;
            vn.showUpdateModal = {visible:true};

            vn.updateModalInf=prop;
         /*   vn.updateMember=item;*/

            console.log(vn.updateModalInf+' prop modal');
        }
        vn.closePopup=function(){
            vn.showPopUpMsg = {visible:false};
        }
        vn.closePopupUpdateModal=function(){
            vn.showUpdateModal = {visible:false};
        }
        vn.saveUpdateModal=function(){
            vn.showUpdateModal = {visible:false};

           /* if(vn.newMember['surname']&&vn.newMember['name']&&vn.newMember['parent_surname']&&vn.newMember['parent_name']&&vn.newMember['full_years']!='') {*/
                console.log(' The condition worked');
                /*$http.put('/api//members/'+ vn.updateMember.id,vn.updateMember).then(function (modifiedItem) {
                    for (var i = 0; i < vn.items.length; i++) {
                        if (vn.items[i].id == modifiedItem.id) {
                            vn.items[i] = modifiedItem;
                            break;
                        }
                    }


                });

*/
            var s=$http.get('/api/members/id/' +  vn.updateMemID).then(function (data) {


                vn.updateMember =  data.data[0];
                vn.updateMember.prop=vn.viewItem.prop;
                console.log(' vn.updateMember =>'+vn.updateMember.surname);

                var updateMember=Transactions.update(vn.updateMemID,vn.updateMember)
                    .then(function(value){
                        for (var i = 0; i < vn.items.length; i++) {
                            if (vn.items[i].id == value.config.data.id) {
                                vn.items[i] = value.config.data;
                                break;
                            }
                        }
                    });


            })


                vn.refresh();

            vn.clearNewMemeber();

        }

        //End modal window update
        vn.refresh=function(){
            vn.search();

        }


        $scope.$watch('vn.storageView', function() {
            localStorage.setItem('setView',vn.storageView);
            console.log(vn.storageView);
            console.log('localStorage changed');

        });
        $scope.$watch(angular.bind(this,function(){ return $scope.pagerItem;} ), function(newVal, oldVal){

            $scope.pagerItem =newVal;
             console.log('$scope.pagerItem '+$scope.pagerItem);
            vn.search();
        },true);
        $scope.$watch(angular.bind(this,function(){ return vn.numberRows;} ), function(newVal, oldVal){

            vn.numberRows =newVal;
            $scope.numberRows=newVal;
            console.log(' vn.pageNumberInRow '+vn.numberRows);
            vn.refresh();
        },true);
        $scope.$watch(angular.bind(this,function(){ return vn.choosingMemberById ;} ), function(newVal, oldVal){
            console.log(' newVal, oldVal vn.choosingMemberById=> '+vn.choosingMemberById  );
            vn.choosingMemberById =newVal;
            Transactions.choosingMember(vn.choosingMemberById);
        },true);
        $scope.$watch(angular.bind(this,function(){ return vn.saveUpdateM ;} ), function(newVal, oldVal){

            vn.saveUpdateM =newVal;


        },true);
        $scope.$watch(angular.bind(this, function(){return $scope.items;}), function(newVal, oldVal){
            $scope.items=newVal;

        });
        $scope.$watch(angular.bind(this,function(){ return vn.selectedOption ;} ), function(newVal, oldVal){

            console.log(' newVal, oldVal vn.selectedOption=> '+JSON.stringify(vn.selectedOption));
            console.log(' newVal, oldVal newVal=> '+JSON.stringify(newVal));

            /*vn.selectedOption =newVal;*/
            vn.choosingMemberById.english_level= vn.selectedOption.level_id ;

        },true);
        $scope.$watch(angular.bind(this,function(){ return vn.selectedEnglish;} ), function(newVal, oldVal){
            console.log(' newVal, oldVal => '+vn.selectedEnglish);
        });
        $scope.$watch(angular.bind(this,function(){ return vn.addNewMemeber.t_shirt;} ), function(newVal, oldVal){
            console.log(' t_shirt ');
            vn.addNewMemeber.t_shirt=newVal;
            vn.newMemeberBirthday=newVal;
        });
        $scope.$watch(angular.bind(this,function(){ return vn.newMemeberBirthday;} ), function(newVal, oldVal){

            vn.newMemeberBirthday=newVal;
            console.log('vn.newMemeberBirthday =>'+vn.newMemeberBirthday);
        });

        $scope.$watch(angular.bind(this, function () {
            return this.strSort;
        }), function (newVal, oldVal) {
            console.log(vn.strSort);
            vn.refresh();

        });
        $scope.$watch(angular.bind(this, function () {
            /*  return this.settings.columns.id.display;*/
            return this.settings.columns ;
        }), function (newVal, oldVal) {
            console.log(vn.settings.columns+' ffuc');
            vn.refresh();

        },true);

        vn.search= function(){

            vn.sortProperties=sortProp(vn.settings.columns  );
           console.log('sortable '+ vn.sortProperties);

            vn.arrayProp=[];
            vn.lag = vn.pageNumber * vn.numberRows;
            vn.str = '';

            var stringQuery = '';
            var stringQueryProp = '';
            var strEmpty = true;
            var sortDir=vn.param;
            for (var key in vn.settings.columns) {
                stringQueryProp+=+''+key+', ';
                if (vn.settings.columns.hasOwnProperty(key)) {
                    console.log( );
                    if (vn.settings.columns[key].mod_name != '') {
                        console.log();
                        if (vn.settings.columns[key].length != 0) {

                            stringQuery += +" " + key + " like " + "'" + vn.settings.columns[key].mod_name + "xoxxooxl and ";
                            strEmpty = false;
                            console.log('str - ' + strEmpty);
                            console.log('stringQuery - ' + stringQuery);
                        }
                    }

                }

            }
            var str=stringQueryProp.replace(/0/g, '');
            var str2=str.slice(0,-2);
            var str3=stringQuery.slice(0,-4).replace(/0/g,'');
            var query;
            var queryAll;
            if(strEmpty==true){
                if(vn.strSort=='') {

                    query = ' select *' + ' from ' + table + ' ,rf_subject, english_level, schools, t_shirt, status, category ' + str3 + ' ' + sortDir + ' where ( members.RF_subject=rf_subject.subject_id AND members.english_level=english_level.level_id AND members.school=schools.school_id AND members.t_shirt=t_shirt.shirt_id AND members.status=status.statusid AND members.category=category.category_id ) ' + ' ORDER BY ID LIMIT ' + vn.lag + ',' + (Number.parseInt(vn.numberRows));
                    queryAll = ' select *' + ' from ' + table + ' ,rf_subject, english_level, schools, t_shirt, status, category ' + str3 + ' ' + sortDir + ' where ( members.RF_subject=rf_subject.subject_id AND members.english_level=english_level.level_id AND members.school=schools.school_id AND members.t_shirt=t_shirt.shirt_id AND members.status=status.statusid AND members.category=category.category_id ) ' + ' ORDER BY ID ';
                    /*query= ' select *' +' from '+table+ ' LIMIT '+vn.lag+','+ (Number.parseInt(vn.numberRows));*/

                }else {

                    query = ' select *' + ' from ' + table + ' ,rf_subject, english_level, schools, t_shirt, status, category ' + str3 + ' ' + sortDir + ' where ( members.RF_subject=rf_subject.subject_id AND members.english_level=english_level.level_id AND members.school=schools.school_id AND members.t_shirt=t_shirt.shirt_id AND members.status=status.statusid AND members.category=category.category_id  ) ' +vn.strSort+ '  LIMIT ' + vn.lag + ',' + (Number.parseInt(vn.numberRows));
                    queryAll = ' select *' + ' from ' + table + ' ,rf_subject, english_level, schools, t_shirt, status, category ' + str3 + ' ' + sortDir + ' where ( members.RF_subject=rf_subject.subject_id AND members.english_level=english_level.level_id AND members.school=schools.school_id AND members.t_shirt=t_shirt.shirt_id AND members.status=status.statusid AND members.category=category.category_id  ) ' +vn.strSort ;

                }
            } else{

                query= ' select *' +' from '+table+' ,rf_subject, english_level, schools, t_shirt, status, category'+' where '+'  ( members.RF_subject=rf_subject.subject_id AND members.english_level=english_level.level_id AND members.school=schools.school_id AND members.t_shirt=t_shirt.shirt_id AND members.status=status.statusid  AND members.category=category.category_id  ) '+' AND '+str3+' '+sortDir+vn.strSort+' LIMIT '+vn.lag+','+ (Number.parseInt(vn.numberRows));
                queryAll= ' select *' +' from '+table+' ,rf_subject, english_level, schools, t_shirt, status, category'+' where '+'  ( members.RF_subject=rf_subject.subject_id AND members.english_level=english_level.level_id AND members.school=schools.school_id AND members.t_shirt=t_shirt.shirt_id AND members.status=status.statusid  AND members.category=category.category_id  ) '+' AND '+str3+' '+sortDir+vn.strSort;

            }


            setTimeout(function(){
                $http.get('/api/members/search/' + query).then(function (data) {
                    vn.items = data.data;



                })

                $http.get('/api/members/search/' + queryAll).then(function (data) {
                    $scope.items = data.data;
                    vn.countIt=[];
                    var c=1;
                    for(var i in data.data){
                        vn.countIt.push(c++);
                    }
                    console.log(vn.countIt);

                })
            },1000);




        }



        function sortProp(obj){
            var arr=[];
            for(var i in obj) {
                if (obj[i].display == true) {
                    console.log(obj[i].display + ' true');


                    arr.push([i, obj[i].order, obj[i].type]);

                }else{

                }
            }
            arr.sort(function(a,b){
                return a[1]-b[1];
            });
            var str='';
            for(var i=0;i<arr.length;i++){
                str+=''+arr[i][0]+', ';
            }
            strFin=str.slice(0,-2);
            var r =[];
            for(var i=0;i<arr.length;i++){
                r.push(arr[i]);
            }
            return r;
        }
        vn.strSort='';
        vn.orderByProp=function(param){



            vn.strSort='ORDER BY '+param;


        }
        vn.removeItem= function(){
            var id_array;
            $http({
                method: "DELETE",
                url: '/api/members/'+vn.itemId
            }).then(function () {

                for(var i in vn.items) {
                    if (vn.items[i].id == vn.itemId) {
                        id_array = i;
                        console.log(i+' ii');
                        vn.items.splice(vn.items[id_array], 1);
                        vn.refresh();
                    }
                }
            });
            vn.mod={visible:true};
            vn.showPopUpMsg = {visible:false};
        }

        vn.addUpMembers= function(item){

             vn.updateMemID=item.id
            vn.showViewMember = {visible:true};
            for(var i in vn.items){
                if(vn.items[i].id==vn.updateMemID){
                    vn.choosingMemberById=vn.items[i];
                }
            }
            delete vn.choosingMemberById['subject_id'];
            delete vn.choosingMemberById['level_id'];
            delete vn.choosingMemberById['school_id'];
            delete vn.choosingMemberById['shirt_id'];
            delete vn.choosingMemberById['statusid'];
            delete vn.choosingMemberById['category_id'];
console.log('vn.choosingMemberById resp'+JSON.stringify(vn.choosingMemberById));
              $http.get('/api/members/english/').then(function(data){
                vn.getEnglishLevel=data.data;
                        for(var j in vn.getEnglishLevel ){
                            if(vn.choosingMemberById.english_level==vn.getEnglishLevel[j].english_level){
                                vn.selectedOption=vn.getEnglishLevel[j];                            }
                        }

            });
            Transactions.getCategory('category').then(function(data){
                vn.getCategory=data.data;

                         for(var j in vn.getCategory){
                            if(vn.choosingMemberById.category
                                ==vn.getCategory[j].category){
                                vn.selectedOptionCategory=vn.getCategory[j];
                            }
                        }
            });
            Transactions.getTShirt('t_shirt').then(function(data){
                vn.getTShirtArr=data.data;

                for(var j in vn.getTShirtArr){
                    if(vn.choosingMemberById.t_shirt
                        ==vn.getTShirtArr[j].t_shirt){
                        vn.selectedOptionTShirt=vn.getTShirtArr[j];
                    }
                }
            });
            Transactions.getStatus('status').then(function(data){
                vn.getStatus=data.data;

                for(var i in vn.getStatus){
                    if(vn.choosingMemberById.status==vn.getStatus[i].status){
                        vn.selectedOptionStatus=vn.getStatus[i];
                    }
                }
            });
            Transactions.getSubject().then(function(data){
                vn.SubjectsOfRussia=data.data;

                for(var i in vn.SubjectsOfRussia){
                    if(vn.choosingMemberById.RF_subject==vn.SubjectsOfRussia[i].RF_subject){
                        vn.selectedOptionSubject=vn.SubjectsOfRussia[i];

                    }
                }
            });
            Transactions.getSchool('schools').then(function(data){
                vn.getSchool=data.data;

                for(var i in vn.getSchool){

                    if(vn.choosingMemberById.school==vn.getSchool[i].school){
                        vn.selectedOptionSchool=vn.getSchool[i];

                    }
                }
            });

            vn.choosingMemberById.birthday=new Date(vn.choosingMemberById.birthday);

        }
        $scope.saveUpdateMember=function(){

            vn.saveUpdateM=vn.choosingMemberById
            vn.saveUpdateM.t_shirt=vn.selectedOptionTShirt;
            vn.saveUpdateM.RF_subject=vn.selectedOptionSubject.RF_subject;

            for(var i in vn.getEnglishLevel){
                if(vn.selectedOption.english_level==vn.getEnglishLevel[i].english_level){
                    vn.saveUpdateM.english_level=vn.getEnglishLevel[i].level_id;
                }
            }
            for(var i in vn.SubjectsOfRussia){

                if(vn.selectedOptionSubject.RF_subject==vn.SubjectsOfRussia[i].RF_subject){
                    vn.saveUpdateM.RF_subject=vn.SubjectsOfRussia[i].subject_id;
                }
            }
            for(var i in vn.getCategory){
                if(vn.selectedOptionCategory.category==vn.getCategory[i].category){
                    vn.saveUpdateM.category=vn.getCategory[i].category_id;
                }
            }
            for(var i in vn.getTShirtArr){
                if(vn.selectedOptionTShirt.t_shirt==vn.getTShirtArr[i].t_shirt){
                    vn.saveUpdateM.t_shirt=vn.getTShirtArr[i].shirt_id;

                }
            }
            for(var i in vn.getStatus){
                if( vn.selectedOptionStatus.status==vn.getStatus[i].status){
                    vn.saveUpdateM.status=vn.getStatus[i].statusid;
                }
            }
            for(var i in vn.getSchool){
                if(vn.selectedOptionSchool.school==vn.getSchool[i].school){
                    vn.saveUpdateM.school=vn.getSchool[i].school_id;
                }
            }
            console.log('vn.saveUpdateM=vn===>'+JSON.stringify(vn.saveUpdateM));
            console.log('=vn===>'+JSON.stringify(vn.choosingMemberById));
           Transactions.updateMember(vn.saveUpdateM).then(function(data){
                /*for (var i = 0; i < vn.items.length; i++) {
                    if (vn.items[i].id == data.id) {
                        vn.items[i] = data;
                        break;
                    }
                }*/
            });
            vn.saveUpdateM.birthday= new Date(Date.UTC(vn.choosingMemberById.birthday.getFullYear(),vn.choosingMemberById.birthday.getMonth(),vn.choosingMemberById.birthday.getDate(),vn.choosingMemberById.birthday.getHours(),vn.choosingMemberById.birthday.getMinutes(),vn.choosingMemberById.birthday.getSeconds()));

            vn.saveUpdateM.full_years= new Date().getFullYear()-vn.saveUpdateM.birthday.getFullYear();
            vn.refresh();
        }

        vn.addMembers= function(item){

            vn.addMemberForm = {visible:true};
            $http.get('/api/members/english/').then(function(data){

                vn.getEnglishLevel=data.data;

             })
            Transactions.getSubject().then(
                function(data){
                    /*console.log('This is subject of Russia=>'+JSON.stringify(data.data));*/
                    vn.SubjectsOfRussia=data.data;
                }
            )
            Transactions.getTShirt('t_shirt').then(
                function(data){
                    vn.getTShirtArr=data.data;

                }
            )
            Transactions.getStatus('status').then(
                function(data){
                    vn.getStatus=data.data;

                }
            )
            Transactions.getSchool('schools').then(
                function(data){
                    vn.getSchool=data.data;

                }
            )
            Transactions.getCategory('category').then(
                function(data){
                    vn.getCategory=data.data;

                }
            )
            vn.newMemeberBirthday=new Date();
            /* Transactions.getEnglish().then(function(value){
                vn.getEnglishLevel=value.config.data;
                console.log(' blia gde English ? =>'+JSON.stringify(value.config.data));
            });*/

           /* Transactions.getEnglish().then(function(data){
                console.log(' blia gde English ? =>'+JSON.stringify(data));
            });*/
            /*Transactions.getEnglish( )
                .then(function(value){
                    console.log(' blia gde English ? =>'+JSON.stringify(value));
                });*/


            vn.viewItem=item;
        }

        vn.closeAddUpMembers= function(item){

            vn.showViewMember = {visible:false};

        }
        vn.closeAddMembers= function(item){

            vn.addMemberForm = {visible:false};

        }
        vn.data={visible : false};
        //----------------------------------update
        vn.upAddUpdate= function(item,prop){
            console.log(prop+' prop');
            console.log(item.id+' prop id');
            var inf=document.getElementById(prop);
            var update=document.getElementById(prop+'update');
            var pen=document.getElementById(prop+'pen');
            inf.removeAttribute('readonly');
            /*vn.data={visible : true};*/
            pen.style.display='none';
            update.style.display='block';
            inf.style.backgroundColor='white';

        }
        vn.upAddUpdatePraty= function(item,prop){
            console.log(prop+' prop');
            console.log(item.id+' prop id');
             var inf=document.getElementById(prop);
            var update=document.getElementById(prop+'update');
            var pen=document.getElementById(prop+'pen');


            vn.data={visible : true};



        }
        vn.saveUpdate=function(item,prop){
            var inf=document.getElementById(prop);
            var update=document.getElementById(prop+'update');
            var pen=document.getElementById(prop+'pen');
            inf.setAttribute('readonly',true);
            vn.data={visible : false};
            console.log(item+' updatw');
            pen.style.display='block';
            update.style.display='none';

            vn.openUpdateModal(item,prop);

        }
        vn.saveUpdatePraty=function(item,prop){
            var inf=document.getElementById(prop);
            var update=document.getElementById(prop+'update');
            var pen=document.getElementById(prop+'pen');

            vn.data={visible : false};
            console.log(item+' updatw');
            vn.openUpdateModal(item,prop);

        }
        vn.newMember={
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
            english_level:5,
            health:'',
            category:'',
            t_shirt:11,
            status:6,
            contract_number:'',
            contract_res:'',
            summ:0,
            date:0

        }
        vn.addNewMemeber=function( ) {

           vn.showPopUpWarning={visible:true};

            vn.fullYears=15;

            for(var i in vn.getEnglishLevel){


                if(vn.getEnglishLevel[i].english_level==vn.selectedEnglish){
                    vn.selectedEnglishId=vn.getEnglishLevel[i].level_id;
                    console.log('vn.selectedEnglishId=='+vn.selectedEnglishId);
                }
            }
            for(var i in vn.SubjectsOfRussia){


                if(vn.SubjectsOfRussia[i].RF_subject==vn.selectedRFSubject){
                    vn.selectedRFSubjectId=vn.SubjectsOfRussia[i].subject_id;

                }
            }
            for(var i in vn.getTShirtArr){


                if(vn.getTShirtArr[i].t_shirt==vn.selectedTShirt){
                    vn.selectedTShirtId=vn.getTShirtArr[i].shirt_id;
                    console.log('T-Shirt =='+vn.selectedTShirtId+' +>'+vn.selectedRFSubjectId);
                }
            }
            for(var i in vn.getStatus){


                if(vn.getStatus[i].status==vn.selectedStatus){
                    vn.selectedStatusId=vn.getStatus[i].statusid;
                    console.log('Status =='+vn.selectedStatusId+' +>'+vn.selectedStatus);
                }
            }
            for(var i in vn.getSchool){


                if(vn.getSchool[i].school==vn.selectedSchool){
                    vn.selectedSchoolId=vn.getSchool[i].school_id;

                }
            }
            for(var i in vn.getCategory){


                if(vn.getCategory[i].category==vn.selectedCategory){
                    vn.selectedCategoryId=vn.getCategory[i].category_id;

                }
            }
            if(vn.newMember.birthday){}


                vn.newMember.date= new Date();


                vn.newMember.english_level=vn.selectedEnglishId;
                vn.newMember.RF_subject=vn.selectedRFSubjectId;
                vn.newMember.t_shirt=vn.selectedTShirtId;
                vn.newMember.status=vn.selectedStatusId;
                vn.newMember.school=vn.selectedSchoolId;
                vn.newMember.category=vn.selectedCategoryId;

                vn.newMember.full_years =
                    vn.newMember.date.getFullYear()
                    - vn.newMemeberBirthday.getFullYear();

                vn.newMember.birthday=vn.newMemeberBirthday.getFullYear()+'-'+(vn.newMemeberBirthday.getMonth()+1)+'-'+vn.newMemeberBirthday.getDate();





            for(var i in vn.newMember){console.log(i+' = > '+vn.newMember[i])}
                    var response=Transactions.add(vn.newMember, vn.items)
                        .then(function(value){
                          /*value.config.data.id=value.data.id;
                            vn.items.push(value.config.data);
                            vn.refresh();*/
                            vn.refresh();

            });

            vn.addMemberForm = {visible: false};

        }
        vn.clearform=function  (){
            vn.newMember={
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
                english_level:5,
                health:'',
                category:'',
                t_shirt:11,
                status:6,
                contract:'',
                summ:0,
                date:0

            }
            vn.selectedTShirt='no information';
            vn.selectedRFSubject=' ';
            vn.selectedEnglish='я незнаю'
            vn.status='нет информации'
            vn.addMembers();

        }



        vn.closeWarning=function(){
            vn.showPopUpWarning={visible:false};
        }
        vn.clearNewMemeber=function(){

                console.log(vn.newMember['id']+' preclear');

            for(var i in vn.newMember){
                vn.newMember[i]='';
                vn.selectedEnglish='';
            }
            console.log(vn.newMember);
        }
        vn.file_xsl=function () {
          /*  var data_type = 'data:application/vnd.ms-excel';
            var table_div = document.getElementById('tableUser');
            var table_html = table_div.outerHTML.replace(/ /g, '%20');
            var a = document.createElement('a');
            a.href = data_type + ', '+'\uFEFF' + table_html;
            a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
            a.click();*/

                var tab_text="<table border='2px'><tr bgcolor='#87AFC6' style='height: 75px; text-align: center; width: 250px'>";
                var textRange; var j=0;
                tab = document.getElementById('tableUser'); // id of table

                for(j = 0 ; j < tab.rows.length ; j++)
                {

                    tab_text=tab_text;

                    tab_text=tab_text+tab.rows[j].innerHTML.toUpperCase()+"</tr>";
                    //tab_text=tab_text+"</tr>";
                }

                tab_text= tab_text+"</table>";
                tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
                tab_text= tab_text.replace(/<img[^>]*>/gi,""); //remove if u want images in your table
                tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); //remove input params

                var ua = window.navigator.userAgent;
                var msie = ua.indexOf("MSIE ");

                if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer

                {
                    txtArea1.document.open("txt/html","replace");
                    txtArea1.document.write( 'sep=,\r\n' + tab_text);
                    txtArea1.document.close();
                    txtArea1.focus();
                    sa=txtArea1.document.execCommand("SaveAs",true,"sudhir123.txt");
                }

                else {
                    sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));
                }

                return (sa);


        };
        $scope.getPageController= function(item){
            console.log('current page '+item);
            vn.pageNumber=item;

            vn.refresh();
        }
        vn.refresh();
      /*  SELECT u.first_name, u.last_name,  r.name FROM mytaskslist.user u
        left join mytaskslist.groupcompetitor g
        on u.id=g.student_id
        left join mytaskslist.group r
        on g.group_id=r.id
        where not group_id is null*/
    }

    angular.module('formula')
        .controller('table2Controller',['Transactions','$http','$scope', table2Controller]);



})()


