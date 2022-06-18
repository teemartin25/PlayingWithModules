import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataStorageService } from 'src/app/data-storage.service';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss'],
})
export class UploadImagesComponent implements OnInit {
  createProfileForm!: FormGroup;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.createProfileForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl('male'),
      birthdate: new FormControl(null),
      imageUrl: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.createProfileForm.value.name);
    this.dataStorageService.addToProfile(
      this.createProfileForm.value.name,
      this.createProfileForm.value.email,
      this.createProfileForm.value.gender,
      this.createProfileForm.value.birthdate,
      this.createProfileForm.value.imageUrl
    );

    this.createProfileForm.reset();
  }
}
