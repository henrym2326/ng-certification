import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamTrackingRoutingModule } from './team-tracking-routing.module';
import { TeamTrackingComponent } from './team-tracking.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { TeamResultsComponent } from './team-results/team-results.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TeamTrackingComponent,
    TeamCardComponent,
    TeamResultsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TeamTrackingRoutingModule
  ]
})
export class TeamTrackingModule { }
