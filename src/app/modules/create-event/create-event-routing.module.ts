import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './components/create-event.component';
import { CorporateEventComponent } from './components/corporate-event/corporate-event.component';
import { IndividualEventComponent } from './components/individual-event/individual-event.component';

const routes: Routes = [
  {
    path: '',
    component: CreateEventComponent
  },
  {
    path: 'kurumsal',
    component: CorporateEventComponent
  },
  {
    path: 'bireysel',
    component: IndividualEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEventRoutingModule { }
