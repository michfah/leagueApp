(function() {
    
    var PlayersController = function ($scope, $routeParams, clubsFactory) {
        var clubId = $routeParams.clubId;
        $scope.club = null;
        
        function init() {
             clubsFactory.getClub(clubId)
                .then(function(response) {
                    $scope.club = response.data;
                }, function(data, status, headers, config) {
                    //handle error
                });
        }        

        init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };
    
    PlayersController.$inject = ['$scope', '$routeParams', 'clubsFactory'];

    angular.module('clubsApp')
      .controller('PlayersController', PlayersController);
    
}());