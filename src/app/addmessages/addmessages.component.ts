import { Component } from '@angular/core';
//Se importa el servicio
import { MessageService } from '../message.service';



@Component({
  selector: 'app-addmessages',
  templateUrl: './addmessages.component.html',
  styleUrl: './addmessages.component.css'
})
export class AddmessagesComponent {
  //Se inyecta con public para poder acceder con esta clase desde aca como desde el html del componente
  constructor(public messagesService: MessageService){}

  //servicio
  messages: string = ""

  //Este metodo es el que se recibe en el formulario
  //accedemos al metodo de (en este caso) messages.service.ts (el metodo es 'add')
  //le pasamos el mensaje que estamos recuperando en esta propiedad 'messages?'
  addMessage(){
    this.messagesService.add(this.messages);
  }
}
