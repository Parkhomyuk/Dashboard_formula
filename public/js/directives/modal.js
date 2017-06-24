/*(function() {
    angular.module('formula')

        .directive('popModal', function () {
            return {
                restrict: 'E',
                scope: false,
              /!*  template: '<div id="popUpMsg-bg" ng-show="showPopUpMsg"><div id="popUpMsg"><div class="close" ng-click="closePopUp()">x</div><div class="content">{{popUpMsgContent}}</div><button ng-click="closePopUp()">Ok</button></div></div>',
               *!/
                template: '<h1>KKKKKKK</h1>',
               /!* controller: function ($scope) {
                    $scope.closePopUp = function () {
                        $scope.showPopUpMsg = false;
                    }
                }*!/
            }
        })

})()*/

(function(){

    angular.module('formula')
        .directive('modal',function (){
            return {
                restrict: 'E',
                templateUrl: 'templates/modalWin.html'
                /*template: '<h1>Fffff</h1>'*/
            };


        });



})()