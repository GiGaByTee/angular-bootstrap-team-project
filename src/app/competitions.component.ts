import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';

import { Competition } from './competition';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './competitions.component.html',
  styleUrls: [ './competitions.component.css' ]
})
export class CompetitionsComponent implements OnInit {
  heroes: Hero[];
  competitions: Competition[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
    this.heroService.getCompetitions().then(c => {
      this.competitions = c;
      console.log("Compt="+ this.competitions)});
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
