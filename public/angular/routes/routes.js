app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'indexCtrl',
            controllerAs: 'index'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html'
        })
        .when('/login-signup', {
            templateUrl: 'views/login-signup.html',
            controller: 'indexCtrl',
            controllerAs: 'index'
        })
        .when('/dashboard/:userId', {
            templateUrl: 'views/dashboard.html',
            controller: 'dashCtrl',
            controllerAs: 'dashboard'
        })
        .when('/forgotpass', {
            templateUrl: 'views/forgotpass.html',
            controller: 'forgotCtrl',
            controllerAs: 'forgot'
        })
        .when('/resetpassword/:userId', {
            templateUrl: 'views/resetpassword.html',
            controller: 'resetCtrl',
            controllerAs: 'reset'
        })
        .when('/takeTest/:userId', {
            templateUrl: 'views/takeTest.html',
            controller: 'testCtrl',
            controllerAs: 'test'
        })
        .when('/startTest/:userId/:testId', {
            templateUrl: 'views/liveTest.Html',
            controller: 'liveCtrl',
            controllerAs: 'live'
        })
        .when('/admin/:userId', {
            templateUrl: 'views/admin.html',
            controller: 'adminCtrl',
            controllerAs: 'admin'
        })
        .otherwise({
            template: '<p></br><h2 align="center" class="well" style="margin: 10%;">404, page not found</br></h2></p>\
		<p align="center"><button align="center"><a href="#/" style="color:black">Homepage</a></button></p>'
        });
}]);
