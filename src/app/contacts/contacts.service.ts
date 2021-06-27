import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private baseApiUrl = 'http://contactsapi';

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}/contacts`);
  }

  getContactById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}/contact/${id}`);
  }

  addContact(data: {}): Observable<any> {
    return this.httpClient.post(`${this.baseApiUrl}/contact/add`, data);
  }
}
