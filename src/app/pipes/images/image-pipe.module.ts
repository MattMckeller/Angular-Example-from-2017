import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SafeImagePipe} from "@app/pipes/images/safe-image.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SafeImagePipe
  ],
  exports:[
    SafeImagePipe
  ],
})
export class ImagePipeModule { }
