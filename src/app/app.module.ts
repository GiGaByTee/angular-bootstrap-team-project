import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { LeagueDetailComponent }  from './league-detail.component';
import { CompetitionsComponent }      from './competitions.component';
import { LCTableComponent }      from './lctable.component';
import { PlayersComponent }      from './players.component';
import { HeroService }          from './hero.service';

import { ValuesPipe }          from './myPipe';
import {SortByPipe} from './sortByPipe'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule }     from './app-routing.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	  HttpModule,
    AppRoutingModule,
    ModalModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LeagueDetailComponent,
    CompetitionsComponent,
    LCTableComponent,
    ValuesPipe,
    SortByPipe,
    PlayersComponent,
  ],
  providers: [ HeroService  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
