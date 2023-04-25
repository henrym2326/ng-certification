import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'team-tracking',
    loadChildren: () => import('./team-tracking/team-tracking.module').then(m => m.TeamTrackingModule)
  },
  {
    path: '**',
    redirectTo: 'team-tracking',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
