import { Hero } from './hero';
import {Competition} from './competition'
import {LCTable} from './lcTable'
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
    // let compt: Competition[] = [];
       return this.http.get("http://api.football-data.org/v1/competitions/"+ id+ "/teams", {headers: this.headers})
          .toPromise() 
          .then(res => res.json() as Team[]);        
  }

  getLCTable() : Promise<LCTable[]> {
    // let compt: Competition[] = [];
       return this.http.get("http://api.football-data.org/v1/competitions/464/leagueTable", {headers: this.headers})
          .toPromise() 
          .then(res => {
          
            console.log(res.json().standings as LCTable[])
          return res.json().standings as LCTable[];
          });        
  }
}
