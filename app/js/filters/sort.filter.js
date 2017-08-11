(function(){

    angular.module('formula')
        .filter("sortBy", function(){
            return function(obj) {
                var result = [];
                angular.forEach(obj, function(val, key) {
                    result.push(val);
                });
                return result;};})


})()