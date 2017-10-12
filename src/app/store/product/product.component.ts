import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../product';

import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productObservable: Observable<Product>;
  product: Product;
  hasBeenAdded: boolean = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  addToCart(){
    this.hasBeenAdded = true;
    console.log('Add ' + this.product + ' to cart!');
    this.cartService.add(this.product);
    console.log(this.cartService.get());
  }

  buy(){
    console.log('Checkout '+this.product+'now!');
    //If item has not already been added add it to cart
    if(this.hasBeenAdded === false){
      this.addToCart();
    }
    this.redirectCart();
  }

  redirectCart(){
    this.router.navigate(['/cart']);
  }

  ngOnInit() {
    // this.product = this.productService.getById(this.route.snapshot.params['id']);
    // this.route.params.subscribe(params =>
    //   this.productObservable = this.productService.getById(params['id'])
    // );
    // this.productObservable.subscribe(
    //   (product) => this.product = product
    // );
    //Ex for when observables are implemented
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getById(+params.get('id')))
      .subscribe(product => this.product = product);
  }

  formattedPrice(){
    return this.productService.formatPrice(this.product.price);
  }
}
