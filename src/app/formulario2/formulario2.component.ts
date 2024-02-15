import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component implements OnInit {


//Metodos:
  procesar(){
    console.log(this.persona)
  }

  persona = {
    nombre: '',
    edad: '',

  };


  ngOnInit(): void {
  }

}
