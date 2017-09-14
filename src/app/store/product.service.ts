import { Injectable } from '@angular/core';
import { Product } from './product'

const products: Product[] = [
  {id: 1, name: 'Item 1', price:11, imgHref:'https://images-na.ssl-images-amazon.com/images/I/41fdgRXXCsL._AC_SR201,266_.jpg'},
  {id: 2, name: 'Item 2', price:22, imgHref:'https://images-na.ssl-images-amazon.com/images/I/41U5%2BCeliTL._AC_SR201,266_.jpg'},
  {id: 3, name: 'Item 3', price:33, imgHref:'https://images-na.ssl-images-amazon.com/images/I/31Z6g3sZrKL._AC_SR201,266_.jpg'},
  {id: 4, name: 'Item 4', price:44, imgHref:'https://images-na.ssl-images-amazon.com/images/I/313roGSlMrL._AC_SR201,266_.jpg'},
];
@Injectable()
export class ProductService {

  constructor() { }

  get(): Product[] {
    return products;
  }

  getById(id: any): Product {
    console.log(this.get().filter(product => product.id === parseInt(id))[0]);
    return this.get().filter(product => product.id === parseInt(id))[0];
  }

  search(attributes: any[], tags: any[], priceMin: number, priceMax: number){

  }

  formatPrice(price: Number){
    return '$'+price.toFixed(2);
  }
}
