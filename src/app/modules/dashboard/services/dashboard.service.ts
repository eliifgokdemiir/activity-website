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
      type: 'konser', 
      creator: 'Tarkan',
      instant_price: 187.47,
      price: 187.47,
      date: '2024-09-09',
      location: 'ODTÜ Vişnelik',
      time: '21.00',
      image: './assets/images/img-01.jpg',
      avatar: './assets/avatars/avt-01.jpg',
    },
    {
      id: 34356772,
      title: 'Happy Halloween',
      type: 'festival', 
      price: 548.79,
      date: '2024-10-31',
      location: 'Jolly Joker',
      time: '21.00',
      image: './assets/images/img-02.jpg',
    },
    {
      id: 34356773,
      title: 'Perdenin Ardındakiler',
      type: 'konser', 
      price: 234.88,
      date: '2024-11-15',
      location: '6:45',
      time: '21.00',
      image: './assets/images/img-03.jpg',
    },
    {
      id: 34356774,
      title: 'Çocuk Tiyatrosu',
      type: 'tiyatro', 
      price: 150.00,
      date: '2024-12-01',
      location: 'Devlet Tiyatrosu',
      time: '19.00',
      image: './assets/images/img-03.jpg',
    },
    {
      id: 34356775,
      title: 'Müzikal Gece',
      type: 'muzikal', 
      price: 300.00,
      date: '2024-11-10',
      location: 'Sahne Gösteri Merkezi',
      time: '20.00',
      image: './assets/images/img-03.jpg',
    },
    {
      id: 34356776,
      title: 'Stand-Up Gecesi',
      type: 'standup', 
      price: 200.00,
      date: '2024-11-20',
      location: 'Kültür Merkezi',
      time: '20.30',
      image: './assets/images/img-03.jpg',
    },
    {
      id: 34356777,
      title: 'Dedublüman',
      type: 'konser', 
      creator: 'Tarkan',
      instant_price: 187.47,
      price: 187.47,
      date: '2024-09-09',
      location: 'ODTÜ Vişnelik',
      time: '21.00',
      image: './assets/images/img-01.jpg',
      avatar: './assets/avatars/avt-01.jpg',
    },

  ];

  getAllActivities(): Observable<Activity[]> {
    return of(this.activities);
  }

  getActivities(city?: string, type?: string): Observable<Activity[]> {
    let filteredActivities = this.activities;

    if (city) {
      filteredActivities = filteredActivities.filter(activity => activity.location === city);
    }

    if (type) {
      filteredActivities = filteredActivities.filter(activity => activity.type === type);
    }

    console.log('Filtered Activities:', filteredActivities); 

    return of(filteredActivities);
  }
}
