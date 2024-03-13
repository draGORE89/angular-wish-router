import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListComponent } from './../wish/wish-list/wish-list.component';
import { AddWishFormComponent } from './../wish/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './../wish/wish-filter/wish-filter.component';
import { WishListItemComponent } from './../wish/wish-list-item/wish-list-item.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WishComponent } from './wish.component';

@NgModule({
  declarations: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
    WishComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    // WishListComponent,
    // AddWishFormComponent,
    // WishFilterComponent,
    // WishListItemComponent
    WishComponent
  ]
})
export class WishModule { }
