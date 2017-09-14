import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable()
export class ProductService {

  constructor() { }

  get(): Array<Product> {
    return [];
  }

  getById(id: string): Product{
    return null;
  }

  search(attributes: any[], tags: any[], priceMin: number, priceMax: number){

  }
}
