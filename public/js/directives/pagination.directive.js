(function(){
    'use strict';
    angular.module('formula')
        .directive('pagdirective',['paggination','Transactions', function(paggination,Transactions){
            return{
                restrict:'E',
                templateUrl:'templates/paginationTemplate.html',
                link: function(scope, elem,attrs){


                        scope.itemsInPage = scope.numberRows;



                   /*  Transactions.countMembers().then(function(count){
                            var totalItems=count.data[0];
                         console.log('totalItems'+JSON.stringify(count.data[0]) );
                            for(var i in  totalItems){
                                console.log(totalItems[i]);
                                 scope.to =totalItems[i];

                            }*/
                    scope.$watch(angular.bind(this, function(){return scope.items;}), function(newVal, oldVal){
                        scope.itemsCount=newVal;
                        scope.pagesArray=[];
                        var count=0;
                        for(var i in scope.itemsCount){
                            count++;
                        }
                        scope.totalItems=count;
                        console.log(' count '+count);


                        scope.pages=Math.ceil(count /scope.numberRows);
                        for(var i=1;i<=scope.pages;i++){
                            if(i<=6){
                                scope.pagesArray.push({'page':i});

                            }

                        }
                        /*if(scope.pagesArray.length>6){
                            scope.pagesArray.slice(0,6);
                        }*/
                        console.log('scope.totalItems'+ scope.pages );
                        console.log('pages'+count );
                        console.log(' scope.pagesArray+count'+ JSON.stringify(scope.pagesArray) );

                    });


                    scope.$watch(angular.bind(this, function(){return scope.numberRows;}), function(newVal, oldVal){
                        scope.numberRows=newVal;
                        scope.pagesArray=[];
                        var count=0;
                        for(var i in scope.itemsCount){
                            count++;
                        }
                        scope.pages=Math.ceil(count /scope.numberRows);
                        for(var i=1;i<=scope.pages;i++){
                            if(i<=6){
                                scope.pagesArray.push({'page':i});

                            }

                        }
                    });

                    scope.getPage=function(item){

                        scope.pagerItem=item-1;
                        var it=document.getElementById('page'+item);
                        it.className="choose";
                        it.style.color='red';
                        scope.getPageController(scope.pagerItem);
                    }
                    scope.pagerItem=0;


                   /* scope.$watch(angular.bind(this, function(){return scope.pagesArray;}), function(newVal, oldVal){
                        scope.pagesArray=newVal;
                        console.log('  count'+ JSON.stringify(scope.pagesArray) );
                    });*/
                }
            }
        }]);
})()
