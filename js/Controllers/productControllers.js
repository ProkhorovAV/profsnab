angular.module('profnab_App.controller.Product',[])
    .controller('ProductCtrl',['$scope','$anchorScroll',function($scope,$anchorScroll){
        // перечень продуктов
            $scope.products=[
                {
                    name:'Скотч',
                    img:[
                        'img/product/scotch/1.jpg',
                        'img/product/scotch/2.jpg',
                        'img/product/scotch/3.jpg',
                        'img/product/scotch/4.jpg',
                        'img/product/scotch/5.jpg',
                        'img/product/scotch/6.jpg',
                        'img/product/scotch/7.jpg'
                    ],
                    text:'Скотч',
                    options:''
                },
                {
                    name:'Стрейч',
                    img:[
                        'img/product/strey/1.jpg',
                        'img/product/strey/2.jpg',
                        'img/product/strey/3.jpg',
                        'img/product/strey/4.jpg'

                    ],
                    text:'Стретч-плёнка - это один из самых перспективных упаковочных материалов. Для её производства используются сополимеры этилена с винилацетатом (СЭВА), специальные марки линейного полиэтилена низкой плотности (ЛПЭНП), а также некоторые сополимеры этилена с высшими α-олефинами. Эти полимеры характеризуются значительной деформативностью в твердом состоянии, достигающей для отдельных марок 500—600 % при сравнительно невысоких прочностных свойствах. Стретч-пленку производят по традиционной рукавной или плоскощелевой технологии из гранулированного сырья.',
                    options:"Основные потребительские характеристики: престретч — относительная деформация,эта характеристика показывает на сколько может быть растянута пленка при обертывании продукции с обеспечением заявленных характеристик скрепления объекта упаковки и без образования в ней разрывов и надрывов; прочность; относительное удлинение в продольном и поперечном направлениях; стойкость к проколу и разрыву; прозрачность;гибкость; стягивающее усилие — усилие, создаваемое остаточным напряжением в пленке после её растяжения при обмотке или упаковке объектов."
                },
                {
                    name:'Скотч цветной',
                    img:[
                        'img/product/scotchcolor/2.jpg',
                        'img/product/scotchcolor/1.jpg',
                        'img/product/scotchcolor/3.jpg'
                    ],
                    text:'Скотч цветной',
                    options:''
                },
                {
                    name:'Скотч с логотипом',
                    img:[
                        'img/product/scotchlogo/1.jpg',
                        'img/product/scotchlogo/2.jpg',
                        'img/product/scotchlogo/3.jpg',
                        'img/product/scotchlogo/4.jpg'
                    ],
                    text:'Скотч с логотипом',
                    options:''
                },
                {
                    name:'Стрейч цветной',
                    img:[
                        'img/product/streycolor/3.jpg',
                        'img/product/streycolor/2.jpg',
                        'img/product/streycolor/1.jpg'


                    ],
                    text:'Стрейч цветной',
                    options:"Основные потребительские характеристики: престретч — относительная деформация,эта характеристика показывает на сколько может быть растянута пленка при обертывании продукции с обеспечением заявленных характеристик скрепления объекта упаковки и без образования в ней разрывов и надрывов; прочность; относительное удлинение в продольном и поперечном направлениях; стойкость к проколу и разрыву; прозрачность;гибкость; стягивающее усилие — усилие, создаваемое остаточным напряжением в пленке после её растяжения при обмотке или упаковке объектов."
                },
                {
                    name:'Перчатки',
                    img:[
                        'img/product/perch/1.jpg',
                        'img/product/perch/2.jpg',
                        'img/product/perch/3.jpg'
                    ],
                    text:'Перчатки',
                    options:''
                },
                {
                    name:'Стреппинг лента',
                    img:[
                        'img/product/streping/1.jpg',
                        'img/product/streping/2.jpg',
                        'img/product/streping/3.jpg'
                    ],
                    text:'Стреппинг лента',
                    options:'',
                    instruction: [
                        'img/product/streping/actionLent.png'
                    ]
                },
                {
                name:'Бирки для ключей',
                img:[
                    'img/product/birki/1.jpg',
                    'img/product/birki/2.jpg',
                    'img/product/birki/3.jpg'
                ],
                text:'бирки для ключей'

                },
                {
                    name:'Диспансор для скотча',
                    img:[
                        'img/product/dispansor/1.png',
                        'img/product/dispansor/2.jpg',
                        'img/product/dispansor/3.jpg'
                    ],
                    text:'Диспансор для скотча'
                },
                {
                    name:'Замки для стреп ленты',
                    img:[
                        'img/product/zamki/1.jpg',
                        'img/product/zamki/2.jpg',
                        'img/product/zamki/3.jpg'
                    ],
                    text:'Замки для стреп ленты'
                },
                {
                    name:'Скотч контроля вскрытия',
                    img:[
                        'img/product/scotchKontrol/1.jpg',
                        'img/product/scotchKontrol/2.jpg',
                        'img/product/scotchKontrol/4.jpg'
                    ],
                    text:'Скотч контроля вскрытия (широкий и узкий)',
                    instruction: [
                        'img/product/scotchKontrol/10.jpg',
                        'img/product/scotchKontrol/11.jpg',
                        'img/product/scotchKontrol/12.jpg'
                            ]
                },
                {
                    name:'Термо этикетки',
                    img:[
                        'img/product/termoEtiket/1.jpg',
                        'img/product/termoEtiket/2.jpg',
                        'img/product/termoEtiket/3.jpg'
                    ],
                    text:'Термо этикетки',
                    options:''
                }

            ];
        // открытая страничка продуктов
        $scope.proguct_full=$scope.products[0];
        // большая картнка
        $scope.big_img_src=$scope.proguct_full.img[0];
        // открытие сранички
        $scope.full_text=true;
        // открытие полного текста и скрытие
        $scope.Open_full=function(index){
            $scope.full_text=$scope.full_text?false:true;
            if (index!=-1){
                $scope.proguct_full=$scope.products[index];
                $scope.big_img_src=$scope.proguct_full.img[0];
                $scope.img_set=[true,false,false];
                $anchorScroll();
            }
        }
        // классы для установки картинок
        $scope.img_set=[true,false,false];
        $scope.img_hover=function(index){

             $scope.img_set.forEach(function(elem,index){
                 $scope.img_set[index]=false;
             });
            $scope.img_set[index-1]=true;
            $scope.big_img_src=$scope.proguct_full.img[index-1];

        }

    }]);
