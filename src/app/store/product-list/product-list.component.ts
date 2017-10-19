import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';
import {Observable} from "rxjs/Observable";
import {ProductImageService} from "@app/shared/services/product-image.service";
import _ from "lodash";

import "rxjs/add/operator/toPromise";
import {AppSettings} from "@app/app-settings";

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
   * Retrieve product iamge hrefs from api. Stores urls in thumbnail variable.
   */
  fetchThumbnails(){
    let _this = this;
    _.each(this.products, function(product){
      _this.productImageService.getProductImages(product).then(
        (productImageHrefs) => {
          _this.thumbnails[product.id] = _this.thumbnails[product.id] || [];
          productImageHrefs.forEach((imageHref) => _this.thumbnails[product.id].push(imageHref));
        });
    });
  }

  /**
   * Returns the thumbnail for the provided product
   * @param product
   * @return false | href
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

}
