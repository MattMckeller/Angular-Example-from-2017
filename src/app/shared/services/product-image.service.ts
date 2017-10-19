import { Injectable } from '@angular/core';
import {Product} from "@app/shared/models/product";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "@app/shared/services/product.service";
import {ProductImage} from "@app/shared/models/product-image";
import {Observable} from "rxjs";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import {ResponseContentType} from "@angular/http";


@Injectable()
export class ProductImageService {

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) { }

  getProductImage(product: Product): Promise<any> {
    let _this = this;
    return new Promise(function(resolve, reject){
      _this.getImageReference(product).then(
        (imgRef) => {
          _this._getImageFile(imgRef).then(
            (response) => {
              console.log('here', response);
              resolve(response);
            }
          )
        });
    });
  }

  getAllProductImages(product) {

  }

  private getImageReference(product: Product): Promise<any> {
    console.log('get image reference', product);
    let _this = this;
    return new Promise(function(resolve, reject){
      console.log(product);
      console.log(product[0]);
      if(product.productImages && product.productImages[0]){
        resolve(product.productImages[0])
      }else{
        _this.productService.getById(product.id)
          .toPromise()
          .then(
            (response) => {
              console.log('response of product service by id', response);
              resolve(response);
            }
          );
      }
    });
  }

  private _getImageFile(productImage: ProductImage): Promise<any>{
    console.log('get image file', productImage);
    let url = 'http://api.expanseservices.com/api/productImages/getImage/'+productImage.id;
    return this.http.get(url, {
      responseType: 'blob'
    }).toPromise();
  }
}
