import { Component, Input, Output } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { EventEmitter } from '@angular/core';
import { API_PEST } from 'src/app/constants/routes/routes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() obj!: IMascota;
 /* Para enviar la accion de eliminar al padre, utilizanmos el decorador Output */
 @Output() eliminar = new EventEmitter();

  pets = API_PEST;

  eliminarPets(obj:string){
    this.eliminar.emit(obj); /* para enviar la accion al componente padre, enviamos el id a eliminar */
  }

}
