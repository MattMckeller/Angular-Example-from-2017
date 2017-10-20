import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from '@services/cart.service';
import { Product } from '@models/product';
import _ from "lodash";

import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";

import { ProductService } from '@services/product.service';
import { ProductImageService } from "@services/product-image.service";
import {SwiperConfigInterface} from "ngx-swiper-wrapper";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  finishedLoading = false;
  productObservable: Observable<Product>;
  product: Product;
  productImages: Array<string> = [];
  hasBeenAdded: boolean = false;
  swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    effect: 'slide',
    centeredSlides: true,
    threshold: 50,
    spaceBetween: 5,
    slidesPerView: 1,
    keyboardControl: true,

    pagination: '.swiper-pagination',
    paginationClickable: true,

    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    loop: true,
    // autoplay: 10000,
    speed: 700,

  };

  constructor(
    private productService: ProductService,
    private productImageService: ProductImageService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  addToCart(){
    this.hasBeenAdded = true;
    console.log('Add ' + this.product + ' to cart!');
    this.cartService.add(this.product);
    console.log(this.cartService.get());
  }

  buy(){
    console.log('Checkout '+this.product+'now!');
    //If item has not already been added add it to cart
    if(this.hasBeenAdded === false){
      this.addToCart();
    }
    this.redirectCart();
  }

  redirectCart(){
    this.router.navigate(['/cart']);
  }

  ngOnInit() {
    // this.product = this.productService.getById(this.route.snapshot.params['id']);
    // this.route.params.subscribe(params =>
    //   this.productObservable = this.productService.getById(params['id'])
    // );
    // this.productObservable.subscribe(
    //   (product) => this.product = product
    // );
    //Ex for when observables are implemented
    this.route.paramMap
      .switchMap((params: ParamMap) => this.productService.getById(+params.get('id')))
      .subscribe(product => {
        this.product = product;
        this.fetchThumbnails();
      });
  }

  /**
   * Retrieve product iamge hrefs from api. Stores urls in thumbnail variable.
   */
  fetchThumbnails(){
    let _this = this;
    let product = this.product;
    this.productImageService.getProductImages(product).then(
      (productImageHrefs) => {
        _this.productImages = productImageHrefs;
    });
  }
}
