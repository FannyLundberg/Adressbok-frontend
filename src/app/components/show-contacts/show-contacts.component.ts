import { Component, OnInit } from '@angular/core';
import { GetContactsService } from 'src/app/services/get-contacts.service';

@Component({
  selector: 'app-show-contacts',
  templateUrl: './show-contacts.component.html',
  styleUrls: ['./show-contacts.component.scss']
})
export class ShowContactsComponent implements OnInit {

  data: any;

  constructor(private service: GetContactsService) { }

  ngOnInit(): void {

    this.service.getContacts();

    this.service.data$.subscribe(dataFromApi => {
      this.data = dataFromApi;
    });
  };

}
