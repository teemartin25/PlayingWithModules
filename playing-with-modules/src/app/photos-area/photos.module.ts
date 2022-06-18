import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos/photos.component';
import { PhotosRoutingModule } from './photos-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PhotosComponent],
  imports: [PhotosRoutingModule, SharedModule],
  exports: [PhotosComponent], // I don't remember why I put this here. But this probably can be removed
})
export class PhotosModule {}
