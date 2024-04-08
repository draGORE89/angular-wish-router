import { ArticleResponse } from './../../../shared/interfaces';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { AuthService } from 'src/shared/services/auth.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable, switchMap, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent {
  @Input() articles$!: Observable<any>
}
