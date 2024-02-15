import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit {
 
  ngOnInit(): void {
  }

  numero: number= 1;

  decrementar(){
    this.numero--;
  }
}
