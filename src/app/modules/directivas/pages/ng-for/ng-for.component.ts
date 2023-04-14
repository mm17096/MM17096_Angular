import { Component, OnInit } from '@angular/core';
import { Producto } from '@modules/directivas/interface/producto.interface'; 
import { Frutas } from '@modules/directivas/interface/frutas.interface';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {

  listaFrutas: Frutas[] = [
    { nombre: 'Sandia', url: "https://th.bing.com/th/id/R.11b4bdc015fd592ee18cb029212e7700?rik=fGpZHstx8jawgA&pid=ImgRaw&r=0" },
    { nombre: 'Mango', url: "https://th.bing.com/th/id/R.b9a9572162d4f39da9ba36e0528585aa?rik=5jGHeodaJYpo5w&pid=ImgRaw&r=0"},
    { nombre: 'Platano', url: "https://4.bp.blogspot.com/-M4QvWZAqTdc/UcaIep2B0SI/AAAAAAAAEnM/m-Q2SVd0GnA/s1600/0_da76e_7c1dd3c8_L.png"},
    { nombre: 'Zapote', url: "https://th.bing.com/th/id/R.34d4b311e93ae1c78219f661bb84ac9b?rik=nF0X5MqnBUCOzw&riu=http%3a%2f%2fdelcarmenfruits.com%2fimages%2fproducts%2ffruits%2fmamey-frozen-USA.png&ehk=HPI4kfDf%2ba6xtLndZTyDXjpgBl42YkWrqDCK9G%2f2BlI%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" }
  ];

  listaProductos: Producto[] = [
    { nombre: 'Producto 1', precio: 10.99, stock: 5 },
    { nombre: 'Producto 2', precio: 19.99, stock: 8 },
    { nombre: 'Producto 3', precio: 7.99, stock: 3 },
    { nombre: 'Producto 4', precio: 24.99, stock: 2 }
  ];

}
