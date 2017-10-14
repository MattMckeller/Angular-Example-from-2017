import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import {Observable} from "rxjs/Observable";
import {ProductImageService} from "@app/services/product-image.service";

import "rxjs/add/operator/toPromise";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  productArray: Product[];
  pic;

  constructor(
    private productService: ProductService,
    private productImageService: ProductImageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productService.get().toPromise().then(
      (products) => {
        this.products = products;
        // _.each(this.productArray)
        console.log(products);
        this.getThumbnail(products[0]);
      });

  }

  getThumbnail(product) {
    // console.log(product);
    this.productImageService.getProductImage(product).then((image)=>{
      // const img = new Image();
      this.pic = URL.createObjectURL(image);
      // document.body.appendChild(img);
      // this.pic = img
    });
  }

  redirect(productID){
    console.log('do redirect for '+productID);
    this.router.navigate(['/product',productID]);
  }

  formattedPrice(product){
    console.log(product);
    return this.productService.formatPrice(product.price);
  }

}
