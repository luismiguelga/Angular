// Aqui se importa
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {
//Pasar datos del padre al hijo y del hijo al padre:
// Recibe el parametro con el nombre tittle del componente padre
 @Input() title?: string ;

//Del hijo al padre-------------------------------------
  //Un nuevo envento (se dispara cada vez que se presione una tecla sobre el input):
  @Output()titlechange = new EventEmitter<string>();
 

  emitTitlechange(){
    this.titlechange.emit(this.title);
  }
  

}

