import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {
    path: '',
    component: ProductslistComponent
  },
  {
    path: ':id',
    component: ProductdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
