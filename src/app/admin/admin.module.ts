import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "@app/admin/services/product.service";
import {ManageProductsModule} from "@app/admin/manage-products/manage-products.module";

@NgModule({
  imports: [
    CommonModule,
    ManageProductsModule
  ],
  declarations: [],
  providers: [
    ProductService
  ]
})
export class AdminModule { }
