import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// API'den dönen kullanıcı bilgileri
export interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
    // API'den dönen diğer bilgiler
  };
}

// Giriş için kullanılacak DTO
export interface LoginDTO {
  email: string;
  password: string;
}

// Kayıt için kullanılacak DTO
export interface RegisterDTO {
  email: string;
  password: string;
  name: string;
  // Ekstra kayıt alanları varsa buraya ekleyebilirsiniz
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:3000/api#/Auth'; 
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Sayfa yenilendiğinde kullanıcı bilgisini kontrol et
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  /**
   * Kullanıcı giriş işlemi
   * @param credentials Kullanıcı e-posta ve şifre bilgileri
   */
  login(credentials: LoginDTO): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/sign-in`, credentials).pipe(
      tap(response => {
        this.handleAuthResponse(response);
      })
    );
  }

  /**
   * Kullanıcı kayıt işlemi
   * @param userData Kullanıcı kayıt bilgileri
   */
  register(userData: RegisterDTO): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/sign-up`, userData).pipe(
      tap(response => {
        this.handleAuthResponse(response);
      })
    );
  }

  /**
   * Kullanıcı çıkış işlemi
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  /**
   * Kullanıcının oturum açıp açmadığını kontrol eder
   */
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  /**
   * Token bilgisini döner
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Auth yanıtını işleyerek localStorage'e kaydeder
   * @param response Auth yanıtı
   */
  private handleAuthResponse(response: AuthResponse): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('currentUser', JSON.stringify(response.user));
    this.currentUserSubject.next(response.user);
  }
}
