import { Injectable } from '@angular/core';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  profiles: Profile[] = [];

  constructor() {}

  addToProfile(
    name: string,
    email: string,
    gender: string,
    birthdate: Date,
    imageUrl: string
  ) {
    const addedProfile = new Profile(name, email, gender, birthdate, imageUrl);

    console.log(this.profiles);
    this.profiles.push(addedProfile);
  }

  getProfiles(): Profile[] {
    return this.profiles;
  }
}
