import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
