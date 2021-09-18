import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoodStoreService {

  private _mood = '';

  get mood(): string {
    return this._mood;
  }

  set mood(value: string) {
    this._mood = value;
  }

  constructor() {
  }
}
