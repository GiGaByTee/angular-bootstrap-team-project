import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { CompetitionsComponent }      from './competitions.component';
import { LeagueDetailComponent }  from './league-detail.component';
import {LCTableComponent }  from './lctable.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: LeagueDetailComponent },
  { path: 'heroes',     component: CompetitionsComponent },
  { path: 'lctable',     component: LCTableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
