import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {Posts} from '../models/posts';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  postList: Posts[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPostList().subscribe(data => this.postList = data);
  }

  createPost() {
    const data = {
      title: 'Ini judul',
      body: 'Ini body'
    };
    this.postService.postArticle(data);
  }
}
