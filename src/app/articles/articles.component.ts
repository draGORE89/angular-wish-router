import { Component, OnDestroy, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ArticlesService } from './articles.service';
import { AuthService } from 'src/shared/services/auth.service';
import { Observable, Subscription, map, switchMap } from 'rxjs';
import { ArticleResponse, UserInterface } from 'src/shared/interfaces';
import { EventService } from 'src/shared/services/eventService';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnDestroy {
  articleService = inject(ArticlesService)
  authService = inject(AuthService)
  articles$!: Observable<Object[]>
  user: UserInterface | null | undefined
  removeWishSubscription: Subscription
  

  constructor(private events: EventService) {
    this.user = this.authService.currentUserSig()
    this.articles$ = this.getUserArticles()

    this.removeWishSubscription = this.events.listen('remove-article', (slug: string) => {
      this.deleteArticle(slug)
    })

  }

  addArticle(event: FormGroup): void {
    const articleForm = event
    this.articleService.createArticle(articleForm.getRawValue())
      .subscribe({
        next: response => {
          console.log(response)
          this.articles$ = this.articleService.getAuthorArticles(this.user)
          .pipe(
            map((data: ArticleResponse) => data.articles)
          )
        },
        error: error => console.log(error)
      })
  }

  getUserArticles(): Observable<any> {
    // const test = document.querySelector(".foo") as HTMLInputElement
    // test.value
    // const test2 = document.querySelector(.bar)
    // test2.addEventListener("blue", (event) => {
    //  const target = event.target as HTMLInputElement
    //  console.log(target.value)
    //})
    return this.articleService.getAuthorArticles(this.user).pipe(
      map((data: ArticleResponse) => data.articles))
  }

  deleteArticle(slug: string) {
    this.articleService.removeArticle(slug)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.articles$ = this.getUserArticles()
        },
        error: (error) => {
          console.error('Error deleting article:', error);
        }
      })
  }

  ngOnDestroy(): void {
    this.removeWishSubscription.unsubscribe()
  }
}


