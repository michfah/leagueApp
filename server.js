var express = require('express'),
    app = express();

//Express 3
//app.configure(function() {
//    app.use(express.static(__dirname, '/'));
//});

//Express 4
app.use(express.static(__dirname + '/'));

app.get('/clubs/:id', function(req, result) {
    var clubId = parseInt(req.params.id);
    var data = {};
    for (var i=0,len=clubs.length;i<len;i++) {
        if (clubs[i].id === clubId) {
           data = clubs[i];
           break;
        }
    }  
    result.json(data);
});

app.get('/clubs', function(req, result) {
    result.json(clubs);
    //res.json(500, { error: 'An error has occurred!' });
});

app.get('/players', function(req, result) {
    var players = [];
    for (var i=0,len=clubs.length;i<len;i++) {
        if (clubs[i].players) {
            for (var j=0,squadLen=clubs[i].players.length;j<squadLen;j++) {
                players.push(clubs[i].players[j]);   
            }
        }
    }  
    result.json(players);
});

//app.delete('/clubs/:id', function(req, res) {
//    var customerId = parseInt(req.params.id);
//    var data = { status: true };
//    for (var i=0,len=customers.length;i<len;i++) {
//        if (customers[i].id === customerId) {
//           customers.splice(i,1);
//           data = { status: true };
//           break;
//        }
//    }  
//    res.json(data);
//});

app.listen(8080);

