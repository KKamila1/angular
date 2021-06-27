import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {

  contactForm!: FormGroup;
  private firstNamePattern: string | RegExp ='^[A-z]{3,20}$';
  private surnamePattern: string | RegExp ='^[A-z]{3,20}$';
  private phoneNumberPattern: string | RegExp ='^[0-9]{9,12}$';

  constructor(private formBuilder: FormBuilder, private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
    this.buildContactForm();
  }

  private buildContactForm() {
    this.contactForm = new FormGroup({
      surname: new FormControl('', [Validators.required, Validators.pattern(this.surnamePattern)]),
      firstName: new FormControl('', [Validators.required, Validators.pattern(this.firstNamePattern)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(this.phoneNumberPattern)])
    });
  }

  addContact(){
    this.contactsService.addContact(this.contactForm.value).subscribe(()=>{
      this.router.navigate(['/contacts']);
    })
  }

}
