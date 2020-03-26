import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleComponent } from './article/article.component';
import { AdminComponent } from './admin/admin.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, ArticleComponent, AdminComponent, ArticleEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
