(function(){

    function schoolCtr(Transactions,$scope){
        var vn=this;
        vn.settings = {
            title: {title: "Schools"},

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
                    db_name:'school',
                    db_key:'school_id',
                    table_title:'School'
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
        vn.curAddTable='schools';
        vn.itemTitle='';
        vn.itemTitleKey='school';
        vn.itemKey='school_id';
        vn.res=function(curAddTable){
          Transactions.getSchool( curAddTable).then(function(data){
            vn.items=data.data;
           vn.ss=data.data;

          for(var i in data.data){
              data.data[i]['count']=Number(i)+1;
              vn.arr.push(data.data[i]);
          }
            vn.f=data.data;
            vn.itemsA=vn.f.slice(0,vn.numberRows);

            if(vn.search==undefined){
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
            }


        });}

        vn.res(vn.curAddTable);
    };



    angular.module('formula')
        .controller('schoolCtr', ['Transactions','$http','$scope', schoolCtr]);
})()