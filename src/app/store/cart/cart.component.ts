import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  total: Number;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    //Get the users cart
    this.cart = this.cartService.get();
  }

  get itemCount(){
    return this.cart.items.length;
  }

}
