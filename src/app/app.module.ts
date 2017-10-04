import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { EcommerceModule } from '@store/ecommerce.module';

import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { SideNavService } from './side-nav.service';
import { HomeComponent } from '@pages/home/home.component';
import { AboutComponent } from '@pages/about/about.component';
import { VintageComponent } from '@pages/vintage/vintage.component';
import { CheckoutComponent } from '@pages/checkout/checkout.component';
import { CheckoutFormComponent } from '@forms/checkout-form/checkout-form.component';
import { AddressFieldsComponent } from '@forms/input-groups/address-fields/address-fields.component';
import { PaymentFieldsComponent } from '@forms/input-groups/payment-fields/payment-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainFooterComponent,
    HomeComponent,
    AboutComponent,
    VintageComponent,
    CheckoutComponent,
    CheckoutFormComponent,
    AddressFieldsComponent,
    PaymentFieldsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EcommerceModule
  ],
  providers: [
    SideNavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
