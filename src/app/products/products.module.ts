import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RouterModule } from '@angular/router';
import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  declarations: [
    ProductslistComponent,
    ProductdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
