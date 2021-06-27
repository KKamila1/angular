import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactAddComponent } from './contact-add/contact-add.component';



@NgModule({
  declarations: [
    ContactsListComponent,
    ContactDetailsComponent,
    ContactAddComponent

  ],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  exports:[
    ContactsListComponent,
    ContactDetailsComponent
  ]
})
export class ContactsModule { }
