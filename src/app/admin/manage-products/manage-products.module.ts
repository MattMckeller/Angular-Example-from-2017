import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {TextMaskModule} from "angular2-text-mask";
import {MaterialModule} from "@app/material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ManageProductsComponent} from "@app/admin/manage-products/manage-products.component";
import { CreateProductComponent } from './create-product/create-product.component';
import {FileUploadModule} from "ng2-file-upload";
import {ManageProductsRoutingModule} from "@app/admin/manage-products/manage-products-routing.module";
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    TextMaskModule,
    FlexLayoutModule,
    FileUploadModule,
    ManageProductsRoutingModule
  ],
  exports: [
    ManageProductsComponent
  ],
  declarations: [
    ManageProductsComponent,
    CreateProductComponent,
  ]
})
export class ManageProductsModule { }
