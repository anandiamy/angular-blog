import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleComponent} from './article/article.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ErrorComponent} from './error/error.component';
import {HttpClientModule} from '@angular/common/http';
import {AdminModule} from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { ArticleSingleComponent } from './article-single/article-single.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ErrorComponent,
    LoginComponent,
    ArticleSingleComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
