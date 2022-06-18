import { NgModule } from '@angular/core';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UploadRoutingModule } from './upload-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UploadImagesComponent],
  imports: [ReactiveFormsModule, UploadRoutingModule, SharedModule],
  exports: [UploadImagesComponent], // I don't remember why I put this here. But this probably can be removed
})
export class UploadModule {}
