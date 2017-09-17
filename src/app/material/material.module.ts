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
  MdListModule,
  MdFormFieldModule,
  MdInputModule
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
    MdListModule,
    MdFormFieldModule,
    MdInputModule
  ],

  declarations: []
})
export class MaterialModule { }
