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
 
  @Output() mascota = new EventEmitter();

  pets = API_PEST;

  eliminar(mascota: string){
     this.mascota.emit(mascota);
  }

}
