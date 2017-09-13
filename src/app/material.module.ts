import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule,
  MdGridListModule,
  MdCardModule,
  MdListModule
} from '@angular/material';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdGridListModule,
    MdCardModule,
    MdListModule
  ],

  declarations: []
})
export class MaterialModule { }
