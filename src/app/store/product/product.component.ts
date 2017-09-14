import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  /**
   * Id of product
   */
  id: string;

  /**
   * Product data
   */
  product;

  /**
   * Product attributes
   */
  attributes = [];

  /**
   * Product tags
   */
  tags = [];

  constructor(
    private productService: ProductService,
    private cart: CartService
  ) {}

  addToCart(){
    console.log(`Add {this.product} to cart!`);
  }

  buyNow(){
    console.log(`Buy {this.product} now!`);
  }

  ngOnInit() {
  }

}
