import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignInRequestModel } from '@auth/models/sign-in-request.model';
import { SignInResponseModel } from '@auth/models/sign-in-response.model';
import { SignUpRequestModel } from '@auth/models/sign-up-request.model';
import { SignUpResponseModel } from '@auth/models/sign-up-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:3000/Auth'; 

  constructor(private http: HttpClient){

  }

  login(data: SignInRequestModel): Observable<SignInResponseModel>{
    return this.http.post<SignInResponseModel>(`${this.apiUrl}/Login`, data);
  }

  register(data: SignUpRequestModel): Observable<SignUpResponseModel>{
    return this.http.post<SignUpResponseModel>(`${this.apiUrl}/Register`, data);
  }

}
