import { Team, Game } from '../src/app/data.types';

export const SACRAMENTO = {
    id: 1,
    conference: 'West',
    division: 'Pacific',
    city: 'Sacramento',
    name: 'Kings',
    full_name: 'Sacramento Kings',
    abbreviation: 'SAC'    
};
export const ATLANTA = {
    id: 2,
    conference: 'East',
    division: 'Southeast',
    city: 'Atlanta',
    name: 'Hawks',
    full_name: 'Atlanta Hawks',
    abbreviation: 'ATL'    
};
export const PHILADELPHIA = {
    id: 3,
    conference: 'East',
    division: 'Atlantic',
    city: 'Philadelphia',
    name: '76ers',
    full_name: 'Philadelphia 76ers',
    abbreviation: 'PHI'    
};
export const ALL_TEAMS: Team[] = [
    ATLANTA,
    {
        id: 4,
        conference: 'East',
        division: 'Central',
        city: 'Chicago',
        name: 'Bulls',
        full_name: 'Chicago Bulls',
        abbreviation: 'CHI'    
    },
    {
        id: 11,
        conference: 'West',
        division: 'Northwest',
        city: 'Minnesota',
        name: 'Timberwolves',
        full_name: 'Minnesota Timberwolves',
        abbreviation: 'MIN'    
    },
    PHILADELPHIA,
    {
        id: 13,
        conference: 'West',
        division: 'Northwest',
        city: 'Oklahoma City',
        name: 'Thunder',
        full_name: 'Oklahoma City Thunder',
        abbreviation: 'OKC'    
    },
    {
        id: 14,
        conference: 'West',
        division: 'Northwest',
        city: 'Portland',
        name: 'Trail Blazers',
        full_name: 'Portland Trail Blazers',
        abbreviation: 'POR'    
    },
    SACRAMENTO,
    {
        id: 18,
        conference: 'East',
        division: 'Central',
        city: 'Cleveland',
        name: 'Cavaliers',
        full_name: 'Cleveland Cavaliers',
        abbreviation: 'CLE'    
    },
    {
        id: 19,
        conference: 'East',
        division: 'Central',
        city: 'Detroit',
        name: 'Pistons',
        full_name: 'Detroit Pistons',
        abbreviation: 'DET'    
    }
]

export const ALL_SCORES: Record<number, Game[]> = {
    26: [
        {
            "id": 1,
            'date': '2019-10-23',
            'season': 2019,
            'status': 'Final',
            'period': 4,
            'time': ' ',
            'postseason': false,
            'home_team_score': 130,
            'visitor_team_score': 122,
            'home_team': {
                'abbreviation': 'TOR',
                'city': 'Toronto',
                'conference': 'East',
                'division': 'Atlantic',
                'full_name': 'Toronto Raptors',
                'id': 15,
                'name': 'Raptors'
            },
            'visitor_team': {
                'abbreviation': 'NOP',
                'city': 'New Orleans',
                'conference': 'West',
                'division': 'Southwest',
                'full_name': 'New Orleans Pelicans',
                'id': 27,
                'name': 'Pelicans'
            }            
        },
        {
            "id": 2,
            'date': '2019-10-23',
            'season': 2019,
            'status': 'Final',
            'period': 4,
            'time': ' ',
            'postseason': false,
            'home_team_score': 85,
            'visitor_team_score': 120,
            'home_team': {
                'abbreviation': 'LAC',
                'city': 'Los Angeles',
                'conference': 'West',
                'division': 'Pacific',
                'full_name': 'Los Angeles Clippers',
                'id': 8,
                'name': 'Clippers'
            },
            'visitor_team': {
                'abbreviation': 'LAL',
                'city': 'Los Angeles',
                'conference': 'West',
                'division': 'Pacific',
                'full_name': 'Los Angeles Lakers',
                'id': 9,
                'name': 'Lakers'
            }            
        }
    ],
    1: [
        {
            "id": 3,
            'date': '2019-10-25',
            'season': 2019,
            'status': 'Final',
            'period': 4,
            'time': ' ',
            'postseason': false,
            'home_team_score': 102,
            'visitor_team_score': 105,
            'home_team': {
                'abbreviation': 'DET',
                'city': 'Detroit',
                'conference': 'East',
                'division': 'Central',
                'full_name': 'Detroit Pistons',
                'id': 19,
                'name': 'Pistons'
            },
            'visitor_team': {
                'abbreviation': 'ATL',
                'city': 'Atlanta',
                'conference': 'East',
                'division': 'Southeast',
                'full_name': 'Atlanta Hawks',
                'id': 2,
                'name': 'Hawks'
            }
        },
        {
            "id": 4,
            'date': '2019-10-25',
            'season': 2019,
            'status': 'Final',
            'period': 4,
            'time': ' ',
            'postseason': false,
            'home_team_score': 102,
            'visitor_team_score': 112,
            'home_team': {
                'abbreviation': 'SAC',
                'city': 'Sacramento',
                'conference': 'West',
                'division': 'Pacific',
                'full_name': 'Sacramento Kings',
                'id': 1,
                'name': 'Kings'
            },
            'visitor_team': {
                'abbreviation': 'POR',
                'city': 'Portland',
                'conference': 'West',
                'division': 'Northwest',
                'full_name': 'Portland Trail Blazers',
                'id': 14,
                'name': 'Trail Blazers'
            }
        }
    ],
    4: [
        {
            "id": 5,
            'date': '2019-10-27',
            'season': 2019,
            'status': 'Final',
            'period': 4,
            'time': ' ',
            'postseason': false,
            'home_team_score': 110,
            'visitor_team_score': 113,
            'home_team': {
                'abbreviation': 'CHI',
                'city': 'Chicago',
                'conference': 'East',
                'division': 'Central',
                'full_name': 'Chicago Bulls',
                'id': 4,
                'name': 'Bulls'
            },
            'visitor_team': {
                'abbreviation': 'TOR',
                'city': 'Toronto',
                'conference': 'East',
                'division': 'Atlantic',
                'full_name': 'Toronto Raptors',
                'id': 15,
                'name': 'Raptors'
            }
        },
        {
            "id": 6,
            'date': '2019-10-27',
            'season': 2019,
            'status': 'Final',
            'period': 4,
            'time': ' ',
            'postseason': false,
            'home_team_score': 112,
            'visitor_team_score': 120,
            'home_team': {
                'abbreviation': 'SAC',
                'city': 'Sacramento',
                'conference': 'West',
                'division': 'Pacific',
                'full_name': 'Sacramento Kings',
                'id': 1,
                'name': 'Kings'
            },
            'visitor_team': {
                'abbreviation': 'UTA',
                'city': 'Utah',
                'conference': 'West',
                'division': 'Northwest',
                'full_name': 'Utah Jazz',
                'id': 28,
                'name': 'Jazz'
            }
        }
    ]
}