import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { SignInRequestModel } from '@auth/models/sign-in-request.model';
import { SignInResponseModel } from '@auth/models/sign-in-response.model';
import { SignUpRequestModel } from '@auth/models/sign-up-request.model';
import { SignUpResponseModel } from '@auth/models/sign-up-response.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:3000/Auth';
  private readonly TOKEN_KEY = 'authToken';
  private readonly USER_DATA_KEY = 'userData';
  
  // Kullanıcının oturum durumunu takip etmek için
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasValidToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(credentials: SignInRequestModel): Observable<SignInResponseModel> {
    return this.http.post<SignInResponseModel>(`${this.apiUrl}/Login`, credentials).pipe(
      tap(response => {
        if (response.status && response.data.access_token) {
          // Token'ı kaydet
          this.setToken(response.data.access_token);
          
          // Kullanıcı bilgilerini kaydet
          if (response.data.user) {
            this.setUserData({
              username: response.data.user.username,
              roles: response.data.user.roles
            });
          }
          
          this.isAuthenticatedSubject.next(true);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_DATA_KEY);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/auth/sign-in']);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  register(data: SignUpRequestModel): Observable<SignUpResponseModel> {
    return this.http.post<SignUpResponseModel>(`${this.apiUrl}/Register`, data);
  }

  private setUserData(data: { username?: string; roles?: string[] }): void {
    if (data) {
      localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(data));
    }
  }

  getUserData(): { username?: string; roles?: string[] } | null {
    const data = localStorage.getItem(this.USER_DATA_KEY);
    return data ? JSON.parse(data) : null;
  }

  private hasValidToken(): boolean {
    return !!this.getToken();
  }

  isLoggedIn(): boolean {
    return this.hasValidToken();
  }

  getUserProfile() {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get<any>(`${this.apiUrl}/Profile`, { headers });
  }
}