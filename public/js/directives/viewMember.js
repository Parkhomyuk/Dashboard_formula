
(function(){

    angular.module('formula')
        .directive('viewmember',['Transactions','$http', function ( Transactions){
            return {
                restrict: 'E',
                templateUrl: 'templates/viewAndUpdateMember.html',
                link:function (scope,ement, attrs ){

                    scope.updateMember=    function (){
                        var view=document.getElementById('view');
                            var d=  view.getElementsByTagName('input');
                        var td= view.getElementsByTagName('textarea');
                        var sd= view.getElementsByTagName('select');
                            for(var i=0;i< d.length;i++){
                                d[i].removeAttribute('disabled');
                            }
                        for(var j=0;j< td.length;j++){
                            td[j].removeAttribute( 'disabled');
                        }
                        for(var k=0;k< sd.length;k++){
                            sd[k].removeAttribute( 'disabled');
                        }
                        var btn=document.getElementById('updateMemberBtn').style.display= "none";
                        var btn2=document.getElementById('saveupdateMemberBtn').style.display= "block";

                        }
                    scope.saveupdateMember=function(){
                        var view=document.getElementById('view');
                        console.log('view '+JSON.stringify(view));
                        var d=view.getElementsByTagName('input');
                        console.log('input '+JSON.stringify(d));
                        var td=view.getElementsByTagName('textarea');
                        var sd=view.getElementsByTagName('select');
                        for(var i=0;i< d.length;i++){
                            d[i].setAttribute('disabled','disabled');
                        }
                        for(var j=0;j< td.length;j++){
                            td[j].setAttribute('disabled','disabled');
                        }
                        for(var k=0;k< sd.length;k++){
                            sd[k].setAttribute('disabled','disabled');
                        }
                        console.log('choosingMemberById'+JSON.stringify(Transactions.choosing ));
                        var btn=document.getElementById('updateMemberBtn').style.display= "block";
                        var btn2=document.getElementById('saveupdateMemberBtn').style.display= "none";
                        scope.saveUpdateMember();
                    }

                }
            };


        }]);



})()