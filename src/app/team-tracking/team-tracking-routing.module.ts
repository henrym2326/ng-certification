import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamTrackingComponent} from './team-tracking.component';
import {TeamResultsComponent} from './team-results/team-results.component';

const routes: Routes =  [
  { path: '', component: TeamTrackingComponent },
  { path: 'results/:teamCode', component: TeamResultsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamTrackingRoutingModule { }
