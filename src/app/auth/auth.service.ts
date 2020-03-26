import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookie: CookieService, private router: Router) { }

  login(username, password) {
    if (username === 'someone' && password === 'secret123') {
      this.cookie.set('token', 'aaaaa');
      this.router.navigate(['/admin/dashboard']);
    }
  }

  logout() {
    this.cookie.delete('token');
    this.router.navigate(['']);
  }

  isLogin() {
    return this.cookie.get('token');
  }
}
