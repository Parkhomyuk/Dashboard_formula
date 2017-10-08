
(function(){

    angular.module('formula')
        .directive('directions',function (Transactions){
            return {
                restrict: 'E',
                templateUrl: 'templates/directionsTemplate.html',
                link: function(scope, elem,attrs){

                    
                    
                    scope.getPage=function(item){
                        console.log('item '+item);
                        var prev=scope.data.numberRows*(item-1);
                        var crows=scope.data.numberRows*item;
                        var f=scope.data.arr;
                        if(item==1){
                            scope.data.itemsA=f.slice(0,crows);
                        }else {
                            scope.data.itemsA = f.slice(prev,crows);
                        }

                    }
                }

            };


        });



})()