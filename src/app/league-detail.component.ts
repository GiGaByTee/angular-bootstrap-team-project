import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }         from './hero';

import { Team }         from './team';
import { HeroService }  from './hero.service';
@Component({
  selector: 'hero-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: [ './league-detail.component.css' ]
})
export class LeagueDetailComponent implements OnInit {
  hero: Hero;
  teams: Team[];

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getTeam(params.get('id')))
      .subscribe(t => {this.teams = t;
      console.log(this.teams)});
  }

  goBack(): void {
    this.location.back();
  }
}
