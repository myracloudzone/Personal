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
        .state('contact', {
            url: prefix+'/contact',
            templateUrl: '/app/assets/angular/views/contact.html',
            controller: 'ContactCtrl'
        })
        .state('team', {
            url: prefix+'/team',
            templateUrl: '/app/assets/angular/views/team.html',
            controller: 'TeamCtrl'
        })
        .state('service', {
            url: prefix+'/service',
            templateUrl: '/app/assets/angular/views/service.html',
            controller: 'ServiceCtrl'
        })
        .state('error', {
            url: prefix + '/error',
            templateUrl: '/app/assets/angular/views/error.html',
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
