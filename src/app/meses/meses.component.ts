import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent implements OnInit {

  allMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Obtubre","Noviembre","Diciembre"];

  constructor() { }

  ngOnInit(): void {
  }

  eliminarMes(){
    this.allMeses.pop();
  }



}
