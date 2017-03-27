(function() {
    var clubsService = function() {
        var clubs = [
            {
                id: 1, 
                founded: '1890', 
                club:'Bohemians', 
                location:'Dublin', 
                stadium: 'Dalymount Park',
                players: [
                    {
                        id: 1,
                        name: 'Shoes',
                        position: 'GK'
                    }
                ]
            }, 
            {
                id: 2, 
                founded: '1890', 
                club:'Bohemians', 
                location:'Dublin', 
                stadium: 'Dalymount Park',
                players: [
                    {
                        id: 1,
                        name: 'Shoes',
                        position: 'GK'
                    }
                ]
            }, 
            {
                id: 3, 
                founded: '1890', 
                club:'Bohemians', 
                location:'Dublin', 
                stadium: 'Dalymount Park',
                players: [
                    {
                        id: 1,
                        name: 'Shoes',
                        position: 'GK'
                    }
                ]
            }, 
            {
                id: 4, 
                founded: '1890', 
                club:'Bohemians', 
                location:'Dublin', 
                stadium: 'Dalymount Park',
                players: [
                    {
                        id: 1,
                        name: 'Shoes',
                        position: 'GK'
                    }
                ]
            }
        ];
        
        this.getClubs = function() {
            return clubs;
        };
        
        this.getClub = function(clubId) {
            for (var i=0,len=clubs.length;i<len;i++) {
               if (clubs[i].id === parseInt(clubId)) {
                   return clubs[i];
               }
            }
            return {};
        };

    };
    
    angular.module('clubsApp').service('clubsService', clubsService);
                                           
}());