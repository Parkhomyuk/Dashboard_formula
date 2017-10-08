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
angular.module('formula').service('Transactions',[ '$http','$q',function($http,$q) {

    var serv=this;
    serv.pageCount;
var defferedCount=$q.defer();
serv.countMembers=function(){
    $http.get('api/members/count').then(function(count){
        defferedCount.resolve(count);
    },
    function error(responce){
        defferedCount.reject(responce.status);
    });
    return defferedCount.promise;
}

    serv.it=$http.get('/api/members').then(function (data) {
         var items = data;
        serv.tran = data;

        return items;
    });

    var deffered=$q.defer();

    serv.add=function(newMember,items) {

        $http.post('/api/members/add', newMember).then(function (item) {
            deffered.resolve(item);
            /*items.push(item);*/

            for(var i in item){
                console.log(item[i]);
                console.log(i);
            }

        },function error(response) {
            deferred.reject(response.status);

        });

        return deffered.promise;
    }
    var deffered11=$q.defer();
    serv.update = function (id, updateMember) {
       /* var def = $q.defer();*/

        $http.put('/api/members/' + id, updateMember)
            .then(function (modifiItem) {
                    deffered11.resolve(modifiItem);

            },
            function error(error){
                deffered11.reject(error.status);
            }
            );
        return deffered11.promise;
    }
     /*serv.getEnglish=function(){

        $http.get('/api/members/english/')
            .then(function(english){
            deffered.resolve(english);
        },
        function error(error){
            deffered.reject(error.status)
        }
        );
        console.log(' Expresss =>? '+JSON.stringify(deffered.promise));
        return deffered.promise;
    }*/

     serv.getE=function(english) {

          $http.get('/api/members/english/').then(function(data){

          console.log('Express =>++'+JSON.stringify(data.data));
              english=data.data;

           })}
    var deffered12=$q.defer();
    serv.getSubject=function(){
        $http.get('api/members/subject').then(function(data){
            deffered12.resolve(data);
        },
        function error(error){
            deffered12.reject(error.status)
        });
        console.log(' Expresss =>? '+JSON.stringify(deffered12.promise));
        return deffered12.promise;
    }

    serv.getE=function(english) {

        $http.get('/api/members/english/').then(function(data){

            console.log('Express =>++'+JSON.stringify(data.data));
            english=data.data;
        })}
    var deffered2=$q.defer();
    serv.getTShirt=function(param){

        $http.get('api/members/directly/'+param).then(function(data){

                deffered2.resolve(data);
            },
            function error(error){
                deffered2.reject(error.status)
            });

        return deffered2.promise;
    }
    var deffered3=$q.defer();
    serv.getStatus=function(param){

        $http.get('api/members/directly/'+param).then(function(data){

                deffered3.resolve(data);
            },
            function error(error){
                deffered3.reject(error.status)
            });

        return deffered3.promise;
    }
    var deffered4=$q.defer();
    serv.getSchool=function(param){

        $http.get('api/members/directly/'+param).then(function(data){

                deffered4.resolve(data);
            },
            function error(error){
                deffered4.reject(error.status)
            });

        return deffered4.promise;
    }
    var deffered5=$q.defer();
    serv.getCategory=function(param){

        $http.get('api/members/directly/'+param).then(function(data){

                deffered5.resolve(data);
            },
            function error(error){
                deffered5.reject(error.status)
            });
        console.log(' Expresss =>? '+JSON.stringify(deffered5.promise));
        return deffered5.promise;
    }
    var deffered6=$q.defer();
    serv.getMemberById=function(id){
        $http.get('api/members/id/'+id).then(function(data){
            deffered6.resolve(data);

        },
            function error (error){
                deffered6.reject(error.ststus);
            }
        );

        return deffered6.promise;
    }

    serv.choosingMember=function(member){
        var category=serv.getCategory('category');
        var english=serv.getE();
        serv.choosing=member;

    };
    var defferedUpdate=$q.defer();
    serv.updateMember=function(member){
        $http.put('/api/members/'+ member.id,member).then(function (data) {
             defferedUpdate.resolve(data);
        },
          function error(error){defferedUpdate.reject(error.status)}
        );
        console.log(' Expresss =>? '+JSON.stringify(defferedUpdate.promise));
        return defferedUpdate.promise;
    }
    var defferedDirective=$q.defer();
    serv.getDirectories=function(param){
        $http.get('api/members/directly/'+param).then(function (data) {
                defferedDirective.resolve(data);
            },
            function error(error){defferedDirective.reject(error.status)}
        );

        return defferedDirective.promise;
    }





}]);
})()