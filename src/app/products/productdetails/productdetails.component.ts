import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/shared/interfaces';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent {
  product$!: Observable<Product>
  constructor(private productService: ProductsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id')
      if (id) {
        this.product$ = this.productService.getProduct(id)
      }
    })
  }
}
