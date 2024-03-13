import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './products/productslist/productslist.component';
import { ProductdetailsComponent } from './products/productdetails/productdetails.component';
import { WishComponent } from './wish/wish.component';

// Paths are without / in  the beginning (relative to the app)
// If no path is provided, it is considered as the home page
// Angular looks for matches from top to bottom, so changing the position of the wild card would mess up the app / route order!
const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'wishlist', component: WishComponent },
  { path: 'contact/us', component: ContactComponent },
  { path: 'products', component: ProductslistComponent },
  { path: 'products/:id', component: ProductdetailsComponent }, // for individual products based on route parameter - :id
  { path: '**', component: NotFoundComponent }, // <-- set up the wild card for not found resources
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
