import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicalComponent } from './components/musical.component';



const routes: Routes = [
  {
    path: '',
    component: MusicalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicalRoutingModule {}
