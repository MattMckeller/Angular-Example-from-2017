import { Component, OnInit } from '@angular/core';
import { CartService } from '@store/cart.service';
import { ProductService } from '@store/product.service';
import { Product } from '@store/product';
import { Cart } from '@store/cart';
import {Router} from "@angular/router";

// todo create checkout module
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: Cart;
  itemsBeingPurchased: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  /**
   * Initialize the cart. Default to having all items in the cart being purchased.
   */
  ngOnInit() {
    this.itemsBeingPurchased = [];
    this.cart = this.cartService.get();
    this.cart.items.forEach(item => this.itemsBeingPurchased.push(item));
  }

}
