var PortfolioCtrl = GMApp.controller('PortfolioCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', function($scope, $rootScope, $stateParams,  $filter, $state, $location){
    $scope.init = function() {
        setTimeout(function() {
            $('.navigation').addClass('darkHeader');
        }, 500);
        setTimeout(function() {
            lightGallery(document.getElementById('lightgallery'));
            lightGallery(document.getElementById('lightgallery2'));
        }, 2000)
        
    }
    $scope.minfomasImages = ['/app/assets/angular/images/portfolio/m-infomas/1.png','/app/assets/angular/images/portfolio/m-infomas/2.png',
    '/app/assets/angular/images/portfolio/m-infomas/3.png', '/app/assets/angular/images/portfolio/m-infomas/4.png',
    '/app/assets/angular/images/portfolio/m-infomas/5.png', '/app/assets/angular/images/portfolio/m-infomas/6.png',
    '/app/assets/angular/images/portfolio/m-infomas/7.png', '/app/assets/angular/images/portfolio/m-infomas/8.png',
    '/app/assets/angular/images/portfolio/m-infomas/9.png', '/app/assets/angular/images/portfolio/m-infomas/10.png',
    '/app/assets/angular/images/portfolio/m-infomas/11.png', '/app/assets/angular/images/portfolio/m-infomas/12.png',
    '/app/assets/angular/images/portfolio/m-infomas/13.png', '/app/assets/angular/images/portfolio/m-infomas/14.png',
    '/app/assets/angular/images/portfolio/m-infomas/15.png', '/app/assets/angular/images/portfolio/m-infomas/16.png',
    '/app/assets/angular/images/portfolio/m-infomas/17.png', '/app/assets/angular/images/portfolio/m-infomas/18.png'];

    $scope.iimssImages = ['/app/assets/angular/images/portfolio/IIMSS/1.png','/app/assets/angular/images/portfolio/IIMSS/2.png',
    '/app/assets/angular/images/portfolio/IIMSS/3.png', '/app/assets/angular/images/portfolio/IIMSS/4.png',
    '/app/assets/angular/images/portfolio/IIMSS/5.png', '/app/assets/angular/images/portfolio/IIMSS/6.png'];
    $scope.init();
               
}]);