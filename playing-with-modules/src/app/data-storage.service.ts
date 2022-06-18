import { Injectable } from '@angular/core';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  profiles: Profile[] = [
    new Profile(
      'Conor McGregor',
      'notorius@gmail.com',
      'male',
      new Date(1988, 7, 25),
      'https://pngimg.com/uploads/conor_mcgregor/conor_mcgregor_PNG50.png'
    ),
    new Profile(
      'Stephen Curry',
      'greatestshooter@gmail.com',
      'male',
      new Date(1988, 3, 15),
      'https://a.espncdn.com/i/headshots/nba/players/full/3975.png'
    ),
    new Profile(
      'Harvey Spectre',
      'iamthebestlawyer@gmail.com',
      'male',
      new Date(1975, 5, 4),
      'https://www.pngkey.com/png/full/255-2557779_harvey-specter-first-impression-quote.png'
    ),
  ];

  constructor() {}

  getProfiles(): Profile[] {
    return this.profiles;
  }

  addProfile(
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

  deleteProfile(profile: Profile) {
    this.profiles = this.profiles.filter((p) => p !== profile);
  }
}
