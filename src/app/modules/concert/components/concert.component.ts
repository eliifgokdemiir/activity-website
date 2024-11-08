import { Component, Input } from '@angular/core';
import { Concerts } from '../models/concerts';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../layout/components/navbar/navbar.component';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { LayoutModule } from '../../layout/layout.module';

@Component({
  selector: 'app-concert',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayoutModule, SidebarComponent, NavbarComponent],
  templateUrl: './concert.component.html',
})
export class ConcertComponent {
  concerts: Array<Concerts>;
  constructor() {
    this.concerts = [
      {
        id: 34356772,
        title: 'Tarkan Konseri',
        price: 548.79,
        date: '09.09.2024',
        location: 'Odtü Vişnelik',
        time: '21.00',
        image: './assets/images/img-02.jpg',
      },
      {
        id: 34356773,
        title: 'Perdenin Ardındakiler',
        price: 234.88,
        date: '09.09.2024',
        location: '6:45',
        time: '21.00',
        image: './assets/images/img-03.jpg',
      },
    ];
  }
  ngOnInit(): void {}
}
