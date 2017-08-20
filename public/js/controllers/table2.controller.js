(function(){

    function table2Controller(Transactions,$http,$scope){
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
                    db_name:'status',
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
                    db_name:'profile',
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
                    db_name:'RF_subject',
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
                    type: 'string',
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
                    db_name:'school',
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
                pref_profil: {
                    title: 'Prefe profile',
                    db_name:'pref_profil',
                    mod_name:'',
                    type: 'string',
                    class: 'eighth',
                    order:24,
                    search: true,
                    display:true,
                    placeholder:'pref prof',
                    width: 'width: 3%'
                },
                pref_profil2: {
                    title: 'Prefe profile #2',
                    db_name:'pref_profil2',
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
                    db_name:'past_paricipation',
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
                    db_name:'results',
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
                    db_name:'english_level',
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
                    db_name:'category',
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
                    db_name:'t_shirt',
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
                    db_name:'known',
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
                contract:{
                    title: 'Contract',
                    db_name:'contract',
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
            english_level:2,
            health:'',
            category:'',
            t_shirt:3,
            status:1,
           contract:'',
           summ:0

        }
        // sql query
        var table='members';
        //pagination varibale//
        vn.numberRows = 100;
        vn.pageNumber = 0;
        vn.pageNumberView = 1;
        vn.pageNumberInRow = 10;
        vn.chooseCountNumber = [100, 25, 50, 200];
        //members varibelse
        vn.items;
        vn.str = '';
        vn.strSort = '';
        vn.param = '';
        //Modal window
        vn.itemId;

        vn.showPopUpMsg = {visible:false};


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
                console.log(item.surname+' '+item.name);
            vn.updateModalInf=prop;
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
                $http.put('/api//members/'+ vn.updateMember.id,vn.updateMember).then(function (modifiedItem) {
                    for (var i = 0; i < vn.items.length; i++) {
                        if (vn.items[i].id == modifiedItem.id) {
                            vn.items[i] = modifiedItem;
                            break;
                        }
                    }


                });
                vn.refresh();

            vn.clearNewMemeber();

        }

        //End modal window update
        vn.refresh=function(){
            vn.search();
        }

        $scope.$watch('vn.strSort', function() {
            console.log(vn.strSort);
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
            if(strEmpty==true){

             query= ' select *' +' from '+table+str3+' '+sortDir+vn.strSort+' LIMIT '+vn.lag+','+ (Number.parseInt(vn.numberRows));
                /*query= ' select *' +' from '+table+ ' LIMIT '+vn.lag+','+ (Number.parseInt(vn.numberRows));*/


            } else{
                console.log( 'no empty')
                query= ' select *' +' from '+table+' where '+str3+' '+sortDir+vn.strSort+' LIMIT '+vn.lag+','+ (Number.parseInt(vn.numberRows));
                console.log(" c "+vn.strSort);
                console.log(" query "+query);
            }




            $http.get('/api/members/search/' + query).then(function (data) {
                vn.items = data.data;
                console.log(  vn.items)
            })



            /* console.log(stringQuery);
             console.log(strEmpty);*/




        }



        function sortProp(obj){
            var arr=[];
            for(var i in obj) {
                if (obj[i].display == true) {
                    console.log(obj[i].display + ' true');


                    arr.push([i, obj[i].order, obj[i].type]);

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
            vn.updateMember={
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
                full_years:'',
                phone_number:'',
                parent_surname:'',
                parent_name:'',
                parent_middle_name:'',
                parent_phone:'',
                parent_email:'',
                english_level:2,
                health:'',
                category:'',
                t_shirt:3,
                status:1,
                contract:'',
                summ:0,
                id:0
            }
            vn.updateMember=item;
            vn.updateMember.birthday=0;
            vn.showViewMember = {visible:true};
            console.log('vn.showVieMmember');
            console.log('item ='+item.surname);
            vn.viewItem=item;
            console.log('item ='+vn.viewItem.name);
        }
        vn.addMembers= function(item){

            vn.addMemberForm = {visible:true};


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
            vn.data={visible : true};

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

        vn.addNewMemeber=function( ) {
            console.log(vn.newMember);
            console.log('Tvou mat');
            vn.showPopUpWarning={visible:true};

               /* if(vn.newMember.surname&&vn.newMember.name&&vn.newMember.parent_surname&&vn.newMember.parent_name&&vn.newMember.full_years==''){
                    vn.showPopUpWarning={visible:true};
                 console.log('wrning');
                    console.log('Tvou zad');

                }*/


            /*if(vn.newMember['surname']&&vn.newMember['name']&&vn.newMember['parent_surname']&&vn.newMember['parent_name']&&vn.newMember['full_years']!='') {*/
                $http.post('/api/members/add', vn.newMember).then(function (item) {
                    vn.items.push(item);
                    console.log(item);
                    vn.addMemberForm = {visible: false};
                });
            /*}*/
        }
        vn.closeWarning=function(){
            vn.showPopUpWarning={visible:false};
        }
        vn.clearNewMemeber=function(){

                console.log(vn.newMember['id']+' preclear');

            for(var i in vn.newMember){
                vn.newMember[i]='';
            }
            console.log(vn.newMember);
        }

        vn.refresh();
    }

    angular.module('formula')
        .controller('table2Controller',['Transactions','$http','$scope',table2Controller]);



})()


