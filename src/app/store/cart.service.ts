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

  /**
   * Adds 1 product to the cart
   * @param product
   */
  add(product: Product){
    console.log('attempt to add product');
    this.cart.items.push(product);
  }

  /**
   * Removes 1 of the specified items from the cart.
   * @param product
   */
  remove(product: Product){
    console.log('Attempt to remove product');
    let index = this.findExact(product).indexOf(product);
    if(index !== -1){
      this.cart.items.splice(index,1);
      return true;
    }else{
      return false;
    }
  }

  /**
   * Empties the users cart
   */
  empty(){
    this.cart.items.forEach((item)=> this.remove(item));
  }

  /**
   * Get all products in the cart.
   * @return {Cart}
   */
  get(): Cart{
    console.log('Attempt to retrieve cart');
    //todo create a real cart object somewhere and have a computed property...
    // Not sure if this should be a component yet or not
    let total = 0;
    this.cart.items.forEach((item)=>(total += item.price));
    this.cart.itemsTotal = total;
    return this.cart;
  }

  /**
   * Finds exact matches of the provided product in the cart and returns them
   * @param product
   * @return {Product[]}
   */
  findExact(product: Product): Array<Product>{
    return this.get().items.filter(item => product.id == item.id);
  }

  /**
   * Returns the current quantity of the provided item in the cart
   * @param product Product to find
   * @return {number}
   */
  getQuantity(product: Product): number{
    return this.findExact(product).length;
  }
}
