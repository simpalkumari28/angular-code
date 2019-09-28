import { Injectable, Output } from '@angular/core';
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

  private subject = new Subject<Boolean>();

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.subject.next(this.cookieService.check('user'));
   }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this.http.post<AuthResponse>('http://localhost:8080/api/auth/login', loginPayload).pipe(map(data => {
      this.cookieService.set('authenticationToken', data.authenticationToken);
      this.cookieService.set('user', data.username);
      this.subject.next(true);      
      return true;
    }));
  }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signup', registerPayload);
  }

  logout() {
    this.cookieService.delete('authenticationToken');
    this.cookieService.delete('user');
    this.subject.next(false);
  }

  getUserName(): string {
    return this.cookieService.get('user');
  }

  isLoggedIn(): Observable<Boolean> {    
    return this.subject.asObservable();
  }
}
