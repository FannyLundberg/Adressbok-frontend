import { Component, OnInit } from '@angular/core';
import { AddContactService } from 'src/app/services/add-contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  name: string = "";
  email: string = "";
  phone: string = "";
  formSubmitted: boolean = false;

  constructor(private service: AddContactService) { }

  ngOnInit(): void {
  }

  addContact(name: string, email: string, phone: string) {
    console.log(name, email, phone);

    let user = {
      name,
      email,
      phone
    }

    this.service.addContact(user)

    this.formSubmitted = true;
  }

}
