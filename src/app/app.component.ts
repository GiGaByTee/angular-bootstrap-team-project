import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Competition } from './competition';
import { Team } from './team';
import { Router } from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'my-app',
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                       
        </button>
        <span class="navbar-brand">Crazy Fans</span>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li class="active"><a routerLink="/dashboard" href="/dashboard">Home</a></li>
          <li class="trigger"><a>Leagues</a>
          <div class="sub">
             <div class="item" style="cursor:pointer"  *ngFor="let c of com" (click)="goToDetail(c)">{{c.caption}}</div>
             <div class="item show-more"  routerLink="/heroes" style="cursor:pointer" >Show all</div>   
          </div>
          </li>
          <li><a href="teams.html">Teams</a></li>
          <li><a routerLink="/lctable" href="players.html">LC</a></li>
        </ul>
        <ul class="nav navbar-nav">
          <form>
          <input type="text" name="search" placeholder="Search.." #searchBox id="search-box" (keyup)="search(searchBox.value)" [(ngModel)]="searchValue">
        </form>
          <div *ngIf="isVisible">
            <div *ngFor="let team of teamsInfo | async"
                (click)="gotoTeam(team._links.team.href)" class="search-result" >
              {{team.teamName}}
            </div>
          </div>
        </ul>
      </div>
    </div>
  </nav>

  <router-outlet></router-outlet>


  <footer>
  <div class="container">

    <ul class="menu col-sm-4 text-left">
      <li><a href="#">About Crazy Fans</a></li>
      <li><a href="#">Advertise</a></li>
      <li><a href="#">Site map</a></li>
    </ul>

    <ul class="menu col-sm-4 text-left">
      <li><a href="#">Terms &amp; Conditions</a></li>
      <li><a href="#">Privacy Policy</a></li>
    </ul>

    <ul class="menu col-sm-4 text-left">
      <li><a href="#">Cookie Policy</a></li>
      <li><a href="#">Editorial Complaint?</a></li>
    </ul>
  </div>
      
  <div class="container-fluid text-right">
    <p style="margin-top: 2em;">©2017 CrazyFansDremTeam</p>
  </div>
</footer>

  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit{
  constructor(private router: Router, private heroService: HeroService) { }
  title = 'Tour of Heroes';
  com : Competition[];
  teamsInfo: Observable<Team[]>;
  isVisible: boolean = false;
  searchValue:string = null;
  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term);
    this.isVisible = true;
  }

  ngOnInit(): void {
    this.heroService.getCompetitions()
      .then(c => this.com = c.filter(a => !(a.caption.indexOf("Two") !== -1 || a.caption.indexOf("2 ") !== -1)).slice(1,7));
  

      this.teamsInfo = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.heroService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Team[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Team[]>([]);
      });
    }

  goToDetail(competition: Competition): void {
    this.router.navigate(['/detail', competition.id]);
  }

  gotoTeam(teamId: string){
    this.isVisible =false;
    this.searchValue = '';
    this.router.navigate(['/playerDetails', teamId.split('/')[5]]);
  }
}