console.log('Express listening on port 8080');

        var clubs = [
            {
                id: 1, 
                image: 'images/bohs.jpg',
                founded: '1890', 
                club:'Bohemians', 
                location:'Phibsborough, Dublin 7', 
                stadium: 'Dalymount Park',
                capacity: '8,000',
                manager: 'Keith Long',
                players: [
                    {
                        id: 1,
                        name: 'Shane Supple',
                        position: 'GK'
                    },
                    {
                        id: 2,
                        name: 'Derek Pender',
                        position: 'DF'
                    },
                    {
                        id: 3,
                        name: 'Lorcan Fitzgerald',
                        position: 'DF'
                    },
                    {
                        id: 4,
                        name: 'Stephen Best',
                        position: 'DF'
                    },
                    {
                        id: 5,
                        name: 'Rob Cornwall',
                        position: 'DF'
                    },
                    {
                        id: 6,
                        name: 'Dan Byrne',
                        position: 'DF'
                    },
                    {
                        id: 7,
                        name: 'Eoin Wearen',
                        position: 'MF'
                    },
                    {
                        id: 8,
                        name: 'Phillip Gannon',
                        position: 'MF'
                    },
                    {
                        id: 9,
                        name: 'Dinny Corcoran',
                        position: 'FW'
                    },
                    {
                        id: 10,
                        name: 'Keith Ward',
                        position: 'MF'
                    },
                    {
                        id: 11,
                        name: 'Kaleem Simon',
                        position: 'MF'
                    },
                    {
                        id: 12,
                        name: 'Eoghan Morgan',
                        position: 'MF'
                    },
                    {
                        id: 14,
                        name: 'Paddy Kavanagh',
                        position: 'MF'
                    },
                    {
                        id: 15,
                        name: 'Oscar Brennan',
                        position: 'MF'
                    },
                    {
                        id: 16,
                        name: 'Fuad Sule',
                        position: 'MF'
                    },
                    {
                        id: 17,
                        name: 'Jamie Doyle',
                        position: 'MF'
                    },
                    {
                        id: 18,
                        name: 'Ian Morris',
                        position: 'MF'
                    },
                    {
                        id: 19,
                        name: 'Dean Casey',
                        position: 'MF'
                    },
                    {
                        id: 20,
                        name: 'George Poynton',
                        position: 'MF'
                    },
                    {
                        id: 22,
                        name: 'Dominic Peppard',
                        position: 'MF'
                    },
                    {
                        id: 23,
                        name: 'Cian Clarke',
                        position: 'GK'
                    },
                    {
                        id: 24,
                        name: 'Ismahil Akinade',
                        position: 'FW'
                    },
                    {
                        id: 25,
                        name: 'Greg Murray',
                        position: 'GK'
                    }
                ]
            }, 
            {
                id: 2, 
                image: 'images/bray.jpg',
                founded: '1942', 
                club:'Bray Wanderers', 
                location:'Bray, Co. Wicklow', 
                stadium: 'Carlisle Grounds',
                capacity: '7,000',
                manager: 'Harry Kenny',
                players: [
                   {
                        id: 1,
                        name: 'Peter Cherrie',
                        position: 'GK'
                    },
                    {
                        id: 2,
                        name: 'Hugh Douglas',
                        position: 'DF'
                    },
                    {
                        id: 3,
                        name: 'John Sullivan',
                        position: 'MF'
                    },
                    {
                        id: 4,
                        name: 'Conor Kenna',
                        position: 'DF'
                    },
                    {
                        id: 5,
                        name: 'Derek Foran',
                        position: 'DF'
                    },
                    {
                        id: 6,
                        name: 'Keith Buckley',
                        position: 'MF'
                    },
                    {
                        id: 7,
                        name: 'Ryan Brennan',
                        position: 'MF'
                    },
                    {
                        id: 8,
                        name: 'Mark Salmon',
                        position: 'MF'
                    },
                    {
                        id: 9,
                        name: 'Aaron Greene',
                        position: 'MF'
                    },
                    {
                        id: 10,
                        name: 'Karl Moore',
                        position: 'MF'
                    },
                    {
                        id: 11,
                        name: 'Gary McCabe',
                        position: 'MF'
                    },
                    {
                        id: 12,
                        name: 'Conor Earley',
                        position: 'MF'
                    },
                    {
                        id: 14,
                        name: 'Jamie Aherne',
                        position: 'FW'
                    },
                    {
                        id: 15,
                        name: 'Alan Kehoe',
                        position: 'DF'
                    },
                    {
                        id: 16,
                        name: 'Dylan Connolly',
                        position: 'MF'
                    },
                    {
                        id: 17,
                        name: 'Ger Pender',
                        position: 'FW'
                    },
                    {
                        id: 18,
                        name: 'Calvin Rogers',
                        position: 'DF'
                    },
                    {
                        id: 19,
                        name: 'Kevin Lynch',
                        position: 'MF'
                    },
                    {
                        id: 20,
                        name: 'Anthony Flood',
                        position: 'FW'
                    },
                    {
                        id: 21,
                        name: 'Tim Clancy',
                        position: 'DF'
                    },
                    {
                        id: 22,
                        name: 'Darragh Noone',
                        position: 'MF'
                    },
                    {
                        id: 23,
                        name: 'Jason Marks',
                        position: 'DF'
                    },
                    {
                        id: 24,
                        name: 'Ryan Robinson',
                        position: 'DF'
                    },
                    {
                        id: 93,
                        name: 'Lee Steacy',
                        position: 'GK'
                    }
                ]
            }, 
            {
                id: 3, 
                image: 'images/cork.jpg',
                founded: '1984', 
                club:'Cork City', 
                location:'Cork', 
                stadium: 'Turners Cross',
                capacity: '7,500',
                manager: 'John Caulfield',
                players: [
                    {
                        id: 1,
                        name: 'Mark McNulty',
                        position: 'GK'
                    },
                    {
                        id: 2,
                        name: 'John Kavanagh',
                        position: 'DF'
                    },
                    {
                        id: 3,
                        name: 'Alan Bennett',
                        position: 'DF'
                    },
                    {
                        id: 4,
                        name: 'John Dunleavy',
                        position: 'DF'
                    },
                    {
                        id: 5,
                        name: 'Ryan Delaney',
                        position: 'DF'
                    },
                    {
                        id: 6,
                        name: 'Greg Bolger',
                        position: 'MF'
                    },
                    {
                        id: 7,
                        name: 'Jimmy Keohane',
                        position: 'MF'
                    },
                    {
                        id: 8,
                        name: 'Conor McCormack',
                        position: 'MF'
                    },
                    {
                        id: 9,
                        name: 'Achille Campion',
                        position: 'FW'
                    },
                    {
                        id: 10,
                        name: 'Steven Beattie',
                        position: 'MF'
                    },
                    {
                        id: 11,
                        name: 'Stephen Dooley',
                        position: 'MF'
                    },
                    {
                        id: 14,
                        name: 'Kevin O\'Connor',
                        position: 'MF'
                    },
                    {
                        id: 15,
                        name: 'Christian Nanetti',
                        position: 'MF'
                    },
                    {
                        id: 16,
                        name: 'Gearóid Morrissey',
                        position: 'MF'
                    },
                    {
                        id: 17,
                        name: 'Connor Ellis',
                        position: 'FW'
                    },
                    {
                        id: 17,
                        name: 'Ger Pender',
                        position: 'FW'
                    },
                    {
                        id: 18,
                        name: 'Rimvydas Sadauskas',
                        position: 'DF'
                    },
                    {
                        id: 19,
                        name: 'Karl Sheppard',
                        position: 'FW'
                    },
                    {
                        id: 20,
                        name: 'Shane Griffin',
                        position: 'DF'
                    },
                    {
                        id: 21,
                        name: 'Conor McCarthy',
                        position: 'DF'
                    },
                    {
                        id: 24,
                        name: 'Seán Maguire',
                        position: 'FW'
                    },
                    {
                        id: 25,
                        name: 'Alan Smith',
                        position: 'GK'
                    },
                    {
                        id: 26,
                        name: 'Garry Buckley',
                        position: 'DF'
                    },
                    {
                        id: 30,
                        name: 'Garan Manley',
                        position: 'MF'
                    }
                ]
            }, 
            {
                id: 4, 
                image: 'images/derry.jpg',
                founded: '1928', 
                club:'Derry City', 
                location:'Derry, Northern Ireland', 
                stadium: 'Brandywell Stadium',
                capacity: '7,700',
                manager: 'Kenny Shiels',
                players: [
                    {
                        id: 1,
                        name: 'Gerard Doherty',
                        position: 'GK'
                    },
                    {
                        id: 2,
                        name: 'Conor McDermott',
                        position: 'MF'
                    },
                    {
                        id: 3,
                        name: 'Dean Jarvis',
                        position: 'DF'
                    },
                    {
                        id: 4,
                        name: 'Aaron McEneff',
                        position: 'MF'
                    },
                    {
                        id: 6,
                        name: 'Nicky Low',
                        position: 'MF'
                    },
                    {
                        id: 7,
                        name: 'Barry McNamee',
                        position: 'MF'
                    },
                    {
                        id: 8,
                        name: 'Harry Monaghan',
                        position: 'MF'
                    },
                    {
                        id: 9,
                        name: 'Ronan Curtis',
                        position: 'FW'
                    },
                    {
                        id: 10,
                        name: 'Joshua Daniels',
                        position: 'MF'
                    },
                    {
                        id: 11,
                        name: 'Rory Patterson',
                        position: 'FW'
                    },
                    {
                        id: 13,
                        name: 'Batmunkh Dulguun',
                        position: 'FW'
                    },
                    {
                        id: 14,
                        name: 'Rory Holden',
                        position: 'FW'
                    },
                    {
                        id: 16,
                        name: 'Nathan Boyle',
                        position: 'FW'
                    },
                    {
                        id: 17,
                        name: 'Cathal Farren',
                        position: 'FW'
                    },
                    {
                        id: 19,
                        name: 'Mark Timlin',
                        position: 'MF'
                    },
                    {
                        id: 22,
                        name: 'Sam Todd',
                        position: 'DF'
                    },
                    {
                        id: 23,
                        name: 'Ben Doherty',
                        position: 'DF'
                    },
                    {
                        id: 24,
                        name: 'Scott Whiteside',
                        position: 'DF'
                    },
                    {
                        id: 27,
                        name: 'Alon Netzer',
                        position: 'DF'
                    },
                    {
                        id: 29,
                        name: 'Lukas Schubert',
                        position: 'MF'
                    },
                    {
                        id: 30,
                        name: 'Aaron Barry',
                        position: 'DF'
                    },
                    {
                        id: 31,
                        name: 'Mikhail Kennedy',
                        position: 'FW'
                    }
                ]
            },
            {
                id: 5, 
                image: 'images/drogs.jpg',
                founded: '1919', 
                club:'Drogheda United', 
                location:'Drogheda, Co Louth', 
                stadium: 'United Park',
                capacity: '2,000',
                manager: 'Pete Mahon',
                players: [
                    {
                        id: 1,
                        name: 'Stephen McGuinness',
                        position: 'GK'
                    },
                    {
                        id: 2,
                        name: 'Colm Deasy',
                        position: 'DF'
                    },
                    {
                        id: 3,
                        name: 'Stephen Dunne',
                        position: 'DF'
                    },
                    {
                        id: 4,
                        name: 'Kevin Farragher',
                        position: 'DF'
                    },
                    {
                        id: 5,
                        name: 'Lloyd Buckley',
                        position: 'DF'
                    },
                    {
                        id: 6,
                        name: 'Jake Hyland',
                        position: 'MF'
                    },
                    {
                        id: 7,
                        name: 'Marc Griffin',
                        position: 'FW'
                    },
                    {
                        id: 8,
                        name: 'Killian Brennan',
                        position: 'MF'
                    },
                    {
                        id: 9,
                        name: 'Seán Brennan',
                        position: 'MF'
                    },
                    {
                        id: 10,
                        name: 'Seán Thornton',
                        position: 'MF'
                    },
                    {
                        id: 11,
                        name: 'Gavin Brennan',
                        position: 'MF'
                    },
                    {
                        id: 12,
                        name: 'Luke Gallagher',
                        position: 'MF'
                    },
                    {
                        id: 14,
                        name: 'Adam Wixted',
                        position: 'MF'
                    },
                    {
                        id: 15,
                        name: 'Ciarán McGuigan',
                        position: 'DF'
                    },
                    {
                        id: 16,
                        name: 'Gareth McCaffrey',
                        position: 'MF'
                    },
                    {
                        id: 17,
                        name: 'Thomas Byrne',
                        position: 'FW'
                    },
                    {
                        id: 18,
                        name: 'Conor Kane',
                        position: 'DF'
                    },
                    {
                        id: 19,
                        name: 'Mark Doyle',
                        position: 'FW'
                    },
                    {
                        id: 20,
                        name: 'Eoghan Dempsey',
                        position: 'DF'
                    },
                    {
                        id: 21,
                        name: 'Jamie Hollywood',
                        position: 'MF'
                    },
                    {
                        id: 22,
                        name: 'Stephen Elliott',
                        position: 'FW'
                    },
                    {
                        id: 23,
                        name: 'Dylan Sweeney',
                        position: 'GK'
                    },
                    {
                        id: 24,
                        name: 'Richie Purdy',
                        position: 'MF'
                    },
                    {
                        id: 27,
                        name: 'Ryan McEvoy',
                        position: 'MF'
                    },
                    {
                        id: 28,
                        name: 'Shane Elworthy',
                        position: 'MF'
                    },
                    {
                        id: 32,
                        name: 'Jamie Hickey',
                        position: 'GK'
                    },
                    {
                        id: 33,
                        name: 'Lee Partridge',
                        position: 'FW'
                    },
                    {
                        id: 34,
                        name: 'Nathan Seery',
                        position: 'MF'
                    }
                ]
            },
            {
                id: 6, 
                image: 'images/dundalk.jpg',
                founded: '1903', 
                club:'Dundalk', 
                location:'Dundalk, Co Louth', 
                stadium: 'Oriel Park',
                capacity: '4,500',
                manager: 'Stephen Kenny',
                players: [
                    {
                        id: 1,
                        name: 'Gary Rogers',
                        position: 'GK'
                    },
                    {
                        id: 2,
                        name: 'Sean Gannon',
                        position: 'DF'
                    },
                    {
                        id: 3,
                        name: 'Brian Gartland',
                        position: 'DF'
                    },
                    {
                        id: 4,
                        name: 'Paddy Barrett',
                        position: 'DF'
                    },
                    {
                        id: 5,
                        name: 'Chris Shields',
                        position: 'MF'
                    },
                    {
                        id: 6,
                        name: 'Stephen O\'Donnell',
                        position: 'MF'
                    },
                    {
                        id: 7,
                        name: 'Michael Duffy',
                        position: 'MF'
                    },
                    {
                        id: 8,
                        name: 'John Mountney',
                        position: 'MF'
                    },
                    {
                        id: 9,
                        name: 'David McMillan',
                        position: 'FW'
                    },
                    {
                        id: 10,
                        name: 'Jamie McGrath',
                        position: 'MF'
                    },
                    {
                        id: 11,
                        name: 'Patrick McEleney',
                        position: 'FW'
                    },
                    {
                        id: 12,
                        name: 'Shane Grimes',
                        position: 'DF'
                    },
                    {
                        id: 14,
                        name: 'Dane Massey',
                        position: 'DF'
                    },
                    {
                        id: 15,
                        name: 'Seán Hoare',
                        position: 'DF'
                    },
                    {
                        id: 16,
                        name: 'Ciarán Kilduff',
                        position: 'FW'
                    },
                    {
                        id: 17,
                        name: 'Thomas Byrne',
                        position: 'FW'
                    },
                    {
                        id: 18,
                        name: 'Robbie Benson',
                        position: 'MF'
                    },
                    {
                        id: 19,
                        name: 'Niclas Vemmelund',
                        position: 'DF'
                    },
                    {
                        id: 20,
                        name: 'Eoghan Dempsey',
                        position: 'DF'
                    },
                    {
                        id: 21,
                        name: 'Conor Clifford',
                        position: 'MF'
                    },
                    {
                        id: 22,
                        name: 'Gabriel Sava',
                        position: 'GK'
                    },
                    {
                        id: 23,
                        name: 'Keith Dalton',
                        position: 'MF'
                    },
                    {
                        id: 24,
                        name: 'Steven Kinsella',
                        position: 'MF'
                    },
                    {
                        id: 25,
                        name: 'Carlton Ubaezuono',
                        position: 'MF'
                    },
                    {
                        id: 26,
                        name: 'Thomas Stewart',
                        position: 'FW'
                    },
                    {
                        id: 30,
                        name: 'Ben Kelly',
                        position: 'GK'
                    }
                ]
            },
            {
                id: 7, 
                image: 'images/harps.jpg',
                founded: '1954', 
                club:'Finn Harps', 
                location:'Ballybofey, Co Donegal', 
                stadium: 'Finn Park',
                capacity: '6,000',
                manager: 'Ollie Horgan',
                players: [
                    {
                        id: 1,
                        name: 'Ciarán Gallagher',
                        position: 'GK'
                    },
                    {
                        id: 2,
                        name: 'Damien McNulty',
                        position: 'DF'
                    },
                    {
                        id: 3,
                        name: 'Ciarán Coll',
                        position: 'DF'
                    },
                    {
                        id: 4,
                        name: 'Killian Cantwell',
                        position: 'DF'
                    },
                    {
                        id: 5,
                        name: 'Packie Mailey',
                        position: 'DF'
                    },
                    {
                        id: 6,
                        name: 'Gareth Harkin',
                        position: 'MF'
                    },
                    {
                        id: 7,
                        name: 'Michael Funston',
                        position: 'MF'
                    },
                    {
                        id: 8,
                        name: 'Jonny Bonner',
                        position: 'MF'
                    },
                    {
                        id: 9,
                        name: 'Danny Morrissey',
                        position: 'FW'
                    },
                    {
                        id: 10,
                        name: 'Ciarán O\'Connor',
                        position: 'FW'
                    },
                    {
                        id: 11,
                        name: 'Caolan McAleer',
                        position: 'MF'
                    },
                    {
                        id: 12,
                        name: 'Ciarán Kelly',
                        position: 'DF'
                    },
                    {
                        id: 14,
                        name: 'Thomas McMonagle',
                        position: 'DF'
                    },
                    {
                        id: 16,
                        name: 'Seán Houston',
                        position: 'MF'
                    },
                    {
                        id: 17,
                        name: 'BJ Banda',
                        position: 'FW'
                    },
                    {
                        id: 18,
                        name: 'Kealan McDermott',
                        position: 'MF'
                    },
                    {
                        id: 19,
                        name: 'Barry Molloy',
                        position: 'MF'
                    },
                    {
                        id: 20,
                        name: 'Paddy McCourt',
                        position: 'FW'
                    },
                    {
                        id: 21,
                        name: 'Lee McCarron',
                        position: 'GK'
                    },
                    {
                        id: 22,
                        name: 'Ethan Boyle',
                        position: 'MF'
                    },
                    {
                        id: 23,
                        name: 'Gareth Doherty',
                        position: 'MF'
                    },
                    {
                        id: 25,
                        name: 'Simon McGlynn',
                        position: 'MF'
                    },
                    {
                        id: 26,
                        name: 'Harry Doherty',
                        position: 'GK'
                    },
                    {
                        id: 30,
                        name: 'Dylan McCroary',
                        position: 'FW'
                    },
                    {
                        id: 33,
                        name: 'Nathan Clifford',
                        position: 'MF'
                    },
                    {
                        id: 35,
                        name: 'Oisin Hassett',
                        position: 'MF'
                    },
                    {
                        id: 36,
                        name: 'Shane Blaney',
                        position: 'DF'
                    },
                    {
                        id: 37,
                        name: 'Daire O\'Baoill',
                        position: 'DF'
                    },
                    {
                        id: 99,
                        name: 'Eddie Dsane',
                        position: 'FW'
                    }
                ]
            },
            {
                id: 8, 
                image: 'images/galway.jpg',
                founded: '1937', 
                club:'Galway United', 
                location:'Galway', 
                stadium: 'Eamonn Deacy Park',
                capacity: '5,000',
                manager: 'Shane Keegan',
                players: [
                     {
                        id: 1,
                        name: 'Conor Winn',
                        position: 'GK'
                    },
                    {
                        id: 2,
                        name: 'Colm Horgan',
                        position: 'DF'
                    },
                    {
                        id: 3,
                        name: 'Marc Ludden',
                        position: 'DF'
                    },
                    {
                        id: 4,
                        name: 'Paul Sinnott',
                        position: 'DF'
                    },
                    {
                        id: 5,
                        name: 'Lee Grace',
                        position: 'DF'
                    },
                    {
                        id: 6,
                        name: 'Alex Byrne',
                        position: 'MF'
                    },
                    {
                        id: 7,
                        name: 'Gavan Holohan',
                        position: 'MF'
                    },
                    {
                        id: 8,
                        name: 'David Cawley',
                        position: 'MF'
                    },
                    {
                        id: 9,
                        name: 'Pádraic Cunningham',
                        position: 'FW'
                    },
                    {
                        id: 10,
                        name: 'Vinny Faherty',
                        position: 'FW'
                    },
                    {
                        id: 11,
                        name: 'Conor Melody',
                        position: 'MF'
                    },
                    {
                        id: 12,
                        name: 'Maurice Nugent',
                        position: 'DF'
                    },
                    {
                        id: 13,
                        name: 'Aaron Conway',
                        position: 'DF'
                    },
                    {
                        id: 14,
                        name: 'Kevin Devaney',
                        position: 'MF'
                    },
                    {
                        id: 15,
                        name: 'Robert Spelman',
                        position: 'MF'
                    },
                    {
                        id: 16,
                        name: 'Ciaran Nugent',
                        position: 'GK'
                    },
                    {
                        id: 17,
                        name: 'Gary Shanahan',
                        position: 'MF'
                    },
                    {
                        id: 18,
                        name: 'Jesse Devers',
                        position: 'FW'
                    },
                    {
                        id: 19,
                        name: 'Ronan Murray',
                        position: 'FW'
                    },
                    {
                        id: 20,
                        name: 'Declan Sharkey',
                        position: 'MF'
                    },
                    {
                        id: 21,
                        name: 'Gary Kinneen',
                        position: 'DF'
                    },
                    {
                        id: 57,
                        name: 'Stephen Folan',
                        position: 'DF'
                    }
                ]
            },
            {
                id: 9, 
                image: 'images/limerick.jpg',
                founded: '1937', 
                club:'Limerick', 
                location:'Limerick', 
                stadium: 'Markets Field',
                capacity: '5,000',
                manager: 'Martin Russell',
                players: [
                    {
                        id: 1,
                        name: 'Freddy Hall',
                        position: 'GK'
                    },
                    {
                        id: 2,
                        name: 'Shaun Kelly',
                        position: 'DF'
                    },
                    {
                        id: 3,
                        name: 'Robbie Williams',
                        position: 'DF'
                    },
                    {
                        id: 5,
                        name: 'David O\'Connor',
                        position: 'DF'
                    },
                    {
                        id: 6,
                        name: 'Paul O\'Conor',
                        position: 'MF'
                    },
                    {
                        id: 7,
                        name: 'Lee Lynch',
                        position: 'MF'
                    },
                    {
                        id: 8,
                        name: 'Shane Duggan',
                        position: 'MF'
                    },
                    {
                        id: 9,
                        name: 'John O\'Flynn',
                        position: 'FW'
                    },
                    {
                        id: 10,
                        name: 'Rodrigo Tosi',
                        position: 'FW'
                    },
                    {
                        id: 11,
                        name: 'Shane Tracy',
                        position: 'DF'
                    },
                    {
                        id: 12,
                        name: 'Garbhán Coughlan',
                        position: 'FW'
                    },
                    {
                        id: 14,
                        name: 'Ian Turner',
                        position: 'MF'
                    },
                    {
                        id: 15,
                        name: 'Tony Whitehead',
                        position: 'DF'
                    },
                    {
                        id: 16,
                        name: 'Stephen Kenny',
                        position: 'MF'
                    },
                    {
                        id: 18,
                        name: 'Dean Clarke',
                        position: 'FW'
                    },
                    {
                        id: 19,
                        name: 'Tommy Robson',
                        position: 'DF'
                    },
                    {
                        id: 20,
                        name: 'Chris Mulhall',
                        position: 'MF'
                    },
                    {
                        id: 21,
                        name: 'Chiedoze Ogbene',
                        position: 'MF'
                    },
                    {
                        id: 22,
                        name: 'Clyde O\'Connell',
                        position: 'MF'
                    },
                    {
                        id: 23,
                        name: 'Keith Dalton',
                        position: 'MF'
                    },
                    {
                        id: 26,
                        name: 'Brendan Clarke',
                        position: 'GK'
                    },
                    {
                        id: 28,
                        name: 'Barry Cotter',
                        position: 'DF'
                    },
                    {
                        id: 25,
                        name: 'Alan Murphy',
                        position: 'DF'
                    },
                    {
                        id: 31,
                        name: 'Tobias Kainz',
                        position: 'DF'
                    },
                    {
                        id: 32,
                        name: 'Bastien Héry',
                        position: 'MF'
                    },
                    {
                        id: 33,
                        name: 'Colm Walsh-O\'Loughlin',
                        position: 'MF'
                    },
                    {
                        id: 34,
                        name: 'William Fitzgerald',
                        position: 'MF'
                    }
                ]
            },
            {
                id: 10, 
                image: 'images/stpats.jpg',
                founded: '1929', 
                club:'Saint Patrick\'s Athletic', 
                location:'Inchicore, Dublin 8', 
                stadium: 'Richmond Park',
                capacity: '5,350',
                manager: 'Liam Buckley',
                players: [
                    {
                        id: 1,
                        name: 'Conor O\'Malley',
                        position: 'GK'
                    },
                    {
                        id: 2,
                        name: 'Michael Barker',
                        position: 'DF'
                    },
                    {
                        id: 3,
                        name: 'Ian Bermingham',
                        position: 'DF'
                    },
                    {
                        id: 4,
                        name: 'Gavin Peers',
                        position: 'DF'
                    },
                    {
                        id: 5,
                        name: 'Darren Dennehy',
                        position: 'DF'
                    },
                    {
                        id: 6,
                        name: 'Pat Cregg',
                        position: 'MF'
                    },
                    {
                        id: 7,
                        name: 'Conan Byrne',
                        position: 'MF'
                    },
                    {
                        id: 8,
                        name: 'Graham Kelly',
                        position: 'MF'
                    },
                    {
                        id: 9,
                        name: 'Chris Fagan',
                        position: 'FW'
                    },
                    {
                        id: 10,
                        name: 'Sam Verdon',
                        position: 'FW'
                    },
                    {
                        id: 11,
                        name: 'Jonathan Lunney',
                        position: 'MF'
                    },
                    {
                        id: 12,
                        name: 'Lee Desmond',
                        position: 'DF'
                    },
                    {
                        id: 13,
                        name: 'Rory Feely',
                        position: 'DF'
                    },
                    {
                        id: 14,
                        name: 'Darragh Markey',
                        position: 'MF'
                    },
                    {
                        id: 15,
                        name: 'Jack Bayly',
                        position: 'MF'
                    },
                    {
                        id: 16,
                        name: 'Barry Murphy',
                        position: 'GK'
                    },
                    {
                        id: 17,
                        name: 'Ciaran Kelly',
                        position: 'DF'
                    },
                    {
                        id: 18,
                        name: 'Kurtis Byrne',
                        position: 'FW'
                    },
                    {
                        id: 19,
                        name: 'Steven Grogan',
                        position: 'MF'
                    },
                    {
                        id: 20,
                        name: 'Billy Dennehy',
                        position: 'MF'
                    },
                    {
                        id: 22,
                        name: 'Ger O\'Brien',
                        position: 'DF'
                    },
                    {
                        id: 23,
                        name: 'Alex O\'Hanlon',
                        position: 'MF'
                    },
                    {
                        id: 24,
                        name: 'Aidan Keena',
                        position: 'FW'
                    },
                    {
                        id: 28,
                        name: 'Barry Cotter',
                        position: 'DF'
                    },
                    {
                        id: 25,
                        name: 'Pat Jennings',
                        position: 'GK'
                    },
                    {
                        id: 26,
                        name: 'Josh O\'Hanlon',
                        position: 'FW'
                    }
                ]
            },
            {
                id: 11, 
                image: 'images/rovers.jpg',
                founded: '1899', 
                club:'Shamrock Rovers', 
                location:'Tallaght, Dublin 24', 
                stadium: 'Tallaght Stadium',
                capacity: '6,000',
                manager: 'Stephen Bradley',
                players: [
                    {
                        id: 1,
                        name: 'Tomer Chencinski',
                        position: 'GK'
                    },
                    {
                        id: 2,
                        name: 'Shane Hanney',
                        position: 'MF'
                    },
                    {
                        id: 3,
                        name: 'Luke Byrne',
                        position: 'DF'
                    },
                    {
                        id: 4,
                        name: 'David Webster',
                        position: 'DF'
                    },
                    {
                        id: 6,
                        name: 'Roberto Lopes',
                        position: 'MF'
                    },
                    {
                        id: 7,
                        name: 'Ryan Connolly',
                        position: 'MF'
                    },
                    {
                        id: 8,
                        name: 'Ronan Finn',
                        position: 'MF'
                    },
                    {
                        id: 9,
                        name: 'Michael O\'Connor',
                        position: 'FW'
                    },
                    {
                        id: 10,
                        name: 'Brandon Miele',
                        position: 'MF'
                    },
                    {
                        id: 11,
                        name: 'Darren Meenan',
                        position: 'MF'
                    },
                    {
                        id: 14,
                        name: 'Gary Shaw',
                        position: 'FW'
                    },
                    {
                        id: 15,
                        name: 'Dan Devine',
                        position: 'DF'
                    },
                    {
                        id: 16,
                        name: 'David McAllister',
                        position: 'MF'
                    },
                    {
                        id: 17,
                        name: 'Simon Madden',
                        position: 'DF'
                    },
                    {
                        id: 18,
                        name: 'Paul Corry',
                        position: 'MF'
                    },
                    {
                        id: 19,
                        name: 'Seán Boyd',
                        position: 'FW'
                    },
                    {
                        id: 20,
                        name: 'Trevor Clarke',
                        position: 'MF'
                    },
                    {
                        id: 21,
                        name: 'Aaron Bolger',
                        position: 'MF'
                    },
                    {
                        id: 22,
                        name: 'James Doona',
                        position: 'MF'
                    },
                    {
                        id: 23,
                        name: 'Seán Heaney',
                        position: 'DF'
                    },
                    {
                        id: 24,
                        name: 'Dean Dillon',
                        position: 'MF'
                    },
                    {
                        id: 25,
                        name: 'Kevin Horgan',
                        position: 'GK'
                    },
                    {
                        id: 26,
                        name: 'Aaron Dobbs',
                        position: 'MF'
                    },
                    {
                        id: 27,
                        name: 'Luke Kiely',
                        position: 'MF'
                    },
                    {
                        id: 28,
                        name: 'Graham Burke',
                        position: 'FW'
                    },
                    {
                        id: 29,
                        name: 'Sam Bone',
                        position: 'MF'
                    }
                ]
            },
            {
                id: 12, 
                image: 'images/sligo.jpg',
                founded: '1928', 
                club:'Sligo Rovers', 
                location:'Sligo', 
                stadium: 'The Showgrounds',
                capacity: '4,500',
                manager: 'Dave Robertson',
                players: [
                    {
                        id: 1,
                        name: 'Micheál Schlingermann',
                        position: 'GK'
                    },
                    {
                        id: 2,
                        name: 'Tobi Adebayo-Rowling',
                        position: 'DF'
                    },
                    {
                        id: 3,
                        name: 'Regan Donelon',
                        position: 'DF'
                    },
                    {
                        id: 4,
                        name: 'Mick Leahy',
                        position: 'DF'
                    },
                    {
                        id: 5,
                        name: 'Kyle Callan-McFadden',
                        position: 'DF'
                    },
                    {
                        id: 6,
                        name: 'Pat McCann',
                        position: 'MF'
                    },
                    {
                        id: 7,
                        name: 'Daniel Kearns',
                        position: 'MF'
                    },
                    {
                        id: 8,
                        name: 'Craig Roddan',
                        position: 'MF'
                    },
                    {
                        id: 9,
                        name: 'Mathew Stevens',
                        position: 'FW'
                    },
                    {
                        id: 10,
                        name: 'Raffaele Cretaro',
                        position: 'FW'
                    },
                    {
                        id: 11,
                        name: 'Kieran Sadlier',
                        position: 'MF'
                    },
                    {
                        id: 12,
                        name: 'Chris Kenny',
                        position: 'MF'
                    },
                    {
                        id: 14,
                        name: 'Gary Boylan',
                        position: 'DF'
                    },
                    {
                        id: 16,
                        name: 'Shaun Patton',
                        position: 'GK'
                    },
                    {
                        id: 18,
                        name: 'John Russell',
                        position: 'MF'
                    },
                    {
                        id: 19,
                        name: 'Jonah Ayunga',
                        position: 'FW'
                    },
                    {
                        id: 20,
                        name: 'Gary Armstrong',
                        position: 'MF'
                    },
                    {
                        id: 23,
                        name: 'Jason Hunt',
                        position: 'DF'
                    },
                    {
                        id: 24,
                        name: 'Mickey Place',
                        position: 'MF'
                    },
                    {
                        id: 25,
                        name: 'Oisín Connolly',
                        position: 'DF'
                    },
                    {
                        id: 26,
                        name: 'Ryan McManus',
                        position: 'MF'
                    },
                    {
                        id: 27,
                        name: 'Liam Martin',
                        position: 'FW'
                    },
                    {
                        id: 28,
                        name: 'Mark Hannon',
                        position: 'MF'
                    },
                    {
                        id: 30,
                        name: 'Edward McGinty',
                        position: 'GK'
                    }
                ]
            }
        ];
