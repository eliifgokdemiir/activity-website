import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private readonly apiUrl = 'http://localhost:3000/User/Profile';
  private userProfileSubject = new BehaviorSubject<any>(null);

  public userProfile$ = this.userProfileSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.log('Token bulunamadı');
      return;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.get<any>(this.apiUrl, { headers }).pipe(
      tap(response => {
        console.log('API Ham Yanıt:', response); // Tüm yanıtı görelim
        if (response.status && response.data) {
          // API'den gelen veri yapısına göre düzenleyelim
          const profileData = {
            email: response.data.email || response.data.user?.email,
            name: response.data.name || response.data.user?.name,
            avatar: response.data.avatar || response.data.user?.avatar
          };
          console.log('İşlenmiş Profil Verisi:', profileData);
          this.userProfileSubject.next(profileData);
        }
      }),
      catchError(error => {
        console.error('Profil yükleme hatası:', error);
        throw error;
      })
    ).subscribe();
  }

  getUserProfile(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(this.apiUrl, { headers }).pipe(
      tap(response => {
        if (response.status && response.data) {
          this.userProfileSubject.next(response.data);
        }
      })
    );
  }

  getCurrentProfile() {
    return this.userProfileSubject.value;
  }

  // Profil bilgilerini güncelleme metodu (gerekirse)
  refreshProfile(): void {
    this.loadUserProfile();
  }
}
