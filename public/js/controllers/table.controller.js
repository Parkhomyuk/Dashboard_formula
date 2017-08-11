(function(){

    function tableController(Transactions,$http,$scope){
        var vn=this;
        vn.settings = {
            title:{title:"Members"},
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
                    width: 'width: 3.5%'
                },
                role_id: {
                    title: 'role ID',
                    db_name:'role_id',
                    mod_name:'',
                    type: 'number',
                    class: 'second',
                    order:2,
                    search: false,
                    display:true,
                    placeholder:'role',
                    width: 'width: 3.5%'
                },
                username: {
                    title: 'user name',
                    db_name:'username',
                    mod_name:'',
                    type: 'string',
                    class: 'third',
                    order:3,
                    search: false,
                    display:true,
                    placeholder:'user id',
                    width: 'width: 3.5%'
                },
                password: {
                    title: 'password',
                    db_name:'password',
                    mod_name:'',
                    type: 'string',
                    class: 'fourth',
                    order:4,
                    search: true,
                    display:true,
                    placeholder:'password',
                    width: 'width: 7.5%'
                },
                first_name: {
                    title: 'first name',
                    db_name:'first_name',
                    mod_name:'',
                    type: 'string',
                    class: 'fifth',
                    order:5,
                    search: true,
                    display:true,
                    placeholder:'first name',
                    width: 'width: 9.5%'
                },
                last_name: {
                    title: 'last name',
                    db_name:'last_name',
                    mod_name:'',
                    type: 'string',
                    class: 'sixth',
                    order:6,
                    search: true,
                    display:true,
                    placeholder:'last name',
                    width: 'width: 9.5%'
                },
                middle_name: {
                    title: 'middle name',
                    db_name:'middle_name',
                    mod_name:'',
                    type: 'string',
                    class: 'seventh',
                    order:7,
                    search: true,
                    display:true,
                    placeholder:'middle name',
                    width: 'width: 9.5%'
                },
                birthday: {
                    title: 'birthday',
                    db_name:'birthday',
                    mod_name:'',
                    type: 'number',
                    class: 'eighth',
                    order:8,
                    search: false,
                    display:true,
                    placeholder:'birthday',
                    width: 'width: 7.5%'
                },
                status: {
                    title: 'status',
                    db_name:'status',
                    mod_name:'',
                    type: 'number',
                    class: 'tinth',
                    order:9,
                    search: true,
                    display:true,
                    placeholder:'status',
                    width: 'width: 3.5%'
                },
                email: {
                    title: 'email',
                    db_name:'email',
                    mod_name:'',
                    type: 'string',
                    class: 'tenth',
                    order:10,
                    search: false,
                    display:true,
                    placeholder:'email',
                    width: 'width: 10%'
                },
                new_email: {
                    title: 'new email',
                    db_name:'new_email',
                    mod_name:'',
                    type: 'string',
                    class: 'eleventh',
                    order:11,
                    search: true,
                    display:true,
                    placeholder:'new email',
                    width: 'width: 10%'
                },
                telephone_number: {
                    title: 'phone number',
                    db_name:'telephone_number',
                    mod_name:'',
                    type: 'string',
                    class: 'twelfth',
                    order:12,
                    search: true,
                    display:true,
                    placeholder:'phone number',
                    width: 'width: 10.5%'
                },
            }
        };
        // sql query
        var table='user';
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
            vn.popText=item.first_name+' '+item.last_name;
            vn.showPopUpMsg = {visible:true};
            vn.itemId=item.id;

        }
        vn.closePopup=function(){
            vn.showPopUpMsg = {visible:false};
        }

        //End modal window
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

        vn.search= function(){

            vn.sortProperties=sortProp(vn.settings.columns);
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
                    console.log(' if (vn.settings.columns.hasOwnProperty(key)) ');
                    if (vn.settings.columns[key].mod_name != '') {
                        console.log('vn.settings.columns[key].mod_name != ');
                        if (vn.settings.columns[key].length != 0) {

                            stringQuery += +" " + key + " like " + "'" + vn.settings.columns[key].mod_name + "xoxxooxl and ";
                            strEmpty = false;
                            console.log('str - ' + strEmpty);
                        }
                    }

                }

            }
            var str=stringQueryProp.replace(/0/g, '');
            var str2=str.slice(0,-2);
            var str3=stringQuery.slice(0,-4).replace(/0/g,'');
            var query;
            if(strEmpty==true){
                console.log('empty');
                query= ' select *' +' from '+table+str3+' '+sortDir+vn.strSort+' LIMIT '+vn.lag+','+ (Number.parseInt(vn.numberRows));
                console.log(" d "+vn.strSort);

            } else{
                console.log( 'no empty')
                query= ' select *' +' from '+table+' where '+str3+' '+sortDir+vn.strSort+' LIMIT '+vn.lag+','+ (Number.parseInt(vn.numberRows));
                console.log(" c "+vn.strSort);
            }




            $http.get('/api/members/search/' + query).then(function (data) {
                vn.items = data.data;

            })

           /* console.log(stringQuery);
            console.log(strEmpty);*/
            console.log(query);

            console.log(stringQueryProp);
            console.log(stringQuery+' ....');


        }

        function sortProp(obj){
            var arr=[];
            for(var i in obj){
                arr.push([i,obj[i].order]);
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
                r.push(arr[i][0]);
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

                vn.showViewMember = {visible:true};
                console.log('vn.showVieMmember');
                console.log('item ='+item.first_name);
                vn.viewItem=item;
                console.log('item ='+vn.viewItem.first_name);
        }


        vn.refresh();
    }

    angular.module('formula')
        .controller('tableController',['Transactions','$http','$scope',tableController]);

 /*       .filter('myFormat', function() {
        return function(x) {
            var y;
            var r=new Date(x);
         if(typeof(x)=="number"&& r.getFullYear()!='1970'){
             console.log('Date');

             y= r.getFullYear()+'.'+ (r.getMonth()+1)+'.'+ r.getDate();
         } else{
             console.log(" no Date");
             y=x;
         }
            return y;
        };
    });
*/

})()


