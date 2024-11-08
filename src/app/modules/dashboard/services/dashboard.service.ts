
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private activities: Activity[] = [
    {
      id: 34356771,
      title: 'TARKAN KONSERİ',
      creator: 'Tarkan',
      instant_price: 187.47,
      price: 187.47,
      date: '09.09.2024',
      location: 'ODTÜ Vişnelik',
      time: '21.00',
      image: './assets/images/img-01.jpg',
      avatar: './assets/avatars/avt-01.jpg',
    },
    {
      id: 34356772,
      title: 'Happy Halloween',
      price: 548.79,
      date: '09.09.2024',
      location: 'Jolly Joker',
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

  getActivities(city?: string, type?: string): Observable<Activity[]> {
    let filteredActivities = this.activities;

    if (city) {
      filteredActivities = filteredActivities.filter(activity => activity.location === city);
    }

    // Filtrelemek istediğiniz etkinlik türüne göre ek filtreleme ekleyebilirsiniz.
    if (type) {
      filteredActivities = filteredActivities.filter(activity => activity.title.includes(type));
    }

    return of(filteredActivities);
  }
}
