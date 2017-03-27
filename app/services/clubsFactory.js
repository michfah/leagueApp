(function() {
    var clubsFactory = function($http) {
    
        var factory = {};
        
        factory.getClubs = function() {
            return $http.get('/clubs');
        };
        
        factory.getClub = function(clubId) {
            return $http.get('/clubs/' + clubId);
        };
        
        factory.getPlayers = function() {
            return $http.get('/players');
        }
        
//        factory.deleteCustomer = function(customerId) {
//            return $http.delete('/clubs/' + customerId);
//        }
        
        return factory;
    };
    
    clubsFactory.$inject = ['$http'];
        
    angular.module('clubsApp').factory('clubsFactory', 
                                           clubsFactory);
                                           
}());