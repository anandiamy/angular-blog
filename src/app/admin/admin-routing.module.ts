import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ArticleComponent} from './article/article.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from '../auth/auth.guard';
import {ArticleSingleComponent} from '../article-single/article-single.component';
import {ArticleEditComponent} from './article-edit/article-edit.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'article',
        component: ArticleComponent
      },
      {
        path: 'article/:id',
        component: ArticleSingleComponent
      },
      {
        path: 'article/:id/edit',
        component: ArticleEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
