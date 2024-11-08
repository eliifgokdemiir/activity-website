import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandupComponent } from './components/standup.component';

const routes: Routes = [
  {
    path: '',
    component: StandupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandupRoutingModule {}
