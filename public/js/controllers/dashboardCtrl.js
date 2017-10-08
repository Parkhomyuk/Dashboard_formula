(function(){
    function dashboard(Transactions,$interval,$filter, $http, $q){

        var vmn=this;
        vmn.clock=new Date();
        vmn.colon=':';

        var stop = $interval(function() {
            vmn.clock=new Date();

        }, 5000);
        var colon1 = $interval(function() {
            if(vmn.colon=='  '){
                vmn.colon=':';

            }else{
                vmn.colon='  ';
            }
        }, 1000);

        Transactions.countMembers().then(function(count){
            vmn.countM=count.data[0];
            console.log(JSON.stringify(count.data)+' count');
            for(var i in count.data[0]){
                vmn.countM=count.data[0][i];
            }
            console.log('vmn.countM=count.data[0][i]=>'+vmn.countM);
        });





    }

angular.module('formula')
     .controller('dashboardCtrl',['Transactions','$interval','$filter', '$http', '$q',dashboard])


})()