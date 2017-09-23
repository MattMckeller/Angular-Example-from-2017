import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ProductService } from './product.service';
import { CartService } from './cart.service';

import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutCartDisplayComponent } from './checkout-cart-display/checkout-cart-display.component';


@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    ProductComponent,
    CartComponent,
    ProductListComponent,
    CheckoutCartDisplayComponent
  ],
  declarations: [
    ProductComponent,
    CartComponent,
    ProductListComponent,
    CheckoutCartDisplayComponent
  ],
  providers: [
    ProductService,
    CartService
  ],
})
export class EcommerceModule { }
