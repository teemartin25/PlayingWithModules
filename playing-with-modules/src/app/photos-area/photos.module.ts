import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'view-photos', component: PhotosComponent },
    ]),
  ],
  exports: [PhotosComponent],
})
export class PhotosModule {}
