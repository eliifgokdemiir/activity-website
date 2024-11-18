import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventRoutingModule } from './create-event-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    CreateEventRoutingModule,
    RouterModule,
    LayoutModule
  ]
})
export class CreateEventModule {}
