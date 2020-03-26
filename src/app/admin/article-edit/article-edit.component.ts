import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Posts} from '../../models/posts';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  id: number;
  title: string;
  body: string;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.postService.getById(id).subscribe(data => {
      this.id = data.id;
      this.title = data.title;
      this.body = data.body;
    });
  }

  update(id: number) {
    const posts: Posts = {
      id: this.id,
      title: this.title,
      body: this.body
    };

    this.postService.putArticle(id, posts).subscribe(data => console.log(data));

    this.router.navigate(['admin/article']);
  }
}
