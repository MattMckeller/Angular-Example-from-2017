import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CheckoutModel} from "@models/checkout";

@Injectable()
export class CheckoutService {

  constructor(
    private http: HttpClient
  ) { }

  submit(checkoutData: CheckoutModel) {
    console.log('submit from service');
    console.log(checkoutData);
  }

  save(checkoutData: CheckoutModel) {
    console.log('submit from service');
    console.log(checkoutData);
  }

}
