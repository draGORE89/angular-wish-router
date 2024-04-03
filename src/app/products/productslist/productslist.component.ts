import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable, map } from 'rxjs';
import { Product } from 'src/shared/interfaces';


@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent {
  products$: Observable<any>

  constructor(private productService: ProductsService) {
    this.products$ = this.productService.getAllProducts()
      .pipe(map((products: Product[]) => products.map((product: Product) => {
        return {
          id: product.id,
          name: product.name
        }
      })))
  }
}
