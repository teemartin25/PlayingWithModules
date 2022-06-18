import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadRoutingModule } from './upload-routing.module';

@NgModule({
  declarations: [UploadImagesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    UploadRoutingModule,
  ],
  exports: [UploadImagesComponent],
})
export class UploadModule {}
