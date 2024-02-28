import { Component } from '@angular/core';
import { MessageService} from '../message.service';


@Component({
  selector: 'app-listmessages',
  templateUrl: './listmessages.component.html',
  styleUrl: './listmessages.component.css'
})
export class ListmessagesComponent {

  constructor(public messagesService: MessageService){}

}
