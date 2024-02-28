import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messages: string[] = ['a', 'b'];
//  Este es el metodo que generamos (add)
  add(messages: string){
    this.messages.push(messages);
  }
}
//Todos lo mensajes que se creen se van a almacenar aca