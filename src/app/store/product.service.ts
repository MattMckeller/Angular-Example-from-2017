import { Injectable } from '@angular/core';
import { Product } from './product'

const products: Product[] = [
  {id: 1, name: 'Item 1', price:11},
  {id: 2, name: 'Item 2', price:22},
  {id: 3, name: 'Item 3', price:33},
  {id: 4, name: 'Item 4', price:44},
];
@Injectable()
export class ProductService {

  constructor() { }

  get(): Array<Product> {
    return products;
  }

  getById(id: string): Product{
    return null;
  }

  search(attributes: any[], tags: any[], priceMin: number, priceMax: number){

  }
}
