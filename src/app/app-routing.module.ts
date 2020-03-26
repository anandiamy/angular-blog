import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {ArticleComponent} from './article/article.component';
import {LoginComponent} from './login/login.component';
import {ArticleSingleComponent} from './article-single/article-single.component';


const routes: Routes = [
  {path: '', component: ArticleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'article/:id', component: ArticleSingleComponent},

  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
