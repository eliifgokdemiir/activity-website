import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { TicketDetailComponent } from './pages/ticket-detail/ticket-detail.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: ActivityComponent
      },
      {
        path: ':type',
        component: ActivityComponent
      },
      {
        path: 'etkinlik/:id',
        component: TicketDetailComponent
      }
  
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
