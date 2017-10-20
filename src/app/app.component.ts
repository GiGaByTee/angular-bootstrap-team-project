import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Competition } from './competition';
import { Router } from '@angular/router';

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
          <li class="trigger"><a routerLink="/heroes" href="leagues.html">Leagues</a>
          <div class="sub">
             <div class="item" style="cursor:pointer"  *ngFor="let c of com" (click)="goToDetail(c)">{{c.caption}}</div>
          </div>
          </li>
          <li><a href="teams.html">Teams</a></li>
          <li><a routerLink="/lctable" href="players.html">LC</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
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

  ngOnInit(): void {
    this.heroService.getCompetitions()
      .then(c => this.com = c.filter(a => !(a.caption.indexOf("Two") !== -1 || a.caption.indexOf("2 ") !== -1)).slice(1,7));
  }

  goToDetail(competition: Competition): void {
    this.router.navigate(['/detail', competition.id]);
  }
}
