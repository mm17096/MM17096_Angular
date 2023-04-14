import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {

  //cambiamos la propiedad disable del input y den button
  habilitar: boolean = false;

  //cambiamos la propiedad class al button
  clase:string = 'btn btn-danger';

  //para cambiar la propiedad placeholder
  txtPlaceHolder: string = 'Su nombre';

  //para cambiar la propiedad del tipo de input
  txtType:string = 'radio';

  //cambiar la propiedad checkbox
  isChecked:boolean = true;

  cambiarPropiedad(){
    this.habilitar =! this.habilitar;
    this.txtPlaceHolder = 'Desabilitado';
    this.txtType = 'checkbox';
    this.isChecked =! this.isChecked;
    this.clase = 'btn btn-primary';
  }
}
