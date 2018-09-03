import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

	message:boolean = false;

	constructor() {}

	sendMessage() {
		console.log("Enviar mensaje" + this.message);
		this.message = true;
	}

}
