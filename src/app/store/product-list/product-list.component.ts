import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productService.get();
  }

  redirect(productID){
    console.log('do redirect for '+productID);
    this.router.navigate(['/product',productID]);
  }

  formattedPrice(product){
    // return '5';
    return this.productService.formatPrice(product.price);
  }

}
