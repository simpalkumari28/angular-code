import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginPayload } from './loginpayload';
import { AuthResponse } from './authresponse';
import { RegisterPayload } from './registerpayload';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() loggedIn: EventEmitter<Boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.http.post<AuthResponse>('http://localhost:8080/api/auth/login', loginPayload).pipe(map(data => {
      this.cookieService.set('authenticationToken', data.authenticationToken);
      this.cookieService.set('user', data.username);
      this.loggedIn.emit(true);
      this.username.emit(data.username);
      return true;
    }));
  }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signup', registerPayload);
  }

  logout() {
    this.cookieService.delete('authenticationToken');
    this.cookieService.delete('user');
    this.loggedIn.emit(false);
    this.username.emit();
  }

  getUserName(): string {
    return this.cookieService.get('user');
  }

  isLoggedIn(): Boolean {
    return this.cookieService.check('user');
  }
}
