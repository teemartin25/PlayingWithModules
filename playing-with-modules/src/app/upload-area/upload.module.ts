import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploadImagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'upload-image', component: UploadImagesComponent },
    ]),
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [UploadImagesComponent],
})
export class UploadModule {}
