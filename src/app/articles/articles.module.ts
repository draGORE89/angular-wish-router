import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticlesFormComponent } from './articles-form/articles-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleViewComponent } from './article-view/article-view.component';


@NgModule({
  declarations: [
    ArticlesComponent, 
    ArticlesFormComponent, 
    ArticlesListComponent, ArticleViewComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [ArticlesComponent]
})
export class ArticlesModule { }
