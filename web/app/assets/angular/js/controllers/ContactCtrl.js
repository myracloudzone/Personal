var ContactCtrl = GMApp.controller('ContactCtrl', ['$scope', '$rootScope', '$stateParams', '$filter', '$state','$location', '$http', 'notificationService', function($scope, $rootScope, $stateParams,  $filter, $state, $location, $http, notificationService){
    $scope.message = {to : "info@grownixindia.com"};
    $scope.init = function() {
        setTimeout(function() {
            $('.navigation').addClass('darkHeader');
        }, 500);
        
    }

    $scope.sendEmail = function() {
        if($scope.message.name == null || $scope.message.name == '') {
            notificationService.error("Name is required.");
            return;
        }
        if($scope.message.email == null || $scope.message.email == '') {
            notificationService.error("Email is required.");
            return;
        }
        if($scope.message.subject == null || $scope.message.subject == '') {
            notificationService.error("Subject is required.");
            return;
        }
        if($scope.message.message == null || $scope.message.message == '') {
            notificationService.error("Message is required.");
            return;
        }
        $http({
            url: 'https://grownixindia.com/service/common/sendEmail',
            method: "POST",
            data: $scope.message,
            headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
            $scope.message = {to : "info@grownixindia.com"};
            notificationService.success("Your request has been submitted successfully. We will reach out to you very soon.!!")
        }).error(function (data, status, headers, config) {
            //$scope.status = status;
        });
    }
    $scope.init();
               
}]);