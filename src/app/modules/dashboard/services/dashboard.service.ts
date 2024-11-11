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
      date: '2024-09-09', // Use ISO format for easier sorting
      location: 'ODTÜ Vişnelik',
      time: '21.00',
      image: './assets/images/img-01.jpg',
      avatar: './assets/avatars/avt-01.jpg',
    },
    {
      id: 34356772,
      title: 'Happy Halloween',
      price: 548.79,
      date: '2024-10-31',
      location: 'Jolly Joker',
      time: '21.00',
      image: './assets/images/img-02.jpg',
    },
    {
      id: 34356773,
      title: 'Perdenin Ardındakiler',
      price: 234.88,
      date: '2024-11-15',
      location: '6:45',
      time: '21.00',
      image: './assets/images/img-03.jpg',
    },
  ];

  getActivities(city?: string, type?: string): Observable<Activity[]> {
    let filteredActivities = this.activities;

    // Filter by city if specified
    if (city) {
      filteredActivities = filteredActivities.filter(activity => activity.location === city);
    }

    // Filter by type if specified (e.g., "Konser" or "Stand Up")
    if (type) {
      filteredActivities = filteredActivities.filter(activity => activity.title.toLowerCase().includes(type.toLowerCase()));
    }

    // Sort activities by date (nearest to farthest)
    filteredActivities = filteredActivities.sort((a, b) =>
      new Date(a.date!).getTime() - new Date(b.date!).getTime()
    );

    return of(filteredActivities);
  }
}
