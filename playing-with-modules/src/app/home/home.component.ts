import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { Profile } from '../profile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  profiles!: Profile[];

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.profiles = this.dataStorageService.getProfiles();
  }
}
