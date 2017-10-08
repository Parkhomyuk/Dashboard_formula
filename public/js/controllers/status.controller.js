(function(){

    function statusCtr(Transactions,$scope){
        var vn=this;
        vn.settings = {
            title: {title: "Member's status"},

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
                    db_name:'statusid'
                },
                name:{
                    title: 'Status',
                    display:true,
                    db_name:'status'
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
        Transactions.getStatus('status').then(function(data){
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
        .controller('statusCtr', ['Transactions','$http','$scope', statusCtr]);
})()