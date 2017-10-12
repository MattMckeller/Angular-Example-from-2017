import { Injectable } from '@angular/core';
import {Product} from "@store/product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  create(productData: Product) {
    let url = 'http://api.expanseservices.com/api/products/createProduct';
    this.http.post(url, {product: productData})
      .subscribe(
        successData => {
          console.log(successData);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            // A client-side or network error occurred.
            console.log('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
      );
  }
}
