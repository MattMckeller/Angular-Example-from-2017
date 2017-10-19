import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ManageProductsComponent} from "@app/admin/manage-products/manage-products.component";
import {CreateProductComponent} from "@app/admin/manage-products/create-product/create-product.component";

const routes: Routes = [
  { path: 'admin/manage-products/product/:id',  component: CreateProductComponent },
  { path: 'admin/manage-products/product',  component: CreateProductComponent },
  { path: 'admin/manage-products',  component: ManageProductsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ManageProductsRoutingModule {}
