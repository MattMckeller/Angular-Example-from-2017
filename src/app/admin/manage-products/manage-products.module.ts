import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {TextMaskModule} from "angular2-text-mask";
import {MaterialModule} from "@app/shared/material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ManageProductsComponent} from "@app/admin/manage-products/manage-products.component";
import { SaveProductComponent } from './save-product/save-product.component';
import {FileUploadModule} from "ng2-file-upload";
import {ManageProductsRoutingModule} from "@app/admin/manage-products/manage-products-routing.module";
import { CurrentImagesComponent } from './save-product/current-images/current-images.component';
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
    SaveProductComponent,
    CurrentImagesComponent,
  ]
})
export class ManageProductsModule { }
