import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../layout/components/navbar/navbar.component';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { LayoutModule } from '../../layout/layout.module';
import { Musical } from '../models/musical';

@Component({
  selector: 'app-musical',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayoutModule, SidebarComponent, NavbarComponent],
  templateUrl: './musical.component.html',
})
export class MusicalComponent {
  musical: Array<Musical>;
  constructor() {
    this.musical = [
      {
        id: 34356772,
        title: 'Afife',
        price: 548.79,
        date: '09.09.2024',
        location: 'Zorlu PSM',
        time: '21.00',
        image: './assets/images/img-02.jpg',
      },
      {
        id: 34356773,
        title: 'Alice',
        price: 234.88,
        date: '09.09.2024',
        location: 'Zorlu PSM',
        time: '21.00',
        image: './assets/images/img-03.jpg',
      },
    ];
  }
  ngOnInit(): void {}
}
