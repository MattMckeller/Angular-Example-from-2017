import { Injectable } from '@angular/core';
import {ShippingOption} from "@app/shared/models/shipping-option";
import {HttpClient} from "@angular/common/http";

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ShippingService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<ShippingOption[]> {
    let url = 'http://api.expanseservices.com/api/shipping/getOptions';
    return this.http.get<ShippingOption[]>(url);
  }

  handleError(error: any): Promise<any>{
    console.log('An error has occurred');
    return Promise.reject( error.message || error );
  }
}
