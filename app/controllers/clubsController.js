(function() {
  
    var ClubsController = function ($scope, $log, $window, clubsFactory, appSettings) {
        $scope.sortBy = 'club';
        $scope.reverse = false;
        $scope.clubs = [];
        $scope.logo = "http://www.sseairtricityleague.ie/assets/images/logos/sse-airtricity-league-logo.png";
        $scope.loi = "images/loi.png";
        $scope.appSettings = appSettings;
        
        function init() {
            clubsFactory.getClubs()
                .then(function(response) {
                    $scope.clubs = response.data;
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }
        
        init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
//        $scope.deleteCustomer = function(customerId) {
//            customersFactory.deleteCustomer(customerId)
//                .then(function(response) {
//                    var status = response.data;
//                    if (status) {
//                        for (var i=0,len=$scope.customers.length;i<len;i++) {
//                            if ($scope.customers[i].id === customerId) {
//                               $scope.customers.splice(i,1);
//                               break;
//                            }
//                        }  
//                    }
//                    else {
//                        $window.alert('Unable to delete customer');   
//                    }
//                    
//                }, function(data, status, headers, config) {
//                    $log.log(data.error + ' ' + status);
//                });
//        };
    };
    
    ClubsController.$inject = ['$scope', '$log', '$window', 'clubsFactory', 'appSettings'];

    angular.module('clubsApp')
      .controller('ClubsController', ClubsController);
    
}());