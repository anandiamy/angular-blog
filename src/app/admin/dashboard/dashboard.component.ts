import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Posts} from '../../models/posts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  postList: Posts[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPostList().subscribe(data => this.postList = data);
  }

}
