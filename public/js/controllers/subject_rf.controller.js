(function(){

    function subjectCtr(Transactions,$scope){
        var vn=this;
        vn.settings = {
            title: {title: "Субъекты РФ"},

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
                    db_name:'subject_id'
                },
                name:{
                    title: 'Субъект РФ',
                    display:true,
                    db_name:'RF_subject',
                    db_key: 'subject_id',
                    table_title: 'Subject of Russia'
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
        vn.curAddTable = 'rf_subject';
        vn.itemTitle = '';
        vn.itemTitleKey = 'RF_subject';
        vn.itemKey = 'subject_id';
        vn.res = function (curAddTable) {
            Transactions.getSubject().then(function (data) {
                vn.items = data.data;
                vn.ss = data.data;
                console.log(JSON.stringify(vn.items));
                for (var i in data.data) {
                    data.data[i]['count'] = Number(i) + 1;
                    vn.arr.push(data.data[i]);
                }
                vn.f = data.data;
                vn.itemsA = vn.f.slice(0, vn.numberRows);

                if (vn.search == undefined) {
                    vn.pagesArray = [];
                    for (var i in data.data) {
                        vn.countItems = Number(i) + 1;
                    }
                    vn.pages = Math.ceil(vn.countItems / vn.numberRows);

                    for (var i = 1; i <= vn.pages; i++) {
                        if (i <= 9) {
                            vn.pagesArray.push({'page': i});
                        }
                    }
                }


            });

        }
        vn.res(vn.curAddTable);
    };

    angular.module('formula')
        .controller('subjectCtr', ['Transactions','$http','$scope', subjectCtr]);
})()