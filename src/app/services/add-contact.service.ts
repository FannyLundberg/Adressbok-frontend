import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddContactService {
  
  constructor() { }

  addContact(user: any) {

    // Här ska det vara en POST
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch((error) => {
      console.log("Error: " + error)
    })
  }

}
