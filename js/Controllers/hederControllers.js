angular.module('profnab_App.controller.Heder',[])
.controller('HederCtrl',['$scope',function($scope){
        $scope.box={
            shadow:false,
            mail:false,
            phone:false
        }

        $scope.BoxDisplayClose=function(){
            $scope.box.shadow=false;
            $scope.box.mail=false;
            $scope.box.phone=false;
        }
        $scope.OpenMail=function(){
            $scope.box.shadow=true;
            $scope.box.mail=true;

        }
        $scope.OpenPhone=function(){
            $scope.box.shadow=true;
            $scope.box.phone=true;

        };
        $scope.SendMaessges=function(){
            $scope.box.shadow=false;
            $scope.box.mail=false;

        }
        $scope.SendPhone=function(){
            $scope.box.shadow=false;
            $scope.box.phone=false;

        }
}]);