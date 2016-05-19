angular.module('profnab_App.controller.Main',[])
    .controller('MainCtrl',['$scope',function($scope){
        $scope.images=[
            'img/1.jpg',
            'img/2.jpg',
            'img/3.jpg'
        ];
        $scope.index=0;
        $scope.next=function(){
            $scope.index++;
            if ($scope.images.length-1<$scope.index) $scope.index=0;
        };
        $scope.prew=function(){
            $scope.index--;
            if ($scope.index<0) $scope.index=$scope.images.length-1;
        }

    }]);