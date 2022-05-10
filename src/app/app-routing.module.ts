import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { HomeComponent } from './components/home/home.component';
import { ShowContactsComponent } from './components/show-contacts/show-contacts.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "add-contact", component: AddContactComponent },
  { path: "show-contacts", component: ShowContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
