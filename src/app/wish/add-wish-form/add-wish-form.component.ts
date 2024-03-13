// Since this component returns an output aka. new wish item, we need to import Output and EventEmitter
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<string>();
  newWishText: string = ''

  addNewWish() {
    //todo: add new wish to the items array
    //clear the textbox
    //Whenever the addNewWish method is called, we will emit the addWish event with a new wish item
    if (this.newWishText.length) this.addWish.emit(this.newWishText)
    this.newWishText = ''
  }
}
