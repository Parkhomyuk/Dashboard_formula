(function(){

    function directoriesController(Transactions){
        var vn=this;
        Transactions.countMembers().then(function(data){
            vn.count=data.data;
        });

    };

    angular.module('formula')
        .controller('directories', ['Transactions','$http','$scope', directoriesController]);
})()