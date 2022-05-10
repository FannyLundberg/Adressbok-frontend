import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addContact() {
    console.log("Klick på knappen");

    // Skicka info om kontakten till services
  }

}
