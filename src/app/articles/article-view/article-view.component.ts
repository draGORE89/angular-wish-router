import { Component, Input } from '@angular/core';
import { Article } from 'src/shared/interfaces';
import { EventService } from 'src/shared/services/eventService';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent {
  @Input() article!: Article

  constructor(private events: EventService) { }
  removeArticle() {
    console.log(this.article)
    this.events.emit('remove-article', this.article.slug)
  }
}
