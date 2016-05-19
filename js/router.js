// маршруты

angular.module('profnab_App')
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('main', {
                url: "/main",
                views: {
                    "header_page": {
                        templateUrl: "Pages/hed.html",
                        controller: "HederCtrl"
                    },
                    "content_page": {
                        templateUrl: "Pages/Main.html",
                        controller: "MainCtrl"
                    }
                }
            })
            .state('products', {
                url: "/products",
                views: {
                    "header_page": {
                        templateUrl: "Pages/hed.html",
                        controller: "HederCtrl"
                    },
                    "content_page": {
                        templateUrl: "Pages/Product.html",
                        controller: "ProductCtrl"
                    }
                }
            })
            .state('recall', {
                url: "/recall",
                views: {
                    "header_page": {
                        templateUrl: "Pages/hed.html",
                        controller: "HederCtrl"
                    },
                    "content_page": {
                        templateUrl: "Pages/Recall.html",
                        controller: "RecallCtrl"
                    }
                }
            })
            .state('kontaks', {
                url: "/kontaks",
                views: {
                    "header_page": {
                        templateUrl: "Pages/hed.html",
                        controller: "HederCtrl"
                    },
                    "content_page": {
                        templateUrl: "Pages/Kontaks.html",
                        controller: "KontaksCtrl"
                    }
                }
            })
            .state('information', {
                url: "/information",
                views: {
                    "header_page": {
                        templateUrl: "Pages/hed.html",
                        controller: "HederCtrl"
                    },
                    "content_page": {
                        templateUrl: "Pages/Information.html",
                        controller: "InformationCtrl"
                    }
                }
            })
        $urlRouterProvider.otherwise('/main');
    });

