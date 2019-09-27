import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginPayload } from './loginpayload';
import { AuthResponse } from './authresponse';
import { RegisterPayload } from './registerpayload';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.http.post<AuthResponse>('http://localhost:8080/api/auth/login', loginPayload).pipe(map(data => {
      this.cookieService.set('authenticationToken', data.accessToken);
      this.cookieService.set('user', data.username);
      return true;
    }));
  }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/register', registerPayload).pipe(map(data => {
      return data;
    }));
  }

  logout() {
    this.cookieService.delete('authenticationToken');
    this.cookieService.delete('user');
  }

  getUserName(): string {
    return this.cookieService.get('user');
  }

  isLoggedIn(): Boolean {
    return this.cookieService.check('user')
  }
}
