import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contact-model';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: ContactModel[] = [];

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.showContacts();
  }

  hideContacts() {
    this.contacts = [];
  }

  showContacts() {
    this.contactsService.getContacts().subscribe(contacts => { this.contacts = contacts });
  }

}
