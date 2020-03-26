import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Posts} from '../../models/posts';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  postList: Posts[] = [];
  search: string;
  author: string;
  sort: string;
  p: number;

  @Output() pageChange: EventEmitter<number>;
  @Output() pageBoundsCorrection: EventEmitter<number>;

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.postService.getPostList().subscribe(data => this.postList = data);
  }

  delete(id: number) {
    this.postService.deleteArticle(id).subscribe(data => console.log(data));

    const index = this.postList.findIndex(data => data.id === id);
    this.postList.splice(index, 1);

    alert('Artikel sudah berhasil dihapus');
  }

  handleSearch() {
    this.postService.searchArticle(this.search).subscribe(data => this.postList = data);
  }

  handleFilter() {
    this.postService.filterAuthor(this.author).subscribe(data => this.postList = data);
  }

  handleSort() {
    console.log(this.sort)
    this.postService.sortTanggal(this.sort).subscribe(data => this.postList = data);
  }
}
