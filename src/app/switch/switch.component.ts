import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent implements OnInit{

//Signo de interrogacion especifica que no quiere darle ningun valor 
  dia?: string;


  // dia: string = '2';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
