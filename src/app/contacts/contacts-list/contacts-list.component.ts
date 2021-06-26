import { Component, OnInit } from '@angular/core';
import { CONTACTS } from 'src/app/data/contacts-data';
import { ContactModel } from 'src/app/models/contact-model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: ContactModel[] = CONTACTS;

  constructor() { }

  ngOnInit(): void {
  }

  hideContacts() {
    this.contacts = [];
  }

  showContacts() {
    this.contacts = CONTACTS;
  }

}
