import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from './../../shared/services/eventService'
import { WishService } from './wish.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit, OnDestroy {
  title: string = 'wishlist'
  items: WishItem[] = [];
  filter: any = (item: WishItem) => item

  removeWishSubscription!: Subscription
  toggleWishSubscription!: Subscription
  destroyRef = inject(DestroyRef)

  constructor(events: EventService, private wishService: WishService) {
    this.removeWishSubscription = events.listen('removeWish', (wish: any) => {
      let wishId = wish.id
      this.deleteWish(wishId)
    })
    this.toggleWishSubscription = events.listen('toggleWish', (wish: WishItem) => {
      this.toggleWish(wish)
    })
  }
  ngOnInit(): void {
    this.loadWishes();
    this.loadWishesInfo();
  };

  loadWishes() {
    this.wishService.getWishes()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => this.items = response,
        error: (error) => alert(error.message) // catch error
      })
  }

  loadWishesInfo() {
    this.wishService.getWishesInfo()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => alert(error.message) // catch error
      })
  }

  deleteWish(wishId: string) {
    this.wishService.deleteWish(wishId)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          console.log(response);
          this.loadWishes();
        },
        error: (error) => {
          console.error('Error deleting wish:', error);
        }
      })
  }

  toggleWish(wish: WishItem) {
    let id = wish.id
    this.wishService.toggleWish(id, wish)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error('Error updating wish:', error);
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
    this.wishService.addWish(wish)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (response) => {
        console.log(response);
        this.loadWishes();
      },
      error: (error) => {
        console.error('Error adding wish:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.removeWishSubscription.unsubscribe()
    this.toggleWishSubscription.unsubscribe()
  }
}