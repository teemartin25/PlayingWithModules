import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PhotosComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'view-photos', component: PhotosComponent },
      { path: '**', redirectTo: '/home' },
    ]),
  ],
  exports: [PhotosComponent],
})
export class PhotosModule {}
