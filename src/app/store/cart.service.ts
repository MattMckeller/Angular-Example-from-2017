import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class CartService {

  constructor() { }

  add(product: Product){
    console.log('attempt to add product');
  }

  remove(product: Product){
    console.log('Attempt to remove product');
  }

  empty(){
    console.log('Attempt to empty cart.');
  }

  get(){
    console.log('Attempt to retrieve cart');
  }
}
