import {Goals} from './goals'

export class Team {
    constructor(public position: string,
    public teamName: string,
  public crestURI: string,
  public playedGames: string,
  public points: string,
  public goals: string,
  public goalsAgainst: string,
  public goalDifference: string,
  public wins: string,
  public draws: string,
  public losses: string,
public home: Goals,
public away: Goals)
  {
  }
  }