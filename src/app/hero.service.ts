import { Hero } from './hero';
import {Competition} from './competition'
import {LCTable} from './lcTable'
import * as gg from './globals'
import {Player} from './player'
import {TeamInfo} from './teamInfo'
import {Team} from './team'
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule, Http, Response,Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HeroService {
   coms: Competition[]=[];
   private headers = new Headers({'X-Auth-Token': "96704b288d4843f785e4ed7db7f210fe"});
constructor(private http: Http){
}
	
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
  
  getCompetitions() : Promise<Competition[]> {
    // let compt: Competition[] = [];
       return this.http.get("http://api.football-data.org/v1/competitions/?season=2017", {headers: this.headers})
          .toPromise() 
          .then(res => res.json() as Competition[]);        
  }

  getTeam(id: string) : Promise<Team[]> {
       return this.http.get("http://api.football-data.org/v1/competitions/"+ id+ "/leagueTable", {headers: this.headers})
          .toPromise() 
          .then(res => res.json() as Team[]);        
  }

  getLCTable() : Promise<LCTable[]> {
       return this.http.get("http://api.football-data.org/v1/competitions/464/leagueTable", {headers: this.headers})
          .toPromise() 
          .then(res => {
          
            console.log(res.json().standings as LCTable[])
          return res.json().standings as LCTable[];
          });        
  }

  getTeamInfo(id: string) : Promise<TeamInfo> {
       return this.http.get("http://api.football-data.org/v1/teams/"+ id, {headers: this.headers})
          .toPromise() 
          .then(res => res.json() as TeamInfo);        
  }

  getPlayers(id: string) : Promise<Player[]> {
       return this.http.get("http://api.football-data.org/v1/teams/"+ id+ "/players", {headers: this.headers})
          .toPromise() 
          .then(res => {
           let players =  res.json() as Player[];
           for(var i=0; i< players.players.length; i++){
              this.setNationalityImg(players.players[i]);
           }
           return players;
          });        
  }

  setNationalityImg(player: Player): Player{
    let p: string =gg.listOfTeam[player.nationality];
    console.log(player.nationality);
    player.nationalityUrl = p.toLowerCase();
    console.log(player);
    return player;
  }

  // getPlayerImages(player: Player) : Promise<Player> {
  //   return this.http.get("https://api.qwant.com/api/search/images?count=1&offset=1&q="+ player.nationality+ "%flag%picture",  {headers: this.headers})
  //      .toPromise() 
  //      .then(res => {
  //        player.nationalityUrl = res.json().data.result.items[0].media;

  //        return player;
  //      });        
}
