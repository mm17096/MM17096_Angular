import { Component } from '@angular/core'


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {

  texto = 'Hola mundo!';
  numero = 1234.56;
  date = new Date();
  user = "Kevin";

}
