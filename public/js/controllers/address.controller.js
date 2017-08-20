(function(){

    function address(Transactions,$http,$scope) {
        var vn = this;
        vn.count=5;
         function count () {

            $http({method: 'GET', url: '/api/members/count'}).
            then(function success(response) {
                console.log(response);
                 for(i in response.data[0]){
                     vn.count=response.data[0][i];
                 }

            });

        }
        function address (){
            $http({method: 'GET', url: '/api/members'}).
            then(function success(response) {
                vn.memb=response.data;
                console.log(vn.memb);

            });
        }
        count();
        address();
    }
    angular.module('formula')
        .controller('addressCtrl',[ '$scope','$http',address]);



})()
