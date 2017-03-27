(function() {
    
    var AllPlayersController = function ($scope, clubsFactory) {
        $scope.players = null;
        $scope.totalType;
        
        function init() {
             clubsFactory.getPlayers()
                .then(function(response) {
                    $scope.players = response.data;
                }, function(data, status, headers, config) {
                    //handle error
                });
        }        
        
        init();
    };
    
    AllPlayersController.$inject = ['$scope', 'clubsFactory'];

    angular.module('clubsApp')
      .controller('AllPlayersController', AllPlayersController);
    
}());
