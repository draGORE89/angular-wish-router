import { Component, EventEmitter, OnDestroy, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticlesService } from '../articles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.css']
})
export class ArticlesFormComponent {
  @Output() addArticle = new EventEmitter<FormGroup>()
  articleService = inject(ArticlesService)
  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  })

  submitForm(event: Event): void {
    event.preventDefault()
    console.log(this.articleForm)
    this.addArticle.emit(this.articleForm)
    // this.articleService.createArticle(this.articleForm.getRawValue())
    //   .subscribe({
    //     next: response => {
    //       this.addArticle.emit(a)
    //     },
    //     error: error => console.log(error)
    //   })
  }
  // if (this.newWishText.length) this.addWish.emit(this.newWishText)
}
