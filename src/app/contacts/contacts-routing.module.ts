import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

const CONTACTS_ROUTES: Routes=[
  {path:'contact/:id', component: ContactDetailsComponent},
  {path:'contacts', component: ContactsListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(CONTACTS_ROUTES)],
  exports: [RouterModule]
})

export class ContactsRoutingModule {}
