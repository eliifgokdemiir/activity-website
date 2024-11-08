import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatreComponent } from './components/theatre.component';



const routes: Routes = [
  {
    path: '',
    component: TheatreComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheatreRoutingModule {}
