import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { LeagueDetailComponent }  from './league-detail.component';
import { CompetitionsComponent }      from './competitions.component';
import { LCTableComponent }      from './lctable.component';
import { HeroService }          from './hero.service';

import { ValuesPipe }          from './myPipe';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	  HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LeagueDetailComponent,
    CompetitionsComponent,
    LCTableComponent,
    ValuesPipe
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
