import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ActivityComponent } from './pages/activity/activity.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'etkinlikler/konser', pathMatch: 'full' },
      {
        path: 'etkinlikler',
        component: ActivityComponent,
        children: [
          { path: ':type', component: ActivityComponent }, // `ActivityComponent` altında `type` alt rotası
        ],
      },
      { path: '**', redirectTo: 'errors/404' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
