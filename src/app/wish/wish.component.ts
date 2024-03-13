import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from './../../shared/services/eventService'
import { WishService } from './wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  title: string = 'wishlist'
  items: WishItem[] = [];
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      let wishId = wish.id
      this.deleteWish(wishId)
    })
    events.listen('toggleWish', (wish: WishItem) => {
      console.log(wish)
      this.toggleWish(wish)
    })
  }
  ngOnInit(): void {
    this.loadWishes()
  };

  loadWishes() {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data
    },
      (error: any) => { // catch error
        alert(error.message)
      }
    )
  }

  deleteWish(wishId: string) {
    this.wishService.deleteWish(wishId)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.loadWishes();
        },
        error: (error) => {
          console.error('Error adding wish:', error);
        }
      })
  }

  toggleWish(wish: WishItem) {
    let id = wish.id
    this.wishService.toggleWish(id, wish)
    .subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error('Error adding wish:', error);
      }
    })
  }

  addNewWish(text: string) {
    const lastId = this.getLastItemId();
    const nextId = lastId + 1;

    const newWish = new WishItem(text, JSON.stringify(nextId));
    this.addWishToService(newWish);
  }

  private getLastItemId(): number {
    return this.items.reduce((maxId, currentItem) => Math.max(maxId, Number(currentItem.id)), 0);
  }

  private addWishToService(wish: WishItem): void {
    this.wishService.addWish(wish).subscribe({
      next: (response) => {
        console.log(response);
        this.loadWishes();
      },
      error: (error) => {
        console.error('Error adding wish:', error);
      }
    });
  }
  filter: any;
}