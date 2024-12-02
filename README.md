We want to display baseball team results for three different teams, the goal is to diaply information about the last 4 games (win or loss - W or L), including some statistics such as average points scored and average points conceded.

Requirements:

- the user must be able to select one of the three teams by clicking on the provided buttons.
- when a team is selected, its name, abbriviation, conference, result of the last 5 games, average points scored and conceded, as well as team logo must be displayed.
- Use the pre-generated 'team-stats.component.ts' to display team statistics. This component must receive its data using inputs: One called 'team' for the team info, one called 'stats' for the statistics data.
- You can access all the information needed using the provided 'nba.service'. Do not change this file , everything you need is in that service. Data types are also available in 'typed/data.types.ts'.
- the logo url follows the format: 'https://interstate21.com/nba.logos/{{abbreviation}}.png'
- Styles are provided for Win or Loss w or L with green or Red background.
- how to apply dynamic styles to an element with angular.