import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';

import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  /**
   * Retrieve the products to be displayed.
   */
  ngOnInit() {
    this.productService.get().toPromise().then(
      (products) => {
        this.products = products;
      });
  }

  redirect(productID){
    console.log('do redirect for ' + productID);
    this.router.navigate(['/product', productID]);
  }

}
