(function(){

    function englishCtr(Transactions,$scope){
        var vn=this;
        vn.settings = {
            title: {title: "English level"},

            columns: {
                order: {
                    title:'#',
                    display: true
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
                    db_name:'level_id'
                },
                name:{
                    title: 'English level',
                    display:true,
                    db_name:'english_level',
                    db_key: 'level_id',
                    table_title: 'English level'
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
        vn.curAddTable = 'english_level';
        vn.itemTitle = '';
        vn.itemTitleKey = 'english_level';
        vn.itemKey = 'level_id';
        vn.res = function (curAddTable) {
        Transactions.getDirectories('english_level').then(function(data){
            vn.items=data.data;
            vn.ss=data.data;
            console.log(JSON.stringify(vn.items));
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


        });



    };
    vn.res(vn.curAddTable);
    };
    angular.module('formula')
        .controller('englishCtr', ['Transactions','$http','$scope',  englishCtr]);
})()