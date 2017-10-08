(function(){

    function schoolCtr(Transactions,$scope){
        var vn=this;
        vn.settings = {
            title: {title: "Members Schools"},

            columns: {
                order: {
                    title:'#',
                    display: true,
                    db_name:''
                },
                id: {
                    title: 'ID',
                    mod_name: '',
                    type: 'number',
                    class: 'first',
                    order: 1,
                    search: true,
                    display: true,
                    placeholder: 'id',
                    width: 'width: 2%',
                    db_name:'school_id'
                },
                name:{
                    title: 'Schools',
                    display:true,
                    db_name:'school'
                },
                edit:{
                    title: 'edit',
                    display: true
                }
            }
        }
        vn.numberRows=10;
        vn.prevNumberRows=0;
        vn.arr=[];

      vn.res=Transactions.getSchool('schools').then(function(data){
            vn.items=data.data;
           vn.ss=data.data;

          for(var i in data.data){
              vn.arr.push(data.data[i]);
          }
            vn.f=data.data;
            vn.itemsA=vn.f.slice(0,vn.numberRows);
            vn.pagesArray=[];
         for(var i in data.data){
                vn.countItems=Number(i)+1;
            }
            vn.pages=Math.ceil(vn.countItems/vn.numberRows);

            for(var i=1;i<=vn.pages;i++) {
                if (i <= 6) {
                    vn.pagesArray.push({'page': i});
                }
            }

        });



        console.log('vn.s1 '+vn.s1);
        /*vn.getPage=function(item){
            var prev=vn.numberRows*(item-1);
            var crows=vn.numberRows*item;
            vn.f=vn.items;
            if(item==1){
                vn.itemsA=vn.f.slice(0,crows);
            }else {
                vn.itemsA = vn.f.slice(prev,crows);
            }

        }*/


    };



    angular.module('formula')
        .controller('schoolCtr', ['Transactions','$http','$scope', schoolCtr]);
})()