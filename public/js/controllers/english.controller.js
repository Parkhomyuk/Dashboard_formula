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
                    db_name:'english_level'
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
        Transactions.getDirectories('english_level').then(function(data){
            vn.items=data.data;

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
                if (i <= 9) {
                    vn.pagesArray.push({'page': i});
                }
            }
        });


    };

    angular.module('formula')
        .controller('englishCtr', ['Transactions','$http','$scope',  englishCtr]);
})()