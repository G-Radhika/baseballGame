import { Injectable, signal } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { Team, Game, Stats } from './data.types';
import { SACRAMENTO, ATLANTA, PHILADELPHIA, ALL_SCORES } from '../mockData';

@Injectable({
  providedIn: 'root',
})
export class NbaService {
  currentTeam = signal<Team | any>('');

  getAllTeams(): Observable<Team[]> {
    return of([SACRAMENTO, ATLANTA, PHILADELPHIA]);
  }

  getTeamResults(teamId: string | number): Observable<Game[]> {
    return of(ALL_SCORES[+teamId]);
  }
  getStatsFromGames(team: Team): Observable<Stats> {
    return this.getTeamResults(team.id).pipe(
      switchMap((games) => of(this.getAllGameStats(team, games)))
    );
  }

  private getAllGameStats(team: Team, games: Game[]): Stats {
    const stats: Stats = {
      wins: 0,
      losses: 0,
      averagePointsScored: 0,
      averagePointsConceded: 0,
      lastGames: [],
    };
    games.forEach((game) => {
      const gameStats = this.getSingleGameStats(team, game);
      stats.wins += gameStats.wins;
      stats.losses += gameStats.losses;
      stats.averagePointsScored += gameStats.averagePointsScored;
      stats.averagePointsConceded += gameStats.averagePointsConceded;
      stats.lastGames.push(gameStats.wins == 1 ? 'W' : 'L');
    });
    stats.averagePointsScored = Math.round(
      stats.averagePointsScored / games.length
    );
    stats.averagePointsConceded = Math.round(
      stats.averagePointsConceded / games.length
    );
    return stats;
  }
  private getSingleGameStats(team: Team, game: Game): Stats {
    const stats: Stats = {
      wins: 0,
      losses: 0,
      averagePointsScored: 0,
      averagePointsConceded: 0,
      lastGames: [],
    };
    if (game.home_team.id === team.id) {
      stats.averagePointsScored = game.home_team_score;
      stats.averagePointsConceded = game.visitor_team_score;
      if (game.home_team_score > game.visitor_team_score) {
        stats.wins += 1;
      } else {
        stats.losses += 1;
      }
    }
    if (game.visitor_team.id === team.id) {
      stats.averagePointsScored = game.visitor_team_score;
      stats.averagePointsConceded = game.home_team_score;
      if (game.visitor_team_score > game.home_team_score) {
        stats.wins = 1;
      } else {
        stats.losses = 1;
      }
    }
    return stats;
  }
}
