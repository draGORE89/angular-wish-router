import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { authGuard } from 'src/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductslistComponent,
    canActivate: [authGuard]
  },
  {
    path: ':id',
    component: ProductdetailsComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
