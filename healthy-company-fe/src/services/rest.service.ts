import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JournalResponse} from './dto/JournalResponse';
import {UserDetailResponse} from './dto/UserDetailResponse';
import {JournalObj} from './dto/JournalObj';
import {UserDeetsRequest} from './dto/UserDeetsRequest';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  calculateSemantic(journalObj: JournalObj) {
    return this.http.post<JournalResponse>(this.baseUrl + '/save-journal-data', journalObj);
  }

  // tslint:disable-next-line:typedef
  retrieveUserDetails(userDeetsRequest: UserDeetsRequest) {
    return this.http.post<UserDetailResponse>(this.baseUrl + '/retrieve-user-details', userDeetsRequest);
  }

  // tslint:disable-next-line:typedef
  retrieveMemberJournalHistory(userId: number) {
    return this.http.post<JournalResponse[]>(this.baseUrl + '/retrieve-journal-data', userId);
  }

}
