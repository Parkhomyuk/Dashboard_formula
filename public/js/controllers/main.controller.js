(function(){
    function mainCtr(){
        vm=this;
        vm.text='Shalom';
        vm.menu=0;
        vm.toggleMenu= function(){
            console.log('Toggle menu');
            if(vm.menu==1)
            {vm.menu=0}else{
                vm.menu=1;
            }

        }

    }
angular.module('formula')
        .controller('mainCtr',[mainCtr]);


})()