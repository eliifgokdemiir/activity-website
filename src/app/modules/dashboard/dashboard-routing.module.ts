import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { EventListComponent } from './pages/activity/event-list/event-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'etkinlikler', pathMatch: 'full' },
      { path: 'etkinlikler', component: ActivityComponent },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
  { path: 'etkinlikler/:category', component: EventListComponent },
  { path: '', redirectTo: '/etkinlikler/konser', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
