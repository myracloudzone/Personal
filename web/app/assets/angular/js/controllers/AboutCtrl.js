var AboutCtrl = GMApp.controller('AboutCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', function($scope, $rootScope, $stateParams,  $filter, $state, $location){
    $scope.init = function() {
        setTimeout(function() {
            $('.navigation').addClass('darkHeader');
        }, 500);
        
    }
    $scope.init();
               
}]);