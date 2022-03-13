import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit {

  allComidas = ["Pasta","Arroz","Fregoles","Pizza","Guisantes con jamón","Cachopo"]
  constructor() { }

  ngOnInit(): void {
  }

  eliminarComida(){
    this.allComidas.pop();
  }

}
