import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
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
      creator: 'Tarkan',
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
      creator: 'Tarkan',
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
      creator: 'Tarkan',
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
      creator: 'Tarkan',
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
      creator: 'Tarkan',
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

    return of(filteredActivities);
  }

  getActivityById(id: string): Observable<Activity> {
    const mockActivity: Activity = {
      id: parseInt(id),
      title: 'TARKAN KONSERİ',
      type: 'konser',
      price: 187.47,
      creator: 'Tarkan',
      creatorDescription: 'Türk pop müziğinin megastarı Tarkan, en sevilen şarkılarıyla muhteşem bir konser deneyimi sunuyor.',
      date: '2024-09-09',
      time: '21:00',
      location: 'ODTÜ Vişnelik',
      image: './assets/images/img-01.jpg',
      avatar: './assets/avatars/avt-01.jpg',
      seatingType: 'numbered',
      ticketTypes: [
        { type: 'VIP', price: 400, available: true },
        { type: 'Sahne Önü', price: 300, available: true },
        { type: 'Tam', price: 187.47, available: true },
        { type: 'Öğrenci', price: 150, available: false }
      ],
      rules: [
        '18 yaş sınırı vardır.',
        'Etkinlik alanına yiyecek ve içecek sokmak yasaktır.',
        'Fotoğraf makinesi ve video kayıt cihazları kullanılamaz.',
        'Kapı açılış saati: 19:00',
        'Bilet iade ve değişimi yapılmamaktadır.',
        'Organizatör firma etkinlikte değişiklik yapma hakkını saklı tutar.'
      ]
    };
  
    return of(mockActivity).pipe(delay(500));
  }
}
