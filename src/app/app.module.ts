import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { EcommerceModule } from './store/ecommerce.module';

import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { SideNavService } from './side-nav.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VintageComponent } from './vintage/vintage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutFormComponent } from './checkout/checkout-form/checkout-form.component';
import { AddressFieldsComponent } from './forms/address-fields/address-fields.component';

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
    AddressFieldsComponent
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
