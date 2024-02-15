import { Component, OnInit } from '@angular/core';
import { Persona } from '../personas';


@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent implements OnInit{
  
personas: Persona[] =[
  { nombre: 'juan', edad: 20},
  { nombre: 'luis', edad: 19},
  { nombre: 'andre', edad: 20},
];

 
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
