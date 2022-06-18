import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'upload-image',
    loadChildren: () =>
      import('./upload-area/upload.module').then((m) => m.UploadModule),
  },
  {
    path: 'view-photos',
    loadChildren: () =>
      import('./photos-area/photos.module').then((m) => m.PhotosModule),
  },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
