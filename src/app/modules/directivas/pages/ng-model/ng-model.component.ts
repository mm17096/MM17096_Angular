import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {
  titulo = 'Directiva NgModel';
  nombre = '';
  nombre2 = '';
  formatNombre(): void {
    this.nombre = this.nombre.toLowerCase();
    this.nombre2 = this.nombre.toUpperCase();
  }
}
