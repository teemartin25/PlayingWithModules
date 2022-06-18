import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/data-storage.service';
import { Profile } from 'src/app/profile.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  profiles!: Profile[];

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.profiles = this.dataStorageService.getProfiles();
  }
}
