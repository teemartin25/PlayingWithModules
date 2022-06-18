import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { MaterialModule } from '../material/material.module';
import { PhotosRoutingModule } from './photos-routing.module';

@NgModule({
  declarations: [PhotosComponent],
  imports: [CommonModule, MaterialModule, PhotosRoutingModule],
  exports: [PhotosComponent],
})
export class PhotosModule {}
