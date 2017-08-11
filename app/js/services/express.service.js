(function(){

    angular.module('formula')
        .factory('dataTableService', function($http){


                function searchExprss (str) {
                    var items
                    $http.get('/api/members/search/' + str).then(function (data) {
                         items = data;


                    });
                    return items
                }

        });

})()