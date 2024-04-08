import { catchError, map } from 'rxjs/operators';
import { ArticleInterface, ArticleResponse, UserInterface } from './../../shared/interfaces';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ARTICLES_URL } from 'src/shared/constants';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  httpClient = inject(HttpClient)

  createArticle(article: ArticleInterface) {
    return this.httpClient.post(ARTICLES_URL, { article }).pipe(catchError(this.handleError))
  }

  getAuthorArticles(user: UserInterface | null | undefined): Observable<any> {
    const username = user?.username
    return this.httpClient.get(ARTICLES_URL + `?author=${username}`).pipe(catchError(this.handleError))
  }

  removeArticle(slug: string) {
    return this.httpClient.delete(ARTICLES_URL + '/' + slug).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    // 0 for client & network, 1 for server errors
    // 1. Logs in console
    if (error.status === 0) {
      console.error('There is an issue with the client ot network:', error.error)
    } else {
      console.error('Server-side error:', error.error)
    }
    // 2. Throw for user
    return throwError(() => new Error('Cannot retrieve wishes from the server'))
  }
}
