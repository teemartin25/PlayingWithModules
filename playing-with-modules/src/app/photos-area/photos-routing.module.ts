import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PhotosComponent },
      { path: '**', redirectTo: '/home' },
    ]),
  ],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
