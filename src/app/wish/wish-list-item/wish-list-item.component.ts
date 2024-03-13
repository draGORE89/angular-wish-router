import { Component, Input } from '@angular/core';
// import events from '../../shared/services/eventService'
import {EventService} from '../../../shared/services/eventService'
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css']
})

// ! - non-null assertion operator; causes the TypeScript type checker to suspend strict null and undefined checks for a specific property expression.
// In this case, no need to supply the variable with value --> will be provided by the parent
export class WishListItemComponent {
  @Input() wish!: WishItem;

  // text-muted --> bootstrap class
  get applyCssClasses() {
    // return this.fulfilled ? 'strikeout text-muted' : ''
    // // return this.fulfilled ? ['strikeout', 'text-muted'] : []
    // return { 'strikeout': this.fulfilled, 'text-muted': this.fulfilled }
    return { 'strikeout text-muted': this.wish.isComplete }
  }

  constructor(private events: EventService) { }

  toggleWish() {
    this.wish.isComplete = !this.wish.isComplete
    this.events.emit('toggleWish', this.wish)
  }

  removeWish() {
    this.events.emit('removeWish', this.wish)
  }
}
