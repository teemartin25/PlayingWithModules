import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UploadImagesComponent } from './upload-images/upload-images.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: UploadImagesComponent }]),
  ],
  exports: [RouterModule],
})
export class UploadRoutingModule {}
