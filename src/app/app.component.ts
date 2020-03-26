import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {catchError, debounceTime, delay, map, retry, retryWhen, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Posts} from './models/posts';
import {of} from 'rxjs';
import {PostService} from './services/post.service';
import str_random from './helpers/str';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';

// import {Posts} from 'posts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training-angular-dua-enam-sesi-satu';

  search = new FormControl('');

  postList: Posts[] = [];

  errorMessage: string;

  constructor(private postService: PostService, private authService: AuthService, private router: Router) {
    this.search.valueChanges.pipe(debounceTime(3000)).subscribe(data => {
      console.log('3 detik kemudian');
    });
  }

  fetchData() {
    this.postService.getPostList().subscribe(data => {
      if (typeof data === 'string') {
        this.errorMessage = data;
      } else {
        this.postList = data;
      }
    });
  }

  // login() {
  //   this.router.navigate(['login']);
  // }

  logout() {
    this.authService.logout();
  }

  isLogin() {
    return this.authService.isLogin();
  }
}
