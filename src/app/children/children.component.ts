// Aqui se importa
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {
// Recibe el parametro con el nombre tittle del componente padre
    @Input() title?: string ;
}
