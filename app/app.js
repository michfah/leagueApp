(function() {
    
    var app = angular.module('clubsApp', ['ngRoute', 'ngAnimate']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'ClubsController',
                templateUrl: 'app/views/clubs.html'
            })
            .when('/players/:clubId', {
                controller: 'PlayersController',
                templateUrl: 'app/views/players.html'
            })
            .when('/players', {
                controller: 'AllPlayersController',
                templateUrl: 'app/views/allplayers.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
    
}());
