import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './product.service';
import { CartService } from './cart.service';

import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [],
  exports: [
    ProductComponent,
    CartComponent,
    ProductListComponent
  ],
  declarations: [
    ProductComponent,
    CartComponent,
    ProductListComponent
  ],
  providers: [
    ProductService,
    CartService
  ],
})
export class EcommerceModule { }
