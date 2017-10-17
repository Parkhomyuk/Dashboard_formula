(function(){

    function categoryCtr(Transactions,$scope) {
        var vn = this;
        vn.settings = {
            title: {title: "Member's category"},

            columns: {
                order: {
                    title: '#',
                    display: true,
                    db_name: ''
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
                    db_name: 'category_id'
                },
                name: {
                    title: 'Category',
                    display: true,
                    db_name: 'category',
                    db_key: 'category_id',
                    table_title: 'Category'
                },
                edit: {
                    title: 'edit',
                    display: true
                }
            }
        }



        vn.numberRows = 10;
        vn.prevNumberRows = 0;
        vn.arr = [];
        vn.curAddTable = 'category';
        vn.itemTitle = '';
        vn.itemTitleKey = 'category';
        vn.itemKey = 'category_id';
        vn.res = function (curAddTable) {
            Transactions.getCategory('category').then(function (data) {
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
    }
    angular.module('formula')
        .controller('categoryCtr', ['Transactions','$http','$scope',categoryCtr]);
})()