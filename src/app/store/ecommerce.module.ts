import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ProductService } from './product.service';
import { CartService } from './cart.service';

import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    MaterialModule
  ],
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
