import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UploadImagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'upload-image', component: UploadImagesComponent },
    ]),
  ],
  exports: [UploadImagesComponent],
})
export class UploadModule {}
