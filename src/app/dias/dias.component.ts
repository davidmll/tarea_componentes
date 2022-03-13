import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent implements OnInit {

  allDias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

  constructor() { }

  ngOnInit(): void {
  }

  eliminarDias(){
    this.allDias.pop();
  }

}
