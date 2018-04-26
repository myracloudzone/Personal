var TeamCtrl = GMApp.controller('TeamCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', function($scope, $rootScope, $stateParams,  $filter, $state, $location){
    $scope.init = function() {
        setTimeout(function() {
            $('.navigation').addClass('darkHeader');
            $('.testimonial-slider').slick({
                infinite: true,
                arrows:false,
                autoplay: true,
                autoplaySpeed: 3000
            });
        }, 500);
        
        
    }
    $scope.init(); 
               
}]);