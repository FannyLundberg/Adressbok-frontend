import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetContactsService {

  private data = new Subject<any>();
  data$: Observable<any> = this.data.asObservable();

  constructor() { }

  getContacts() {
    // Här ska det vara en GET

      // Här ska det vara en POST
      fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(data => {
  
        console.log(data.contacts);
  
        if (data.message == "success") {
  
          console.log("Success i fetchen")
          console.log(data.contacts[0].name)

          this.data.next(data.contacts);
  
        } else {
  
          console.log("Error i fetchen")
          this.data.next("Error");
        }
  
      })
      .catch((error) => {
        console.log("Error: " + error)
      })
    
  }
}
