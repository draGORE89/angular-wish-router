import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent {
  products$: Observable<any>

  constructor(private productService: ProductsService) {
    this.products$ = this.productService.getAllProducts()
      .pipe(map((products) => products.map((product: any) => {
        return {
          id: product.id,
          name: product.name
        }
      })))
  }
}
