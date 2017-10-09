import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CheckoutModel} from "@models/checkout";

import 'rxjs/add/operator/retry';

@Injectable()
export class CheckoutService {

  constructor(
    private http: HttpClient
  ) { }

  submit(checkoutData: CheckoutModel) {
    let url = 'http://api.expanseservices.com/api/checkout/submit';
    this.http.post(url, checkoutData)
      .subscribe(
        data => {
          this.confirmSubmit();
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

  save(checkoutData: CheckoutModel) {
    console.log('submit from service');
    console.log(checkoutData);
  }

  confirmSubmit() {
    console.log('submit confirmed do something now?');
  }

}
