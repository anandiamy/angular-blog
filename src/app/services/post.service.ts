import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Posts} from '../models/posts';
import {catchError, delay, retryWhen, tap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // baseUrl = 'https://jsonplaceholder.typicode.com';
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getPostList() {
    return this.http.get<Posts[]>(this.baseUrl + '/posts')
      .pipe(
        catchError(error => {
          console.log(error.message);
          return of(null);
        })
      );
  }

  postArticle(data) {
    const url = this.baseUrl + '/posts';

    return this.http.post(url, data);
  }

  putArticle(id: number, data: Posts) {
    const url = this.baseUrl + '/posts/' + id;
    return this.http.put<Posts>(url, data)
      .pipe(
        catchError(err => {
          console.log(err);

          return of(null);
        })
      );
  }

  deleteArticle(id: number) {
    const url = this.baseUrl + '/posts/' + id;

    return this.http.delete(url).pipe(
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }

  searchArticle(q: string) {
    const url = this.baseUrl + '/posts?q=' + q;

    return this.http.get<Posts[]>(url);
  }

  getById(id) {
    const url = this.baseUrl + '/posts/' + id;

    return this.http.get<Posts>(url);
  }

  filterAuthor(author: string) {
    const url = this.baseUrl + '/posts?author=' + author;

    return this.http.get<Posts[]>(url);
  }

  sortTanggal(sort: string) {
    const url = this.baseUrl + '/posts?_sort=createdAt&_order=' + sort;
    console.log(url);
    return this.http.get<Posts[]>(url);
  }
}
