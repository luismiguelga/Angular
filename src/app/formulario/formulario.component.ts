import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{

  
  openAlert: boolean = false;


  constructor(){}
  ngOnInit(): void {    
  }

//metodo:
  mostrar_en_c(name: string){
    console.log(name);
    this.openAlert=true
  }




}
