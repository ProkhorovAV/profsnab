angular.module('profnab_App.controller.Recall',[])
.controller('RecallCtrl',['$scope',function($scope){
    $scope.array_otziv=[{
        name:'Наумов Владимир',
        data:'12.03.2016г.',
        time:'11:12',
        img:'img/people/Vova.jpg',
        text:'Я молодой предприниматель, обратился в компанию Профснаб и остался довольный сервисом и качеством продукции. Спасибо ребята'
    },
        {
            name:'Дмитрий Бойчук',
            data:'16.04.2016г.',
            time:'15:43',
            img:'img/people/Dima.jpg',
            text:'Закупаюсь постоянно у этой фирмы. Прекрасные ленты, хорошо держат'
        }

    ]
}])