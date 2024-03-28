import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  products: any[] = []

  constructor(private productService: ProductsService) {}
  
  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.productService.getAllProducts()
      .subscribe({
        next: (response) => this.products = response,
        error: (error) => alert(error.message)
      })
  }
}
