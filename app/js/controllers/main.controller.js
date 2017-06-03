(function(){
    function mainCtr(){
        vm=this;
        vm.text='Shalom';

    }
angular.module('formula')
        .controller('mainCtr',[mainCtr]);


})()