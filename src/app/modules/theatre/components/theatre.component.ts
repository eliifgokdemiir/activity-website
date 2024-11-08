import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../layout/components/navbar/navbar.component';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { LayoutModule } from '../../layout/layout.module';
import { Theatre } from '../models/theatre';

@Component({
  selector: 'app-theatre',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayoutModule, SidebarComponent, NavbarComponent],
  templateUrl: './theatre.component.html',
})
export class TheatreComponent {
  theatre: Array<Theatre>;
  constructor() {
    this.theatre = [
      {
        id: 34356772,
        title: 'Bir Delinin Hatıra Defteri',
        price: 548.79,
        date: '09.09.2024',
        location: 'Nazım Hikmet Kültür Merkezi',
        time: '21.00',
        image: './assets/images/img-02.jpg',
      },
      {
        id: 34356773,
        title: 'Pinokyo',
        price: 234.88,
        date: '09.09.2024',
        location: 'Cüneyt Gökçer Sahnesi',
        time: '21.00',
        image: './assets/images/img-03.jpg',
      },
    ];
  }
  ngOnInit(): void {}
}
