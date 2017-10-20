import { Component, OnInit } from '@angular/core';

import { LCTable } from './lcTable';
import { HeroService } from './hero.service';

@Component({
  selector: 'lctable',
  templateUrl: './lctable.component.html',
  styleUrls: [ './lctable.component.css' ]
})
export class LCTableComponent implements OnInit {

  table: LCTable[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getLCTable()
      .then(t => {this.table = t; console.log(this.table)});
  }
}
