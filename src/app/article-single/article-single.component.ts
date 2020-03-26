import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article-single',
  templateUrl: './article-single.component.html',
  styleUrls: ['./article-single.component.css']
})
export class ArticleSingleComponent implements OnInit {

  id: number;
  title: string;
  body: string;

  constructor(private postService: PostService, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');

    this.postService.getById(id).subscribe(data => {
      this.id = data.id;
      this.title = data.title;
      this.body = data.body;
    });
  }

}
