import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import {Observable} from "rxjs/Observable";
import {ProductImageService} from "@app/services/product-image.service";
import _ from "lodash";

import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  thumbnails: Array<any> = [];

  constructor(
    private productService: ProductService,
    private productImageService: ProductImageService,
    private router: Router
  ) { }

  /**
   * Retrieve the products to be displayed.
   */
  ngOnInit() {
    this.productService.get().toPromise().then(
      (products) => {
        this.products = products;
        this.fetchThumbnails();
      });
  }

  /**
   * Retrieve images from api, and convert them to object urls. Stores urls in thumbnail variable.
   */
  fetchThumbnails(){
    let _this = this;
    _.each(this.products, function(product){
      _this.productImageService.getProductImage(product).then(
        (image) => {
          let imageUrl = URL.createObjectURL(image);
          _this.thumbnails[product.id] = _this.thumbnails[product.id] || [];
          _this.thumbnails[product.id].push(imageUrl);
        });
    });
  }

  /**
   * Returns the thumbnail for the provided product
   * @param product
   * @return false | blobUrl
   */
  getThumbnail(product) {
    if(product && this.thumbnails[product.id] && this.thumbnails[product.id][0]){
      return this.thumbnails[product.id][0];
    }else{
      return false;
    }
  }

  redirect(productID){
    console.log('do redirect for '+productID);
    this.router.navigate(['/product',productID]);
  }

  // todo: should be pipe
  formattedPrice(product){
    return this.productService.formatPrice(product);
  }

}
