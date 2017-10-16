import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ProductService } from './product.service';
import { CartService } from './cart.service';

import { ProductComponent } from './product/product.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutCartDisplayComponent } from './checkout-cart-display/checkout-cart-display.component';
import {ImagePipeModule} from "@app/pipes/images/image-pipe.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    MaterialModule,
    ImagePipeModule,
    FlexLayoutModule
  ],
  exports: [
    ProductComponent,
    CartIconComponent,
    ProductListComponent,
    CheckoutCartDisplayComponent
  ],
  declarations: [
    ProductComponent,
    CartIconComponent,
    ProductListComponent,
    CheckoutCartDisplayComponent
  ],
  providers: [
    ProductService,
    CartService
  ],
})
export class EcommerceModule { }
