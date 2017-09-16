import { Injectable } from '@angular/core';
import { Product } from './product';
import { Cart } from './cart';

@Injectable()
export class CartService {
  cart: Cart;

  constructor() {
    //Instantiate the cart to be empty
    this.cart = {
      id: Math.random(),
      items: [] as Product[],
      itemsTotal: 0
    } as Cart;
  }

  add(product: Product){
    console.log('attempt to add product');
    this.cart.items.push(product);
  }

  remove(product: Product){
    this.cart.items = this.cart.items.filter( item => (item.id !== product.id));

    console.log('Attempt to remove product');
  }

  empty(){
    this.cart.items.forEach((item)=> this.remove(item));
  }

  get(): Cart{
    console.log('Attempt to retrieve cart');
    return this.cart;
  }
}
