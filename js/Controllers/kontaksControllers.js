angular.module('profnab_App.controller.Kontaks',[])
.controller('KontaksCtrl',['$scope',function($scope){
    $scope.geoObjects=[
        {
            // Геометрия = тип объекта + географические координаты объекта
            geometry: {
                // Тип геометрии - точка
                type: 'Point',
                // Координаты точки.
                coordinates: [37.852841,55.739558]
            },
            // Свойства
            properties: {
                balloonContent: '<strong>ПРОФСНАБ (упаковка)</strong><br/>г. Москва, Новокосинская ул., д.17, кор.7,'
            }
        }]
}]);