import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';

// Paths are without / in  the beginning (relative to the app)
// If no path is provided, it is considered as the home page
// Angular looks for matches from top to bottom, so changing the position of the wild card would mess up the app / route order!
const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'wishlist', loadChildren: () => import('./wish/wish.module').then(m => m.WishModule) },
  { path: 'contact/us', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
 // { path: 'products/:id', component: ProductdetailsComponent }, // for individual products based on route parameter - :id
  { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }, // <-- set up the wild card for not found resources
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
