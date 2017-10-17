import { Component, OnInit } from '@angular/core';
import {Product} from "@store/product";
import {ProductService} from "@store/product.service";
import {ProductImageService} from "@services/product-image.service";
import {ProductDataSource} from "@store/product-data-source/product-data-source";
import _ from "lodash";
import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ProductDataSource();

  constructor(
    private productService: ProductService,
    private productImageService: ProductImageService
  ) { }

  // /**
  //  * Retrieve the products to be displayed.
  //  */
  ngOnInit() {
  //   this.productService.get().toPromise().then(
  //     (products) => {
  //       this.products = products;
  //       this.fetchThumbnails();
  //     });
  }
  //
  // /**
  //  * Retrieve images from api, and convert them to object urls. Stores urls in thumbnail variable.
  //  */
  // fetchThumbnails(){
  //   let _this = this;
  //   _.each(this.products, function(product){
  //     _this.productImageService.getProductImage(product).then(
  //       (image) => {
  //         let imageUrl = URL.createObjectURL(image);
  //         _this.thumbnails[product.id] = _this.thumbnails[product.id] || [];
  //         _this.thumbnails[product.id].push(imageUrl);
  //       });
  //   });
  // }
  //
  // /**
  //  * Returns the thumbnail for the provided product
  //  * @param product
  //  * @return false | blobUrl
  //  * todo: make this a pipe?
  //  */
  // getThumbnail(product) {
  //   if(product && this.thumbnails[product.id] && this.thumbnails[product.id][0]){
  //     return this.thumbnails[product.id][0];
  //   }else{
  //     return false;
  //   }
  // }

  formattedPrice(product){
    return this.productService.formatPrice(product);
  }

}
