(function(){

    function tableController(){
        var vn=this;
        vn.hi='hi';
        vn.settings = {
            title:{title:"Members"},
            count:{number:"col-md-1"},
            columns: {
                id: {
                    title: 'ID',
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
                    mod_name:'',
                    type: 'string',
                    class: 'fourth',
                    order:5,
                    search: true,
                    display:true,
                    placeholder:'password',
                    width: 'width: 7.5%'
                },
                first_name: {
                    title: 'first name',
                    mod_name:'',
                    type: 'string',
                    class: 'fifth',
                    order:4,
                    search: true,
                    display:true,
                    placeholder:'first name',
                    width: 'width: 9.5%'
                },
                last_name: {
                    title: 'last name',
                    mod_name:'',
                    type: 'string',
                    class: 'sixth',
                    order:7,
                    search: true,
                    display:true,
                    placeholder:'last name',
                    width: 'width: 9.5%'
                },
                middle_name: {
                    title: 'middle name',
                    mod_name:'',
                    type: 'string',
                    class: 'seventh',
                    order:6,
                    search: true,
                    display:true,
                    placeholder:'middle name',
                    width: 'width: 9.5%'
                },
                birthday: {
                    title: 'birthday',
                    mod_name:'',
                    type: 'number',
                    class: 'eighth',
                    order:8,
                    search: true,
                    display:true,
                    placeholder:'birthday',
                    width: 'width: 7.5%'
                },
                status: {
                    title: 'status',
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
                    mod_name:'',
                    type: 'string',
                    class: 'eleventh',
                    order:11,
                    search: true,
                    display:true,
                    placeholder:'new email',
                    width: 'width: 10%'
                },
                telephon_number: {
                    title: 'phone number',
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

      /*  vn.inputTelephon_number=undefined;
        vn.newObject = {};
        vn.parameters = {};
        vn.searchParams;
        vn.answers={};*/
        vn.search= function(){

            console.log(vn.settings.columns.telephon_number.mod_name+" phone number");
            console.log(vn.settings.columns.first_name.mod_name+" first name");
        }
        vn.orderColumns=function(){
            console.log(vn.settings.columns.first_name.order+" order");
        }
       /* vn.search=function(str){
            var a=dataTableService.searchExpress(str);
            console.log(a+'search');
        };*/


    }

    angular.module('formula')
        .controller('tableController',[tableController]);



})()


