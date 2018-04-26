var HomeCtrl = GMApp.controller('HomeCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', function($scope, $rootScope, $stateParams,  $filter, $state, $location){
         

    $scope.goToExplore = function() {
        $('html,body').animate({ scrollTop: $("#productFolio").offset().top}, 'slow');
    }


                        
}]);
