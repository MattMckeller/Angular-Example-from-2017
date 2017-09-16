import { Injectable } from '@angular/core';
import { Product } from './product';
import { Cart } from './cart';

@Injectable()
export class CartService {
  private cart: Cart;

  constructor() {
    //Instantiate the cart to be empty
    this.cart = {
      id: Math.ceil((Math.random()*100)),
      items: [] as Product[]
    } as Cart;
  }

  add(product: Product){
    console.log('attempt to add product');
    this.cart.items.push(product);
  }

  remove(product: Product){
    this.cart.items = this.cart.items = [];

    console.log('Attempt to remove product');
  }

  empty(){
    this.cart.items.forEach((item)=> this.remove(item));
  }

  get(): Cart{
    console.log('Attempt to retrieve cart');
    //todo create a real cart object somewhere and have a computed property...
    // Not sure if this should be a component yet or not
    let total = 0;
    this.cart.items.forEach((item)=>(total += item.price));
    this.cart.itemsTotal = total;
    return this.cart;
  }
}
