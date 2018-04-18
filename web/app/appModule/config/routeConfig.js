GMApp.config(['$routeProvider', '$stateProvider', '$locationProvider','notificationServiceProvider', '$urlRouterProvider', '$httpProvider',
  function($routeProvider, $stateProvider, $locationProvider, notificationServiceProvider, $urlRouterProvider, $httpProvider) {
    notificationServiceProvider.setDefaults({
        history: false,
        delay: 4000,
        closer: true,
        closer_hover: true  
    });
    var prefix = '/secure';

        $stateProvider
        .state('home', {
            url: prefix+'/home',
            templateUrl: '/app/assets/angular/views/home.html',
            controller: 'HomeCtrl'
        })
        // .state('login', {
        //     url: prefix+'/login',
        //     templateUrl: '/app/assets/angular/views/login.html',
        //     controller: 'LoginCtrl'
        // })
        // .state('logout', {
        //     url: '/logout',
        //     templateUrl: '/app/assets/angular/views/logout.html',
        //     controller: 'LogoutCtrl'
        // })
        $urlRouterProvider.otherwise(function($injector, $location){
            var state = $injector.get('$state');
            var path = $location.path();
            if(path == '/')
                state.go('home');
            else
                state.go('error');
        });
        $httpProvider.interceptors.push('requestInterceptor');
        $locationProvider.html5Mode(true);
}]);
