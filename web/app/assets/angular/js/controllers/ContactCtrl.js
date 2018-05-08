var ContactCtrl = GMApp.controller('ContactCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', '$http', function($scope, $rootScope, $stateParams,  $filter, $state, $location, $http){
    $scope.init = function() {
        setTimeout(function() {
            $('.navigation').addClass('darkHeader');
        }, 500);
        
    }

    $scope.sendEmail = function() {
        var postData = {to : "akshay.soni@infoobjects.com", subject : "Test Send Grid", body : "Hi Akshay"};
        $http({
            url: 'https://grownixindia.com/service/common/sendEmail',
            method: "POST",
            data: postData,
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
            //$scope.persons = data; // assign  $scope.persons here as promise is resolved here 
        }).error(function (data, status, headers, config) {
            //$scope.status = status;
        });
    }
    $scope.init();
               
}]);