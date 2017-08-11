/*
(function(){

    angular.module('formula')
        .factory('dataTableService', function($http){
                    var vn=this;

                function searchExprss (str) {
                    var items
                    $http.get('/api/members/search/' + str).then(function (data) {
                         items = data;


                    });
                    return items
                }

            vn.da=function aa(){
                console.log(' this is simple service');
            }

        });

})()*/

(function(){
angular.module('formula').service('Transactions',[ '$http',function($http) {

    var serv=this;


    serv.it=$http.get('/api/members').then(function (data) {
         var items = data;
        serv.tran = data;
        console.log(items);
        return items;
    });
    serv.da=function aa(){
        console.log(' this is simple service');
    };


       /* serv.items=function(){
            $http.get('/api/members').then(function (data) {
            this.it = data;
            console.log(this.it.data);
    })}*/




}]);
})()