
(function(){

    angular.module('formula')
        .directive('directions',function (Transactions){
            return {
                restrict: 'E',
                templateUrl: 'templates/directionsTemplate.html',
                link: function(scope, elem,attrs){

                    scope.curItemPage=1;
                    
                    scope.getPage=function(item){

                        scope.curItemPage=item;
                        scope.curPage=item;
                        var prev=scope.data.numberRows*(item-1);
                        var crows=scope.data.numberRows*item;
                        var f=scope.data.arr;
                        if(item==1){
                            scope.data.itemsA=f.slice(0,crows);
                        }else {
                            scope.data.itemsA = f.slice(prev,crows);
                        }

                    }
                    scope.pageRight=function(){
                       if(scope.curPage==undefined){
                            scope.getPage(2);
                        }else{
                           if(scope.curPage==scope.data.pages){
                               scope.getPage(scope.curPage);
                           }else{
                               scope.getPage(scope.curPage+1);
                           }

                        }
                    }
                    scope.pageLeft=function(){
                        if(scope.curPage==undefined){
                            scope.getPage(1);
                        }else{
                            if(scope.curPage==1){
                                scope.getPage(scope.curPage);
                            }else{
                                scope.getPage(scope.curPage-1);
                            }

                        }
                    }

                    scope.getItemForEdit=function(key,value){
                        console.log(' current item for edit is '+key+' - '+JSON.stringify(value));
                        scope.redactor=1;
                        scope.curItem=value;
                    }
                    scope.canselEdit=function(){
                        scope.redactor=0;
                    }
                    scope.saveEdit=function(){
                        var item = new Object();
                            item[scope.data.settings.columns.id.db_key]=scope.curItem[scope.data.settings.columns.id.db_key];
                            item[scope.data.settings.columns.name.db_name]=scope.curItem[scope.data.settings.columns.name.db_name];
                         console.log('item t =>'+scope.curItem[scope.data.settings.columns.name.db_name]);
                         console.log('item edit =>'+JSON.stringify(item));
                        var itemRes=new Object();
                        itemRes['id']=scope.curItem[scope.data.settings.columns.name.db_key];
                        itemRes['table']=scope.data.curAddTable;
                        itemRes['body']=item;
                        itemRes['id_name']=scope.data.settings.columns.name.db_key;
                        console.log(JSON.stringify(itemRes));
                         var save=Transactions.updateItemsDir(itemRes.id,itemRes).then(function(data){
                            console.log(JSON.stringify(data));
                        });
                        scope.curItem='';
                    }

                    scope.OpenAddItem=function(table){
                        scope.curAddTable=scope.data.curAddTable;
                        scope.additor=1;
                        console.log(scope.curAddTable);
                    }
                    scope.addNewItem=function(){
                        console.log('table =>'+scope.curAddTable);
                        var ite = new Object();
                        ite[scope.data.itemTitleKey]=scope.data.itemTitle;
                        console.log('var ite =>'+JSON.stringify(ite));
                        console.log('var ite =>'+ ite[scope.data.itemTitleKey]);
                         Transactions.pushItemDirectib(scope.curAddTable,ite).then(function(data){
                            console.log(data);

                         });
                        var ite2 = new Object();
                        ite2[scope.data.itemTitleKey]=scope.data.itemTitle;
                        ite2['count']=scope.data.arr.length+1;
                        scope.data.arr.push(ite2);
                        scope.data.res(scope.data.curAddTable);
                        console.log(JSON.stringify(ite));
                        scope.canselAdd();

                    }
                    scope.canselAdd=function(){
                        scope.additor=0;
                    }



                }

            };


        });



})()