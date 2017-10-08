(function(){
        function PageService(){
            var service={};
            service.GetPager=GetPager;

            return service;

            function GetPager(totalItems,currentPage,pageSize){
                currentPage=currentPage||1;
                pageSize=pageSize||10;
                var totalPage=Math.ceil(totalItems/pageSize);
                var startPage, endPage;
                if(totalPage<=10){
                    startPage=1;
                    endPage=totalPage;
                }else{
                    if(currentPage<=6){
                        startPage=1;
                        endPage=10;
                    } else if(currentPage+4 >=totalPage){
                        startPage=totalPage-9;
                        endPage=totalPage;

                    }else{
                        startPage=currentPage-5;
                        endPage=currentPage+4;
                    }
                }
                var startIndex=(currentPage-1)*pageSize;
                var endIndex=Math.min(startIndex+pageSize-1,totalItems-1);


                // return object with all pager properties required by the view
                return {
                    totalItems: totalItems,
                    currentPage: currentPage,
                    pageSize: pageSize,
                    totalPages: totalPage,
                    startPage: startPage,
                    endPage: endPage,
                    startIndex: startIndex,
                    endIndex: endIndex,


                };
            }
        }
    angular.module('formula')
        .factory('paggination',PageService);
})()
