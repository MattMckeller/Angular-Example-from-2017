import { Injectable } from '@angular/core';
import { Product } from '../models/product'
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import _ from "lodash";

@Injectable()
export class ProductService {
  apiBaseUrl = 'http://api.expanseservices.com/api/';
  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Product[]> {
    let url = this.apiBaseUrl + 'products/getProducts';
    return this.http.get<Product[]>(url);
  }

  getById(id: any): Observable<Product> {
    let url = this.apiBaseUrl + 'products/getProduct/' + id;
    return this.http.get<Product>(url);
  }

  search(attributes: any[], tags: any[], priceMin: number, priceMax: number) {

  }

  create(productData: Product) {
    let url = this.apiBaseUrl + 'products/createProduct';
    this.http.post(url, {product: productData})
      .subscribe(
        this.nextHandler,
        this.errorHandler
      );
  }

  update(productData: Product) {
    let url = this.apiBaseUrl + 'products/updateProduct';
    this.http.post(url, {product: productData})
      .subscribe(
        this.nextHandler,
        this.errorHandler
      );
  }

  nextHandler(successData) {
    console.log(successData);
  }

  errorHandler(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      // A client-side or network error occurred.
      console.log('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
  }
}
