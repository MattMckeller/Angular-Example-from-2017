import { Injectable } from '@angular/core';
import {Product} from "@app/shared/models/product";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "@app/shared/services/product.service";
import {ProductImage} from "@app/shared/models/product-image";
import {Observable} from "rxjs";

import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import {ResponseContentType} from "@angular/http";
import _ from 'lodash';
import {AppSettings} from "@app/app-settings";


@Injectable()
export class ProductImageService {

  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) { }

  getProductImages(product: Product): Promise<any> {
    let _this = this;
    return new Promise(function(resolve, reject){
      _this.getImageObjects(product).then(
        (productImages) => {
          let productImagesResponse = [];
          _.forEach(productImages, (productImage) => {
            const imageHref = _this._getImageHref(productImage);
            productImagesResponse.push(imageHref);
          });
          resolve(productImagesResponse);
      });
    });
  }

  /**
   * Returns a promise which resolves to the productImage jsons for the provided product.
   * @param {Product} product
   * @returns {Promise<any>}
   */
  private getImageObjects(product: Product): Promise<any> {
    let _this = this;
    return new Promise(function(resolve, reject){
      if (product.product_images && product.product_images[0]) {
        resolve(product.product_images);
      }else {
        _this.productService.getById(product.id)
          .toPromise()
          .then(
            (response) => {
              if(response.product_images) {
                resolve(response.product_images);
              }else {
                reject();
              }
            }
          );
      }
    });
  }

  getThumbnail(product: Product) {
    let _this = this;
    return this.getImageObjects(product).then(
      (productImages) => {
        let thumbnailImage = productImages[0] || false;
        if (thumbnailImage) {
          return _this._getImageHref(thumbnailImage);
        } else {
          throw new Error('Could not find thumbnail for provided product.');
        }
      }
    );
  }

  /**
   * Returns the full href for a product image
   */
  private _getImageHref(productImage: ProductImage): string{
    const url = AppSettings.IMAGES_BASEURL + productImage.image;
    return url;
  }
}
