import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../product';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
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
    console.log('Add '+this.product+' to cart!');
    this.cartService.add(this.product);
    console.log(this.cartService.get());
  }

  buy(){
    console.log('Checkout '+this.product+'now!');
    //If item has not already been added add it to cart
    if(this.hasBeenAdded === false){
      this.addToCart();
    }
    this.redirectCheckout();
  }

  redirectCheckout(){
    this.router.navigate(['/checkout']);
  }

  ngOnInit() {
    // this.product = this.productService.getById(this.route.snapshot.params['id']);
    this.route.params.subscribe(params =>
      this.product = this.productService.getById(params['id'])
    );
    //Ex for when observables are implemented
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    //   .subscribe(hero => this.hero = hero);
  }

  formattedPrice(){
    return this.productService.formatPrice(this.product.price);
  }
}
