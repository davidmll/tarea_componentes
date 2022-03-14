import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombres-paises',
  templateUrl: './nombres-paises.component.html',
  styleUrls: ['./nombres-paises.component.css']
})
export class NombresPaisesComponent implements OnInit {

  allPaises = ["España","Portugal","Brasil","EEUU","Macedonia","Alemania"];
  divPaises = document.querySelector(".paises");
  isShow : boolean = true;
  elementoBorrado  : any;
  arrayBorrado = new Array();
  content :boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarPaises(){

    if(this.content === false){
      this.content = true;
    }else{
      this.content = false;
    }
  }

  eliminarPaises(){
    this.elementoBorrado = this.allPaises.pop();

    this.arrayBorrado.push(this.elementoBorrado);

  }


}
