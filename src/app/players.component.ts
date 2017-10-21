import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { TeamInfo } from './teamInfo';
import { Player } from './player';

import { Competition } from './competition';
import { HeroService } from './hero.service';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: [ './players.component.css' ]
})
export class PlayersComponent implements OnInit {
  players: Player[];
  teamInfo: TeamInfo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService) { }

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getTeamInfo(params.get('id')))
    .subscribe(t => {
      this.teamInfo = t
      console.log(this.teamInfo)
    });
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getPlayers(params.get('id')))
    .subscribe(t => {
      this.players = t;
    //   let p:any;
    //  for ( p in this.players){
    //       this.heroService.getPlayerImages(p)
    //  }
      console.log(this.players);
    });
  }  
}

