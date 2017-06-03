(function(){

    function tableController(){
        var vn=this;
        vn.hi='hi';
        vn.settings = {
            title:{title:"Members"},
            columns: {
                id: {
                    title: 'ID',
                    mod_name:'',
                    type: 'number',
                    class: 'first',
                    search: true,
                    display:'yes',
                    placeholder:'id',
                    width: 'width: 3.5%'
                },
                role_id: {
                    title: 'role ID',
                    mod_name:'',
                    type: 'number',
                    class: 'second',
                    search: true,
                    display:'yes',
                    placeholder:'role',
                    width: 'width: 3.5%'
                },
                username: {
                    title: 'user name',
                    mod_name:'',
                    type: 'string',
                    class: 'third',
                    search: true,
                    display:'no',
                    placeholder:'user id',
                    width: 'width: 3.5%'
                },
                password: {
                    title: 'password',
                    mod_name:'',
                    type: 'string',
                    class: 'fourth',
                    search: true,
                    display:'yes',
                    placeholder:'password',
                    width: 'width: 7.5%'
                },
                first_name: {
                    title: 'first name',
                    mod_name:'',
                    type: 'string',
                    class: 'fifth',
                    search: true,
                    display:'yes',
                    placeholder:'first name',
                    width: 'width: 9.5%'
                },
                last_name: {
                    title: 'last name',
                    mod_name:'',
                    type: 'string',
                    class: 'sixth',
                    search: true,
                    display:'yes',
                    placeholder:'last name',
                    width: 'width: 9.5%'
                },
                middle_name: {
                    title: 'middle name',
                    mod_name:'',
                    type: 'string',
                    class: 'seventh',
                    search: true,
                    display:'yes',
                    placeholder:'middle name',
                    width: 'width: 9.5%'
                },
                birthday: {
                    title: 'birthday',
                    mod_name:'',
                    type: 'number',
                    class: 'eighth',
                    search: true,
                    display:'yes',
                    placeholder:'birthday',
                    width: 'width: 7.5%'
                },
                status: {
                    title: 'status',
                    mod_name:'',
                    type: 'number',
                    class: 'tinth',
                    search: true,
                    display:'yes',
                    placeholder:'status',
                    width: 'width: 3.5%'
                },
                email: {
                    title: 'email',
                    mod_name:'',
                    type: 'string',
                    class: 'tenth',
                    search: true,
                    display:'no',
                    placeholder:'email',
                    width: 'width: 10%'
                },
                new_email: {
                    title: 'new email',
                    mod_name:'',
                    type: 'string',
                    class: 'eleventh',
                    search: true,
                    display:'yes',
                    placeholder:'new email',
                    width: 'width: 10%'
                },
                telephon_number: {
                    title: 'phone number',
                    mod_name:'',
                    type: 'string',
                    class: 'twelfth',
                    search: true,
                    display:'yes',
                    placeholder:'phone number',
                    width: 'width: 10.5%'
                },
            }
        };

        vn.inputTelephon_number=undefined;
        vn.newObject = {};
        vn.parameters = {};
        vn.searchParams;
        vn.answers={};
        vn.search= function(){

            console.log(vn.settings.columns.telephon_number.mod_name+" phone number");
            console.log(vn.settings.columns.first_name.mod_name+" first name");
        }


    }

    angular.module('formula')
        .controller('tableController',[tableController]);



})()


